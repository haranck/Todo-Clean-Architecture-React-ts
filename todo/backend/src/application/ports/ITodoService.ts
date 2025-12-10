import { CreateTodoDTO , TodoResponseDTO } from "../dto/TodoDTO";

export interface ITodoService {
    createTodo(dto:CreateTodoDTO):Promise<TodoResponseDTO>;
    listTodos():Promise<TodoResponseDTO[]>;
    deleteTodo(id:string):Promise<void>
}
