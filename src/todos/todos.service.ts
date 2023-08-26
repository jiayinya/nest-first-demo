import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodosEntity } from './entities/todos.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodosEntity)
    private readonly todosRespository: Repository<TodosEntity>,
  ) {}
  // 新增任务
  async addTodo(todo: Partial<TodosEntity>) {
    return await this.todosRespository.save(todo);
  }
  // 删除任务
  async deleteTodo(id) {
    const oldTodo = await this.todosRespository.findOne(id);
    return await this.todosRespository.remove(oldTodo);
  }
  // 修改任务
  async updateTodo(id, newTodo) {
    const oldTodo = await this.todosRespository.findOne(id);
    const _todo = this.todosRespository.merge(oldTodo, newTodo);
    return await this.todosRespository.save(_todo);
  }
  // 查询任务
  async findAll() {
    return await this.todosRespository.find();
  }
}
