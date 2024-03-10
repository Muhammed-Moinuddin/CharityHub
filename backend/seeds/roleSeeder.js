import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { Role } from "../models/role/roleModel.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    seedRoles();
  })
  .catch((err) => {
    console.log(err);
  });

async function seedRoles() {
  try {
    // Define role data
    const rolesData = [
      { name: "admin" },
      { name: "donor" },
      { name: "organization" },
      { name: "user" },
    ];

    // Insert roles into the database
    const roles = await Role.insertMany(rolesData);

    console.log("Roles seeded successfully:", roles);
    mongoose.disconnect(); // Disconnect after seeding
  } catch (err) {
    console.error("Error seeding roles:", err);
    mongoose.disconnect(); // Disconnect on error
  }
}
