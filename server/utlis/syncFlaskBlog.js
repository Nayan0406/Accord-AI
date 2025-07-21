// server/utils/syncFlaskBlog.js

import axios from "axios";
import Blog from "../models/Blog.js";

// Function to scrape automatic blogs from Flask homepage
export async function scrapeFlaskBlogs() {
  try {
    console.log("🔍 Scraping Flask homepage for automatic blogs...");
    const homeUrls = [
      "http://127.0.0.1:5001/",
      "http://localhost:5001/"
    ];
    
    for (const url of homeUrls) {
      try {
        const res = await axios.get(url, { timeout: 10000 });
        const html = res.data;
        
        // Extract blog cards with images, titles, and links
        const cardMatches = html.match(/<div class="card">[\s\S]*?<\/div>\s*<\/div>/g);
        
        if (cardMatches) {
          const blogs = [];
          
          for (const cardMatch of cardMatches) {
            // Extract image URL
            const imageMatch = cardMatch.match(/<img src="([^"]+)"/);
            // Extract title
            const titleMatch = cardMatch.match(/<h3>(.*?)<\/h3>/);
            // Extract link
            const linkMatch = cardMatch.match(/<a href="(\/blog_output\/[^"]+)"/);
            
            if (titleMatch && linkMatch) {
              const blogUrl = url.replace(/\/$/, '') + linkMatch[1]; // Remove trailing slash and add link
              
              // Fetch actual blog content from the Flask blog page
              let blogContent = `Automatic blog: ${titleMatch[1].trim()}`;
              try {
                console.log(`📄 Fetching content from: ${blogUrl}`);
                const blogRes = await axios.get(blogUrl, { timeout: 10000 });
                
                // Extract content from Flask blog page - looking for content inside blog-container
                const containerMatch = blogRes.data.match(/<div class="blog-container">([\s\S]*?)<\/div>/);
                if (containerMatch) {
                  // Extract all paragraph content
                  const paragraphs = containerMatch[1].match(/<p>([\s\S]*?)<\/p>/g);
                  if (paragraphs) {
                    blogContent = paragraphs
                      .map(p => p.replace(/<[^>]*>/g, '')) // Remove HTML tags
                      .join('\n\n') // Join paragraphs with double newlines
                      .replace(/&nbsp;/g, ' ') // Replace &nbsp; with space
                      .replace(/&amp;/g, '&') // Replace &amp; with &
                      .replace(/&lt;/g, '<') // Replace &lt; with <
                      .replace(/&gt;/g, '>') // Replace &gt; with >
                      .replace(/&quot;/g, '"') // Replace &quot; with "
                      .replace(/&#39;/g, "'") // Replace &#39; with '
                      .trim();
                    
                    console.log(`✅ Extracted ${blogContent.length} characters of content from ${blogUrl}`);
                  }
                }
              } catch (contentError) {
                console.log(`⚠️ Could not fetch content from ${blogUrl}, using title as content`);
              }
              
              blogs.push({
                title: titleMatch[1].trim(),
                link: blogUrl,
                description: blogContent,
                image: imageMatch ? imageMatch[1] : "https://via.placeholder.com/600x400/0066cc/ffffff?text=Auto+Blog",
                date: new Date().toISOString().split('T')[0],
                source: "auto-scraped"
              });
            }
          }
          
          console.log(`🎯 Found ${blogs.length} automatic blogs on homepage`);
          return blogs;
        }
      } catch (urlError) {
        console.log(`❌ Failed to scrape ${url}:`, urlError.message);
        continue;
      }
    }
    
    return [];
  } catch (error) {
    console.error("❌ Error scraping Flask blogs:", error.message);
    return [];
  }
}

export async function syncFlaskBlog() {
  try {
    console.log("🔄 Starting Flask blog sync...");
    
    // Try both URLs in case one doesn't work
    const urls = [
      "http://127.0.0.1:5001/api/blogs",
      "http://localhost:5001/api/blogs"
    ];
    
    let flaskBlogs = [];
    let success = false;
    
    for (const url of urls) {
      try {
        console.log(`📡 Trying to fetch from: ${url}`);
        const res = await axios.get(url, { timeout: 10000 });
        flaskBlogs = res.data.blogs || [];
        console.log(`✅ Successfully fetched ${flaskBlogs.length} blogs from ${url}`);
        success = true;
        break;
      } catch (urlError) {
        console.log(`❌ Failed to fetch from ${url}:`, urlError.message);
        continue;
      }
    }
    
    if (!success) {
      console.log("⚠️ API fetch failed, trying to scrape homepage...");
      flaskBlogs = await scrapeFlaskBlogs();
      if (flaskBlogs.length > 0) {
        success = true;
      }
    } else {
      // Check if API returned only test blogs or placeholder content
      const testBlogCount = flaskBlogs.filter(blog => blog.title === 'Test Blog').length;
      const placeholderCount = flaskBlogs.filter(blog => blog.image && blog.image.includes('placeholder')).length;
      
      if ((testBlogCount === flaskBlogs.length && flaskBlogs.length > 0) || 
          (placeholderCount === flaskBlogs.length && flaskBlogs.length > 0)) {
        console.log("⚠️ API returned only test blogs or placeholder content, trying to scrape homepage for real blogs...");
        const scrapedBlogs = await scrapeFlaskBlogs();
        if (scrapedBlogs.length > 0) {
          console.log(`🎯 Found ${scrapedBlogs.length} real blogs on homepage, using scraped data instead`);
          flaskBlogs = scrapedBlogs;
        }
      }
    }
    
    if (!success) {
      throw new Error("Failed to fetch from all Flask URLs and scraping failed");
    }

    console.log("Flask blogs raw:", flaskBlogs);

    let addedCount = 0;
    for (const flaskBlog of flaskBlogs) {
      const existing = await Blog.findOne({ title: flaskBlog.title });

      if (!existing) {
        await Blog.create({
          title: flaskBlog.title,
          content: flaskBlog.description || flaskBlog.content, // Use description for scraped content
          author: "AutoBot",
          date: new Date(flaskBlog.date),
          image: flaskBlog.image,
          link: flaskBlog.link,
          source: flaskBlog.source || "auto"
        });

        console.log(`✅ Added blog: ${flaskBlog.title}`);
        addedCount++;
      } else {
        console.log(`⏭️ Blog already exists: ${flaskBlog.title}`);
      }
    }
    
    console.log(`🎉 Sync completed: ${addedCount} new blogs added out of ${flaskBlogs.length} total blogs`);
    
  } catch (err) {
    console.error("❌ Error syncing Flask blogs:", err.message);
    console.error("Full error:", err);
  }
}

export default syncFlaskBlog;
