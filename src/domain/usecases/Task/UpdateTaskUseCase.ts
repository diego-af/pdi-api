import { TaskUseCaseAbstract } from './TaskAbstract';
import { ITaskRepository } from '../../repositories/Task/TaskRepositories';
import { IUpdateTask } from '../../../types/Tasks.types';


export class UpdateTaskUseCase extends TaskUseCaseAbstract<IUpdateTask> {

  constructor(private taskRepository: ITaskRepository) {
    super()

  }

  async handleTask({id, task, userId}: IUpdateTask): Promise<any> {
    const taskUpdated = await this.taskRepository.updateTaskById(id, task, userId)
    return taskUpdated;

  }
}