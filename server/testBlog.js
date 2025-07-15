import mongoose from 'mongoose';
import Blog from './models/Blog.js';
import dotenv from 'dotenv';

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    createTestBlog();
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

async function createTestBlog() {
  try {
    // Create a test blog
    const testBlog = new Blog({
      title: 'Test Blog Post',
      content: 'This is a test blog post to check if the database connection is working properly.',
      author: 'Test Author',
      date: new Date()
    });

    await testBlog.save();
    console.log('Test blog created successfully:', testBlog);

    // Fetch all blogs
    const allBlogs = await Blog.find();
    console.log('All blogs in database:', allBlogs.length);
    allBlogs.forEach(blog => {
      console.log('- Blog:', blog.title, 'by', blog.author);
    });

    process.exit(0);
  } catch (error) {
    console.error('Error creating test blog:', error);
    process.exit(1);
  }
}
