import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

async function deleteCollections() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Define the names of the collections you want to delete
    const collections = ["users", "roles", "posts", "cause_categories"];

    // Loop through the collections and delete them if they exist
    for (let collection of collections) {
      const collectionExists = await mongoose.connection.db
        .listCollections({ name: collection })
        .next();
      if (collectionExists) {
        await mongoose.connection.dropCollection(collection);
        console.log(`Collection ${collection} deleted successfully`);
      } else {
        console.log(`Collection ${collection} does not exist`);
      }
    }

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (err) {
    console.error("Error deleting collections:", err);
    process.exit(1); // Exit the process with an error code
  }
}

// Call the function to delete collections
deleteCollections();