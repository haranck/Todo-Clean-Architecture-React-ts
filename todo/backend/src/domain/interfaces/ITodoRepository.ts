import { TodoEntity } from "../entities/TodoEntity";

export interface CreateTodoData{
    title : string;
}

export interface ITodoRepository {
    create(data:CreateTodoData):Promise<TodoEntity>
    findAll():Promise<TodoEntity[]>
    deleteById(id:string):Promise<void>;
}
