import { ITodoRepository } from "../../domain/interfaces/ITodoRepository";
import { TodoResponseDTO } from "../dto/TodoDTO";

export const listTodosUseCase = (
  todoRepository: ITodoRepository
) => async (): Promise<TodoResponseDTO[]> => {
  const todos = await todoRepository.findAll();
  return todos.map((todo) => ({
    id: todo.id,
    title: todo.title,
    isCompleted: todo.isCompleted,
    createdAt: todo.createdAt.toISOString(),
  }));
};
