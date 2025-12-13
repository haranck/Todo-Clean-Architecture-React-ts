import { Router } from "express";
import { TodoController } from "../controllers/todoController";
import { TodoRepository } from "../../infrastructure/database/repository/todoRepository";
import { TodoService } from "../../infrastructure/adapters/todoService";

export class TodoRoute {
  private readonly router: Router;
  private readonly controller: TodoController;

  constructor() {
    this.router = Router();

    const repo = new TodoRepository();
    const service = new TodoService(repo);
    this.controller = new TodoController(service);

    this.setRoutes();
  }

  private setRoutes(): void {
    this.router.get("/", this.controller.list.bind(this.controller));

    this.router.post("/", this.controller.create.bind(this.controller));

    this.router.delete("/:id", this.controller.delete.bind(this.controller));
  }

  public getRoutes(): Router {
    return this.router;
  }
}
