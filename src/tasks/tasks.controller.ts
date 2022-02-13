import { Controller, Get, Param } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    @Get()
    getTasks():any {
        return [ {id:0} ];
    }

    @Get(':id')
    getTaskById(@Param('id') id: string): any {
        return {
            id
        }
    }
}
