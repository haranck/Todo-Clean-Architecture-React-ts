import { Schema, model, Document } from "mongoose";

interface TodoDoc extends Document {
  title: string;
  isCompleted: boolean;
  createdAt: Date;
}

const todoSchema = new Schema(
  {
    title: { type: String, required: true },
    isCompleted: { type: Boolean, default: false }
  },
  { timestamps: true }
  
);

export const TodoModel = model<TodoDoc>("Todo", todoSchema);

