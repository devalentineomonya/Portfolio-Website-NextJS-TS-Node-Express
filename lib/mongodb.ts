import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/devalentineProjects';

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}
let isConnected = false; 
export async function connectToDatabase() {
  if (isConnected) {
    console.log('Using existing database connection');
    return mongoose.connection;
  }
  try {
    const db = await mongoose.connect(uri);
    isConnected = db.connections[0].readyState === 1;
    console.log('Connected to MongoDB');
    return db;
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw error;
  }
}
