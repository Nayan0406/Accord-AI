import './database/dbconnection.js';
import Blog from './models/Blog.js';
import { scrapeFlaskBlogs } from './utlis/syncFlaskBlog.js';

// Clear old blogs and add new ones
setTimeout(async () => {
  console.log('🗑️ Clearing old blogs...');
  
  // Delete all existing blogs
  await Blog.deleteMany({});
  console.log('✅ Old blogs cleared');
  
  // Get fresh blogs from scraping
  console.log('🔄 Scraping fresh blogs...');
  const freshBlogs = await scrapeFlaskBlogs();
  
  // Add new blogs
  for (const blog of freshBlogs) {
    await Blog.create({
      title: blog.title,
      content: blog.description,
      author: "AutoBot",
      date: new Date(blog.date),
      image: blog.image,
      link: blog.link,
      source: blog.source
    });
    console.log(`✅ Added: ${blog.title}`);
  }
  
  console.log(`🎉 Successfully added ${freshBlogs.length} fresh blogs with real content and images!`);
  process.exit(0);
}, 3000);
