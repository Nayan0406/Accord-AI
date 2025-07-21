import dotenv from 'dotenv';
import mongoose from 'mongoose';
import syncFlaskBlog from './utlis/syncFlaskBlog.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB first
const connectAndSync = async () => {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected successfully');
    
    console.log('Starting sync test...');
    await syncFlaskBlog();
    console.log('Sync test completed!');
    
    // Close connection
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
    process.exit(0);
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

connectAndSync();
