import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto'

@Injectable()
export class TasksService {
    private tasks: any = [ {id:0, name: 'Marciano'} ];

    findAll() {
        return this.tasks;
    }

    findById(taskId: number) {
        //TODO: Auto parse ID
        return this.tasks.find(task => task.id === taskId);
    }

    createTask(createTaskDto: CreateTaskDto) {
        const newTask = { id: Date.now(), ...createTaskDto };
        this.tasks.push(newTask);
        return newTask;
    }
}
