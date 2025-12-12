import { CreateTodoUseCase } from "../../application/useCase/createTodoUseCase";
import { listTodosUseCase } from "../../application/useCase/listTodoUseCase";
import { deleteTodoUseCase } from "../../application/useCase/deleteTodoUseCase";
import { ITodoRepository } from "../../domain/interfaces/ITodoRepository";

export class TodoService {
  private createTodo: CreateTodoUseCase;
  private listTodos: listTodosUseCase;
  private deleteTodo: deleteTodoUseCase;

  constructor(repo: ITodoRepository) {
    this.createTodo = new CreateTodoUseCase(repo);
    this.listTodos = new listTodosUseCase(repo);
    this.deleteTodo = new deleteTodoUseCase(repo);
  }

  create(title: string) {
    return this.createTodo.execute(title);
  }

  list() {
    return this.listTodos.execute();
  }

  delete(id: string) {
    return this.deleteTodo.execute(id);
  }
}
