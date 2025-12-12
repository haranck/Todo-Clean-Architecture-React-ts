import { Request, Response } from "express";
import { TodoService } from "../../infrastructure/adapters/todoService";

export class TodoController {
  constructor(private service: TodoService) {}

  create = async (req: Request, res: Response) => {
    try {
      const todo = await this.service.create(req.body.title);
      res.status(201).json(todo);
    } catch (e: any) {
      res.status(400).json({ message: e.message });
    }
  };

  list = async (req: Request, res: Response) => {
    try {
      const todos = await this.service.list();
    } catch (e: any) {
      res.status(400).json({ message: e.message });
    }
  };
  
  delete = async (req: Request, res: Response) => {
    try {
      await this.service.delete(req.params.id);
      res.status(204).send();
    } catch {
      res.status(400).json({ message: "Delete failed" });
    }
  };
}
