import { CreateTaskUseCase } from '../../../domain/usecases/Task/CreateTask';
import { ITaskCreate } from '../../../types/Tasks.types';
import { TaskServiceAbstract } from './TaskServiceAbstract';

export class CreateTaskService extends TaskServiceAbstract<ITaskCreate> {
  constructor(private taskUseCase: CreateTaskUseCase) {
    super();
  }

  async handleTask(params?: ITaskCreate) {
    const newTask = await this.taskUseCase.handleTask(params);
    return newTask;
  }
}
