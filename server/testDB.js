import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

console.log('Testing MongoDB connection...');
console.log('MONGO_URI:', process.env.MONGO_URI ? 'Found' : 'Not found');

try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('✅ MongoDB connected successfully');
  
  // Test blog creation
  const Blog = mongoose.model('Blog', {
    title: String,
    content: String,
    author: String,
    date: { type: Date, default: Date.now }
  });
  
  const testBlog = new Blog({
    title: 'Test Blog',
    content: 'This is a test blog',
    author: 'Test Author'
  });
  
  await testBlog.save();
  console.log('✅ Test blog created successfully');
  
  await mongoose.disconnect();
  console.log('✅ Disconnected from MongoDB');
} catch (error) {
  console.error('❌ Error:', error);
}
