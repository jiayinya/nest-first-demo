import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dot';

@ApiTags('任务')
@Controller('todos')
export class TodosController {
  constructor(private readonly todosSerive: TodosService) {}

  @ApiOperation({ summary: '新增任务' })
  @Post()
  async add(@Body() body: CreateTodoDto) {
    return await this.todosSerive.addTodo(body);
  }

  @ApiOperation({ summary: '删除任务' })
  @Delete('id')
  async delete(@Param('id') id) {
    return await this.todosSerive.deleteTodo(id);
  }

  @ApiOperation({ summary: '修改任务' })
  @Put(':id')
  async update(@Param('id') id, @Body() newTodo) {
    return await this.todosSerive.updateTodo(id, newTodo);
  }

  @ApiOperation({ summary: '查询任务' })
  @Get()
  async get() {
    return await this.todosSerive.findAll();
  }
}
