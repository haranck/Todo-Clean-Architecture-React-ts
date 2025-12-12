import { ITodoRepository } from "../../../domain/interfaces/ITodoRepository";
import { TodoModel } from "../models/todoModel";
import { TodoEntity } from "../../../domain/entities/TodoEntity";

export class TodoRepository implements ITodoRepository {
  async create(title: string): Promise<TodoEntity> {
    const doc = await TodoModel.create({ title });
    return new TodoEntity(
      doc._id.toString(),
      doc.title,
      doc.isCompleted,
      doc.createdAt
    );
  }

  async findAll(): Promise<TodoEntity[]> {
    const docs = await TodoModel.find().sort({ createdAt: -1 }).exec();
    return docs.map(
      (d) =>
        new TodoEntity(
          d._id.toString(),
          d.title,
          d.isCompleted,
          d.createdAt
        )
    );
  }

  async delete(id: string): Promise<void> {
    await TodoModel.findByIdAndDelete(id).exec();
  }
}
