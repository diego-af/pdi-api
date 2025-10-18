import { TaskServiceAbstract } from './TaskServiceAbstract';
import { DeleteTaskUseCase } from '../../../domain/usecases/Task/DeleteTaskUseCase';

export interface IDeleteTaskService {

  id: string;
  userId: string;
}
export class DeleteTaskService extends  TaskServiceAbstract<IDeleteTaskService>{


constructor(private deleteTaskUseCase: DeleteTaskUseCase) {
  super();
}

  async handleTask({id, userId}: IDeleteTaskService): Promise<any> {

  return await this.deleteTaskUseCase.handleTask({id, userId});

  }
}