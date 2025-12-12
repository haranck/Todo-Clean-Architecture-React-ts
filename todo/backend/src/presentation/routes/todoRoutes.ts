import { Router } from "express";

import{TodoController} from '../controllers/todoController'
import {TodoRepository} from '../../infrastructure/database/repository/todoRepository'
import {TodoService} from '../../infrastructure/adapters/todoService'


const router = Router();

const repo = new TodoRepository()
const service = new TodoService(repo)
const controller = new TodoController(service)

router.get('/',controller.list)
router.post('/',controller.create)
router.delete('/:id',controller.delete)

export default router