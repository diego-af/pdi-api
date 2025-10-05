import { GetAllTaskUseCase } from '../../../domain/usecases/Task/GetAllTask';

import { TaskServiceAbstract } from './TaskServiceAbstract';

export class GetAllTasksService extends TaskServiceAbstract<{ userId: string }> {
  constructor(private getAllTasksUseCase: GetAllTaskUseCase) {
    super();
  }

  async handleTask(params: { userId: string }): Promise<any> {
    const tasksAll = await this.getAllTasksUseCase.handleTask({ userId: params.userId });

    return tasksAll;
  }
}
