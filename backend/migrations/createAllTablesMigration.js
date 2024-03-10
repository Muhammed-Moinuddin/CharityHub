import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { Role } from "../models/role/roleModel.js";
import { CauseCategory } from "../models/cause_category/causeCategoryModel.js";
import { User } from "../models/user/userModel.js";
import { Post } from "../models/post/postModel.js";

dotenv.config();

async function createCollections() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Check if each collection exists, and create it if it doesn't
        await createCollectionIfNotExists(Role);
        await createCollectionIfNotExists(CauseCategory);
        await createCollectionIfNotExists(User);
        await createCollectionIfNotExists(Post);

        // Disconnect from MongoDB
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    } catch (err) {
        console.error("Error creating collections:", err);
        process.exit(1); // Exit the process with an error code
    }
}

async function createCollectionIfNotExists(model) {
    const collectionExists = await model.exists();
    if (!collectionExists) {
        await model.createCollection();
        console.log(
            `Collection ${model.collection.collectionName} created successfully`
        );
    } else {
        console.log(`Collection ${model.collection.collectionName} already exists`);
    }
}

// Call the function to create collections
createCollections();
