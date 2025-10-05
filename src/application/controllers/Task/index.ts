import { CreateTaskUseCase } from '../../../domain/usecases/Task/CreateTask';
import { GetAllTaskUseCase } from '../../../domain/usecases/Task/GetAllTask';
import { TaskRepositoryDatabase } from '../../../infra/database/repositories/TaskRepositories.database';
import { CreateTaskService } from '../../services/Task/CreateTask';
import { GetAllTasksService } from '../../services/Task/GetAllTasksService';
import { CreateTaskController } from './CreateTaskController';
import { GetAllTasksController } from './GetAllTasksController';

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

export { createTaskController, getallTaskController };
