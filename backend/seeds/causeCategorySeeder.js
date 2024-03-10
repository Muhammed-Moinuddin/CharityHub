import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { CauseCategory } from "../models/cause_category/causeCategoryModel.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    seedCauseCategories();
  })
  .catch((err) => {
    console.log(err);
  });

async function seedCauseCategories() {
  try {
    // Define cause category data
    const causeCategoryData = [
      { name: "Healthcare - Medical Assistance" },
      { name: "Disaster Relief - Humanitarian Aid" },
      { name: "Education" },
      { name: "Poverty Alleviation" },
      { name: "Environmental Conservation" },
      { name: "Animal Welfare" },
      { name: "Hunger Relief/Food Security" },
      { name: "Clean Water and Sanitation" },
      { name: "Human Rights" },
      { name: "Social Justice" },
      { name: "Disability Support" },
      { name: "Mental Health Awareness and Support" },
      { name: "Elderly Care" },
      { name: "Children and Youth Development" },
      { name: "Community Development" },
    ];

    // Insert cause category into the database
    const cause_categories = await CauseCategory.insertMany(causeCategoryData);

    console.log("Cause Categoris seeded successfully:", cause_categories);
    mongoose.disconnect(); // Disconnect after seeding
  } catch (err) {
    console.error("Error seeding cause categories:", err);
    mongoose.disconnect(); // Disconnect on error
  }
}
