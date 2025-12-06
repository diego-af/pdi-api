import { ITaskCreate } from '../../../../types/Tasks.types';
import { CreateTaskUseCase } from '../../../../domain/usecases/Task/CreateTask';
import { CreateTaskService } from '../CreateTask';


describe('CreateTaskService', () => {
  let service: CreateTaskService;
  let mockHandleTask: jest.Mock;
  let mockUseCase: CreateTaskUseCase;

  beforeEach(() => {
    mockHandleTask = jest.fn();
    mockUseCase = {
      handleTask: mockHandleTask
    } as unknown as CreateTaskUseCase;

    service = new CreateTaskService(mockUseCase);
  });

  it('deve criar uma task com sucesso', async () => {
    const taskData: ITaskCreate = {
      title: 'Estudar testes',
      description: 'Aprender Jest'
    };
    const taskCreated = { id: '123', ...taskData };

    mockHandleTask.mockResolvedValue(taskCreated);

    const resultado = await service.handleTask(taskData);

    expect(mockHandleTask).toHaveBeenCalledWith(taskData);
    expect(mockHandleTask).toHaveBeenCalledTimes(1);
    expect(resultado).toEqual(taskCreated);
  });

  it('deve retornar a task mesmo sem parâmetros', async () => {
    const task = { id: '456', title: 'Default' };
    mockHandleTask.mockResolvedValue(task);

    const resultado = await service.handleTask();

    expect(mockHandleTask).toHaveBeenCalledWith(undefined);
    expect(resultado).toEqual(task);
  });
});