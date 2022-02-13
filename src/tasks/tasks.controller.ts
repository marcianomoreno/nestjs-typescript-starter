import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Task } from './entities/task.entity';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @ApiOkResponse({type: Task, isArray: true})
    @Get()
    getTasks():any {
        return this.tasksService.findAll();
    }

    @ApiOkResponse({type: Task, isArray: false})
    @Get(':id')
    getTaskById(@Param('id') id: string): any {
        return this.tasksService.findById(Number(id));
    }

    @ApiCreatedResponse({type: Task})
    @Post()
    createTask(@Body() body: CreateTaskDto): any {
        return this.tasksService.createTask(body);
    } 
}
