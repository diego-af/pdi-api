import { ITaskCreate } from '../../../types/Tasks.types';
import { ITaskRepository } from '../../repositories/Task/TaskRepositories';
import { TaskUseCaseAbstract } from './TaskAbstract';

export class CreateTaskUseCase extends TaskUseCaseAbstract<ITaskCreate> {
  constructor(private taskRepository: ITaskRepository) {
    super();
  }
  handleTask(params?: ITaskCreate | undefined): Promise<any> {
    const newTask = this.taskRepository.createTask(params);
    return newTask;
  }
}
