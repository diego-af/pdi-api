export abstract class UserServiceAbstract<T> {
  abstract handleUSerService(params: T): Promise<any>;
}
