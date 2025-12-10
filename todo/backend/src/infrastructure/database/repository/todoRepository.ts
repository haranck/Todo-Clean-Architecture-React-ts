import { ITodoRepository, CreateTodoData } from "../../../domain/interfaces/ITodoRepository";
import { TodoEntity } from "../../../domain/entities/TodoEntity";
import { TodoModel } from "../models/todoModel";
import { TodoDocument } from "../models/todoModel";

const mapDocToEntity = (doc: TodoDocument): TodoEntity => ({
  id: doc._id.toString(),
  title: doc.title,
  isCompleted: doc.isCompleted,
  createdAt: doc.createdAt,
});

export const todoRepository = (): ITodoRepository => {
  const create = async (data: CreateTodoData): Promise<TodoEntity> => {
    const created = await TodoModel.create({
      title: data.title,
      isCompleted: false,
      
    });
    return mapDocToEntity(created);
  };

  const findAll = async (): Promise<TodoEntity[]> => {
    const docs = await TodoModel.find().sort({ createdAt: -1 }).exec();
    return docs.map(mapDocToEntity);
  };

  const deleteById = async (id: string): Promise<void> => {
    await TodoModel.findByIdAndDelete(id).exec();
  };

  return {
    create,
    findAll,
    deleteById,
  };
};
