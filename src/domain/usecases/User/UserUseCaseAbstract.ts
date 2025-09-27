export abstract class UserUseCaseAbstract<T> {
  abstract handleUser(params?: T): Promise<any>;
}
