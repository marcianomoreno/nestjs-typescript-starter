import { Controller, Get, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';

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
}
