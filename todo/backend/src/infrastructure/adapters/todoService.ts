import { ITodoService } from "../../application/ports/ITodoService";
import { CreateTodoDTO, TodoResponseDTO } from "../../application/dto/TodoDTO";
import { ITodoRepository } from "../../domain/interfaces/ITodoRepository";
import { createTodoUseCase } from "../../application/useCase/createTodoUseCase";
import { listTodosUseCase } from "../../application/useCase/listTodoUseCase";
import { deleteTodoUseCase } from "../../application/useCase/deleteTodoUseCase";

export const todoService = (todoRepository: ITodoRepository): ITodoService => {
  const createTodo = createTodoUseCase(todoRepository);
  const listTodos = listTodosUseCase(todoRepository);
  const deleteTodo = deleteTodoUseCase(todoRepository);

  const createTodoService = async (dto: CreateTodoDTO): Promise<TodoResponseDTO> =>
    createTodo(dto);

  const listTodosService = async (): Promise<TodoResponseDTO[]> =>
    listTodos();

  const deleteTodoService = async (id: string): Promise<void> =>
    deleteTodo(id);

  return {
    createTodo: createTodoService,
    listTodos: listTodosService,
    deleteTodo: deleteTodoService,
  };
};
