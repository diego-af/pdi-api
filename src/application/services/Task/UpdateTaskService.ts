import { TaskServiceAbstract } from './TaskServiceAbstract';
import { UpdateTaskUseCase } from '../../../domain/usecases/Task/UpdateTaskUseCase';
import { IUpdateTask } from '../../../types/Tasks.types';


export class UpdateTaskService  extends TaskServiceAbstract<IUpdateTask>{

  constructor(private updateTaskUseCase: UpdateTaskUseCase){
    super()
  }

  async handleTask({id, task, userId}: IUpdateTask): Promise<any> {

   const updatedTask = await this.updateTaskUseCase.handleTask({id, task, userId})
    return updatedTask;
  }
}