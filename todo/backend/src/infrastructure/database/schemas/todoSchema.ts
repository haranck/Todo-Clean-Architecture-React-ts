import { Schema } from "mongoose";

export const todoSchema = new Schema(
  {
    title: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);
