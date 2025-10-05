export abstract class TaskServiceAbstract<T> {
  abstract handleTask(params?: T): Promise<any>;
}
