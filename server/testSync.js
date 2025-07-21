import './database/dbconnection.js';
import syncFlaskBlog from './utlis/syncFlaskBlog.js';

// Wait for database connection
setTimeout(async () => {
  console.log('Starting sync test...');
  await syncFlaskBlog();
  console.log('Sync test completed!');
  process.exit(0);
}, 2000);
