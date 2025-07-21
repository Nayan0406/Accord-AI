import './database/dbconnection.js';
import syncFlaskBlog from './utlis/syncFlaskBlog.js';

// Test the scraping function specifically
async function testScraping() {
  console.log('Testing Flask blog scraping...');
  
  // Import the function directly
  const { scrapeFlaskBlogs } = await import('./utlis/syncFlaskBlog.js');
  
  try {
    const scrapedBlogs = await scrapeFlaskBlogs();
    console.log('Scraped blogs:', scrapedBlogs);
  } catch (error) {
    console.error('Scraping error:', error);
  }
}

setTimeout(testScraping, 2000);
