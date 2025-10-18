import { CreateTaskUseCase } from '../../../domain/usecases/Task/CreateTask';
import { GetAllTaskUseCase } from '../../../domain/usecases/Task/GetAllTask';
import { TaskRepositoryDatabase } from '../../../infra/database/repositories/TaskRepositories.database';
import { CreateTaskService } from '../../services/Task/CreateTask';
import { GetAllTasksService } from '../../services/Task/GetAllTasksService';
import { CreateTaskController } from './CreateTaskController';
import { GetAllTasksController } from './GetAllTasksController';
import { DeleteTaskUseCase } from '../../../domain/usecases/Task/DeleteTaskUseCase';
import { DeleteTaskService } from '../../services/Task/DeleteTaskService';
import { DeleteController } from './DeleteTaskController';
import { UpdateTaskUseCase } from '../../../domain/usecases/Task/UpdateTaskUseCase';
import { UpdateTaskService } from '../../services/Task/UpdateTaskService';
import { UpdateTaskController } from './UpdateTaskController';

//create task
const taskRepository = new TaskRepositoryDatabase();
const createTaskUseCase = new CreateTaskUseCase(taskRepository);
const createTaskService = new CreateTaskService(createTaskUseCase);
const createTaskController = new CreateTaskController(createTaskService);

//get all tasks

const getallRepository = new TaskRepositoryDatabase();
const getallTaskUseCase = new GetAllTaskUseCase(getallRepository);
const getallTaskService = new GetAllTasksService(getallTaskUseCase);
const getallTaskController = new GetAllTasksController(getallTaskService);




const taskdeleteuseCase = new DeleteTaskUseCase(taskRepository)
const deleteTaskService = new DeleteTaskService(taskdeleteuseCase)
const deleteTaskController = new DeleteController(deleteTaskService)



const updateTaskUseCase = new UpdateTaskUseCase(taskRepository)
const updateTaskService = new UpdateTaskService(updateTaskUseCase)
const updateTaskController = new UpdateTaskController(updateTaskService)


export { createTaskController, getallTaskController, deleteTaskController ,updateTaskController};
