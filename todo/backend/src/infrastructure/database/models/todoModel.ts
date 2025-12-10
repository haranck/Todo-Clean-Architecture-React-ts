import { model, Document } from "mongoose";
import { todoSchema } from "../schemas/todoSchema";

export interface TodoDocument extends Document {
  title: string;
  isCompleted: boolean;
  createdAt: Date;
}

export const TodoModel = model<TodoDocument>("Todo", todoSchema);
