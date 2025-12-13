import { ITodoRepository } from "../../domain/interfaces/ITodoRepository";


export class listTodosUseCase {
  constructor(private repo:ITodoRepository){}
  async execute(){
    console.log('this is for listTodoRepostitory')
    return await this.repo.findAll()
  }
}

