import mongoose from "mongoose";

const causeCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

export const CauseCategory = mongoose.model("CauseCategory", causeCategorySchema);