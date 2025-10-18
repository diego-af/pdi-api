import { TaskUseCaseAbstract } from './TaskAbstract';
import { ITaskRepository } from '../../repositories/Task/TaskRepositories';

export interface ITaskDelete{

  id: string;
  userId: string;
}

export class DeleteTaskUseCase extends TaskUseCaseAbstract<ITaskDelete>{

  constructor(private taskRepository: ITaskRepository){
    super()
  }

  async handleTask({id, userId}: ITaskDelete): Promise<any> {
    return this.taskRepository.deleteTaskById(id, userId)

  }

}