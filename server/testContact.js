import mongoose from 'mongoose';
import Contact from './models/Contact.js';
import dotenv from 'dotenv';

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    createTestContact();
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

async function createTestContact() {
  try {
    // Create a test contact
    const testContact = new Contact({
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1234567890',
      message: 'This is a test contact message to verify the contact form functionality.'
    });

    await testContact.save();
    console.log('Test contact created successfully:', testContact);

    // Fetch all contacts
    const allContacts = await Contact.find();
    console.log('All contacts in database:', allContacts.length);
    allContacts.forEach(contact => {
      console.log(`- Contact: ${contact.name} (${contact.email})`);
    });

    process.exit(0);
  } catch (error) {
    console.error('Error creating test contact:', error);
    process.exit(1);
  }
}
