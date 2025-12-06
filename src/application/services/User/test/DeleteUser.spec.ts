import { DeleteUserUseCase } from '../../../../domain/usecases/User/DeleteUser';
import { DeleteUSerService } from '../DeleteUserService';

describe('Delete users', () => {
  let service: DeleteUSerService;
  let mockUseCase: DeleteUserUseCase;
  let handleMock: jest.Mock;

  beforeEach(() => {
    handleMock = jest.fn();

    mockUseCase = {
      handleUser: handleMock,
    } as unknown as DeleteUserUseCase;

    service = new DeleteUSerService(mockUseCase);
  });

  it('should deleted user', async () => {
    const id = '123';

    handleMock.mockResolvedValue(true);

    const deletedUser = await service.handleUSerService({ id });

    expect(deletedUser).toBe(true);

    expect(mockUseCase.handleUser).toHaveBeenCalledWith({ id });
    expect(mockUseCase.handleUser).toHaveBeenCalledTimes(1);
  });
});
