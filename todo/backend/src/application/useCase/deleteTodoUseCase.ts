import { ITodoRepository } from "../../domain/interfaces/ITodoRepository";

export const deleteTodoUseCase = (
  todoRepository: ITodoRepository
) => async (id: string): Promise<void> => {
  if (!id) {
    throw new Error("Id is required");
  }
  await todoRepository.deleteById(id);
};
