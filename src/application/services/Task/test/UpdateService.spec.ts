import { UpdateTaskService } from '../UpdateTaskService';
import { UpdateTaskUseCase } from '../../../../domain/usecases/Task/UpdateTaskUseCase';
import { IUpdateTask } from '../../../../types/Tasks.types';

describe('UpdateService', () => {
  let service: UpdateTaskService;
  let mockHandleTask: jest.Mock;
  let mockUseCase: UpdateTaskUseCase;

  beforeEach(() => {
    mockHandleTask = jest.fn();

    mockUseCase = {
      handleTask: mockHandleTask,
    } as unknown as UpdateTaskUseCase;

    service = new UpdateTaskService(mockUseCase);
  });

  it('should update a task successfully', async () => {
    const task: IUpdateTask = {
      task: { id: '123', description: 'test', title: 'test', completed: false },
      userId: '1',
      id: '123',
    };
    mockHandleTask.mockResolvedValue(task);

    const result = await service.handleTask(task);

    expect(mockHandleTask).toHaveBeenCalledWith(task);

    expect(result).toEqual({
      ...task,
      task: {
        ...task.task,
        completed: false,
      },
    });
  });
});
