import { DeleteTaskService } from '../DeleteTaskService';
import { DeleteTaskUseCase } from '../../../../domain/usecases/Task/DeleteTaskUseCase';

describe('DeleteTask', () => {
  let service: DeleteTaskService;
  let mockUseCase: DeleteTaskUseCase;
  let mockHandleTask: jest.Mock;
  beforeEach(() => {
    mockHandleTask = jest.fn();

    mockUseCase = {
      handleTask: mockHandleTask,
    } as unknown as DeleteTaskUseCase;

    service = new DeleteTaskService(mockUseCase);
  });

  it('should delete defined', async () => {
    expect(service).toBeDefined();
  });

  it('should called function with parameters', async () => {
    const mockUserId = '123';
    const mockTaskId = '123';
    mockHandleTask.mockResolvedValue(true);

    await service.handleTask({ id: mockTaskId, userId: mockUserId });

    expect(mockHandleTask).toHaveBeenCalledWith({ id: mockTaskId, userId: mockUserId });
  });

  it('Should deleted task ', async () => {
    const mockUserId = '123';
    const mockTaskId = '123';
    mockHandleTask.mockResolvedValue(true);

    const result = await service.handleTask({ id: mockTaskId, userId: mockUserId });

    expect(result).toBe(true);
  });
});
