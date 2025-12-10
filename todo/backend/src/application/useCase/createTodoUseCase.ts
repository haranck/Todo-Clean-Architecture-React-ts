import { ITodoRepository } from "../../domain/interfaces/ITodoRepository";
import { CreateTodoDTO, TodoResponseDTO } from "../dto/TodoDTO";

export const createTodoUseCase =
  (todoRepository: ITodoRepository) =>
  async (dto: CreateTodoDTO): Promise<TodoResponseDTO> => {
    
    if (!dto.title || !dto.title.trim()) {
      throw new Error("Title is required");
    }

    const todo = await todoRepository.create({ title: dto.title.trim() });

    return {
      id: todo.id,
      title: todo.title,
      isCompleted: todo.isCompleted,
      createdAt: todo.createdAt.toISOString(),
    };
  };
