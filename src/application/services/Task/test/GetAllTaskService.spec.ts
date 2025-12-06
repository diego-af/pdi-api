import { GetAllTaskUseCase } from '../../../../domain/usecases/Task/GetAllTask';
import { ITaskResponse } from '../../../../types/Tasks.types';
import { GetAllTasksService } from '../GetAllTasksService';

describe('GetAllTaskService', () => {
  let service: GetAllTasksService;
  let mockHandleTask: jest.Mock;
  let mockUseCase: GetAllTaskUseCase;

  beforeEach(() => {
    mockHandleTask = jest.fn();

    mockUseCase = {
      handleTask: mockHandleTask,
    } as unknown as GetAllTaskUseCase;

    service = new GetAllTasksService(mockUseCase);
  });

  it('should return all tasks', async () => {
    const mockUserId = '123';
    const mockTasks: ITaskResponse[] = [];
    mockHandleTask.mockResolvedValue(mockTasks);

    const tasks = await service.handleTask({ userId: mockUserId });
    expect(tasks).toEqual([]);
  });

  it('should return all tasks', async () => {
    const mockUserId = '123';
    const mockTasks: ITaskResponse[] = [
      {
        id: '123',
        title: 'Task 1',
        description: 'Description 1',
        completed: false,
        userId: mockUserId,
      },
    ];
    mockHandleTask.mockResolvedValue(mockTasks);

    const tasks = await service.handleTask({ userId: mockUserId });
    expect(mockHandleTask).toHaveBeenCalledWith({ userId: mockUserId });
    expect(mockHandleTask).toHaveBeenCalledTimes(1);
    expect(tasks).toEqual(mockTasks);
  });

  it('should return error when userId is not provided', async () => {
    const mockUserId = '123';
    const mockTasks: ITaskResponse[] = [];
    mockHandleTask.mockResolvedValue(mockTasks);

    const tasks = await service.handleTask({ userId: mockUserId });
    expect(mockHandleTask).toHaveBeenCalledWith({ userId: mockUserId });
    expect(mockHandleTask).toHaveBeenCalledTimes(1);
    expect(tasks).toEqual(mockTasks);
  });

  it('should return error when tasks are not found', async () => {
    const mockUserId = '123';
    const mockTasks: ITaskResponse[] = [];
    mockHandleTask.mockResolvedValue(mockTasks);

    const tasks = await service.handleTask({ userId: mockUserId });

    expect(mockHandleTask).toHaveBeenCalledWith({ userId: mockUserId });
    expect(mockHandleTask).toHaveBeenCalledTimes(1);
    expect(tasks).toEqual(mockTasks);
  });

  it('should return more than one task', async () => {
    const mockUserId = '123';
    const mockTasks: ITaskResponse[] = [
      {
        id: '123',
        title: 'Task 1',
        description: 'Description 1',
        completed: false,
        userId: mockUserId,
      },
      {
        id: '456',
        title: 'Task 2',
        description: 'Description 2',
        completed: false,
        userId: mockUserId,
      },
    ];
    mockHandleTask.mockResolvedValue(mockTasks);

    const tasks = await service.handleTask({ userId: mockUserId });
    expect(mockHandleTask).toHaveBeenCalledWith({ userId: mockUserId });
    expect(mockHandleTask).toHaveBeenCalledTimes(1);
    expect(tasks).toHaveLength(mockTasks.length);
  });
});
