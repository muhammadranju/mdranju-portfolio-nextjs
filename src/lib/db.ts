import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cachedConnection: typeof mongoose | null = null;

async function connectDB() {
  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    cachedConnection = await mongoose.connect(MONGODB_URI || "", {
      bufferCommands: false,
    });
    console.log("database connection successfully!");
    return cachedConnection;
  } catch (error) {
    cachedConnection = null;
    throw error;
  }
}

export default connectDB;
