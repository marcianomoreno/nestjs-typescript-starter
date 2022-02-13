import { Injectable } from '@nestjs/common';

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
}
