import { Router } from "express";
import { todoController } from "../controllers/todoController";
import { todoRepository } from "../../infrastructure/database/repository/todoRepository";
import { todoService } from "../../infrastructure/adapters/todoService";

const router = Router();

const repository = todoRepository();
const service = todoService(repository);
const controller = todoController(service);

router.get("/", controller.listTodos);
router.post("/", controller.createTodo);
router.delete("/:id", controller.deleteTodo);

export const todoRoutes = router;

