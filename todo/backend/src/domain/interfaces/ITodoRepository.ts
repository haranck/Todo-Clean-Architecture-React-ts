import { TodoEntity } from "../entities/TodoEntity";

export interface ITodoRepository{
    create(title:string):Promise<TodoEntity>
    findAll():Promise<TodoEntity[]>
    delete(id:string):Promise<void>
}