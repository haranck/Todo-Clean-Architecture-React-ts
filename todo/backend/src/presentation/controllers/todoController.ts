import { Request, Response } from "express";
import { ITodoService } from "../../application/ports/ITodoService";

export const todoController = (todoService: ITodoService) => {
  const createTodo = async (req: Request, res: Response) => {
    try {
      const { title } = req.body;
      const todo = await todoService.createTodo({ title });
      res.status(201).json(todo);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Failed to create todo" });
    }
  };

  const listTodos = async (_req: Request, res: Response) => {
    try {
      const todos = await todoService.listTodos();
      res.status(200).json(todos);
    } catch {
      res.status(500).json({ message: "Failed to load todos" });
    }
  };

  const deleteTodo = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await todoService.deleteTodo(id);
      res.status(204).send();
    } catch {
      res.status(500).json({ message: "Failed to delete todo" });
    }
  };

  return {
    createTodo,
    listTodos,
    deleteTodo,
  };
};
