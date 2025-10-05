import { ITaskRepository } from '../../repositories/Task/TaskRepositories';
import { TaskUseCaseAbstract } from './TaskAbstract';

export class GetAllTaskUseCase extends TaskUseCaseAbstract<{ userId: string }> {
  constructor(private taskRepository: ITaskRepository) {
    super();
  }

  async handleTask(params: { userId: string }): Promise<any> {
    const tasks = await this.taskRepository.getAllTasks(params.userId);
    return tasks;
  }
}
