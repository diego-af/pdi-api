import { User } from '../User';

describe('User Entity', () => {
  it('should create a user with valid parameters', () => {
    const user = new User('John Doe', 'dyegoo@gmail.com', 'Passsword1!');

    expect(user).toBeInstanceOf(User);
  });

  it('should create user with name empty', () => {
    expect(() => new User('', 'dyegoo@gmail.com', 'Passsword1!')).toThrow('Nome inválido');
  });

  it('should create user with name short', () => {
    expect(() => new User('Jo', 'dyegoo@gmail.com', 'Passsword1!')).toThrow('Nome curto demais');
  });

  it('should create user with email empty', () => {
    expect(() => new User('John Doe', '', 'Passsword1!')).toThrow('Email obrigatório');
  });

  it('should create a user with invalid email', () => {
    expect(() => new User('John Doe', 'dyegoogmail.com', 'Passsword1!')).toThrow('Email inválido');
    expect(() => new User('John Doe', 'dyegoogmail@gmail,com', 'Passsword1!')).toThrow(
      'Email inválido',
    );
  });

  it('should create a user with invalid senha short', () => {
    expect(() => new User('John Doe', 'dyegoo@gmail.com', 'Passs')).toThrow('Senha curta demais');
  });

  it('should created user wih invalida passoword dont have uppercase', () => {
    expect(() => new User('Jane Doe', 'janedoe@gmail.com', 'password1!')).toThrow(
      'Senha deve conter ao menos uma letra maiúscula, um numero e um caractere especial',
    );
  });
});
