import { ITodoRepository } from "../../../domain/interfaces/ITodoRepository";
import { TodoModel } from "../models/todoModel";
import { TodoEntity } from "../../../domain/entities/TodoEntity";

export class TodoRepository implements ITodoRepository {

  async create(title: string): Promise<TodoEntity> {
    const doc = await TodoModel.create({ title });

    return {
      id: doc._id.toString(),
      title: doc.title,
      isCompleted: doc.isCompleted,
      createdAt: doc.createdAt,
    };
  }

  async findAll(): Promise<TodoEntity[]> {
    const docs = await TodoModel.find()
      .sort({ createdAt: -1 })
      .exec();

    return docs.map((d) => ({
      id: d._id.toString(),
      title: d.title,
      isCompleted: d.isCompleted,
      createdAt: d.createdAt,
    }));
  }

  async delete(id: string): Promise<void> {
    await TodoModel.findByIdAndDelete(id).exec();
  }
}
