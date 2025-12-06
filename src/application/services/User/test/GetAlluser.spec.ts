import { GetAllUsers } from '../../../../domain/usecases/User/GetAllUsers';
import { IUserResponse } from '../../../../types/User.types';
import { GetAllUserService } from '../GetAllUserService';

describe('should return all user', () => {
  let service: GetAllUserService;
  let mockUseCase: GetAllUsers;
  let mockHandleUser: jest.Mock;

  beforeEach(() => {
    mockHandleUser = jest.fn();

    mockUseCase = {
      handleUser: mockHandleUser,
    } as unknown as GetAllUsers;

    service = new GetAllUserService(mockUseCase);
  });

  it('Should retun all user', async () => {
    const users: IUserResponse[] = [
      {
        id: 1,
        name: 'Carlos',
        email: 'carlos@example.com',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
      },
      {
        id: 2,
        name: 'Maria',
        email: 'maria@example.com',
        createdAt: new Date('2024-01-02'),
        updatedAt: new Date('2024-01-02'),
      },
      {
        id: 3,
        name: 'João',
        email: 'joao@example.com',
        createdAt: new Date('2024-01-03'),
        updatedAt: new Date('2024-01-03'),
      },
    ];

    mockHandleUser.mockResolvedValue(users);

    const result = await service.handleUSerService();

    expect(result).toEqual(users);
  });

  it('should return empty user', async () => {
    const mock: any = [];

    mockHandleUser.mockResolvedValue(mock);

    const result = await service.handleUSerService();

    expect(result).toHaveLength(0);
  });
});
