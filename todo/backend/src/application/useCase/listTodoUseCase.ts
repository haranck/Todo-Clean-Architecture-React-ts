import { ITodoRepository } from "../../domain/interfaces/ITodoRepository";


export class listTodosUseCase {
  constructor(private repo:ITodoRepository){}

  async execute(){
    return await this.repo.findAll()
  }
}

