import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ITask } from './task.module';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): ITask[] {
    return this.tasksService.getAllTasks();
  }

  // This will pass all the body to the method and requires extra validation for unknown properties in the body
  // @Post()
  // createTask(@Body() body) {
  //   console.log('body', body);
  // }

  @Post()
  createTask(
    @Body('title') title: ITask['title'],
    @Body('description') description: ITask['description'],
  ): ITask {
    return this.tasksService.createTask(title, description);
  }
}
