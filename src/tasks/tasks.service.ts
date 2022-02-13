import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto'
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
    private tasks: Task[] = [ {id:0, name: 'Marciano'} ];

    findAll(): Task[] {
        return this.tasks;
    }

    findById(taskId: number): Task {
        //TODO: Auto parse ID
        return this.tasks.find(task => task.id === taskId);
    }

    createTask(createTaskDto: CreateTaskDto): Task {
        const newTask = { id: Date.now(), ...createTaskDto };
        this.tasks.push(newTask);
        return newTask;
    }
}
