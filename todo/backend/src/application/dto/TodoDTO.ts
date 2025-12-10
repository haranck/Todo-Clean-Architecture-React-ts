export interface CreateTodoDTO{
    title:string
}

export interface TodoResponseDTO{
    id:string;
    title:string;
    isCompleted:boolean;
    createdAt:string;
}

