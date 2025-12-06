import { CreateUserUseCaseHandler } from '../../../../domain/usecases/User/CreateUser';
import { VerifyUserExistsUseCase } from '../../../../domain/usecases/User/VerifyUserExists';
import { BcryptHandler } from '../../../Utils/EncryptPassWord';
import { UserCreateUserService } from '../CreateUserService';

describe('CreateUserService', () => {
  let service: UserCreateUserService;
  let mockHandleUser: jest.Mock;
  let mockEncryptPassword: jest.Mock;
  let mockVerifyHandle: jest.Mock;
  let mockUseCase: CreateUserUseCaseHandler;
  let mockBcrypt: BcryptHandler;
  let mockVerifyUserExists: VerifyUserExistsUseCase;

  beforeEach(() => {
    mockHandleUser = jest.fn();
    mockEncryptPassword = jest.fn();
    mockVerifyHandle = jest.fn();
    mockUseCase = {
      handleUser: mockHandleUser,
    } as unknown as CreateUserUseCaseHandler;

    mockBcrypt = {
      encryptpassword: mockEncryptPassword,
    } as unknown as BcryptHandler;

    mockVerifyUserExists = {
      handleUser: mockVerifyHandle,
    } as unknown as VerifyUserExistsUseCase;

    service = new UserCreateUserService(mockUseCase, mockBcrypt, mockVerifyUserExists);
  });

  it('should instantiate service', () => {
    expect(service).toBeInstanceOf(UserCreateUserService);
  });

  it('should create a user with valid parameters', async () => {
    const user = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
    };

    mockHandleUser.mockResolvedValue(user);
    mockEncryptPassword.mockResolvedValue('encryptedpassword');
    mockVerifyHandle.mockResolvedValue(null);

    const result = await service.handleUSerService(user);

    expect(mockVerifyHandle).toHaveBeenCalledWith({ email: user.email });
    expect(mockEncryptPassword).toHaveBeenCalledWith(user.password, 3);
    expect(mockHandleUser).toHaveBeenCalledWith({ ...user, password: 'encryptedpassword' });
    expect(result).toEqual(user);
  });

  it('should return error when user already exists', async () => {
    const user = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
    };
    mockVerifyHandle.mockResolvedValue(user);
    await expect(service.handleUSerService(user)).rejects.toThrow(
      'Usuário já existe com este email',
    );
  });
});
