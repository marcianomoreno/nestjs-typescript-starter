import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}
    @Get()
    getTasks():any {
        return this.tasksService.findAll();
    }

    @Get(':id')
    getTaskById(@Param('id') id: string): any {
        return this.tasksService.findById(Number(id));
    }

    @Post()
    createTask(@Body() body: CreateTaskDto): any {
        return this.tasksService.createTask(body);
    } 
}
