import { Repository } from 'typeorm';
import { ITaskRepository } from '../../../domain/repositories/Task/TaskRepositories';
import { Task } from '../models/Task.model';
import { AppDataSource } from '../../../datasource';
import { ITaskCreate, ITaskResponse } from '../../../types/Tasks.types';

export class TaskRepositoryDatabase implements ITaskRepository {
  private taskRepository: Repository<Task>;
  constructor() {
    this.taskRepository = AppDataSource.getRepository(Task);
  }

  async createTask(task: ITaskCreate): Promise<ITaskResponse> {
    const newTask = await this.taskRepository.save({
      title: task.title,
      description: task.description,
      completed: task.completed,
      userId: task.userId,
    });

    return newTask;
  }

  async getAllTasks(userId: string): Promise<ITaskResponse[]> {
    const tasks = await this.taskRepository.find({
      where: { userId },
      relations: ['user'],
      select: {
        user: {
          id: true,
          name: true,
          email: true,
        },
      },
    });



    return tasks;
  }


  async deleteTaskById(id: string, userId: string): Promise<void> {
    await this.taskRepository.delete(id);
  }

  async updateTaskById(id: string, task: Partial<ITaskResponse>, userId:string): Promise<any> {
    console.log(task, 'aqui')

    const udaptedTask = await this.taskRepository.createQueryBuilder()
      .update(Task)
      .set({title: task.title, description: task.description, completed:task.completed})
      .where("id = :id", { id }).andWhere("userId = :userId", { userId }).execute()

    return udaptedTask
  }
}
