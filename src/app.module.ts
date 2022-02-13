import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [TasksModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
