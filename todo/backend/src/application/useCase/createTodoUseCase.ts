import { ITodoRepository } from "../../domain/interfaces/ITodoRepository";
import { TodoEntity } from "../../domain/entities/TodoEntity";

export class CreateTodoUseCase {
  constructor(private repo: ITodoRepository) {}

  async execute(title: string): Promise<TodoEntity> {
    if (!title.trim()) throw new Error("Title required");
    return await this.repo.create(title.trim());
  }
}
