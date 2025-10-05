export abstract class TaskUseCaseAbstract<T> {
  abstract handleTask(params?: T): Promise<T>;
}
