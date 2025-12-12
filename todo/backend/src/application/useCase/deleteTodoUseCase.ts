import { ITodoRepository } from "../../domain/interfaces/ITodoRepository";

export class deleteTodoUseCase{
  constructor (private repo: ITodoRepository){}

  async execute(id:string){
    if(!id)throw new Error("ID required")
      return await this.repo.delete(id)
  }
}