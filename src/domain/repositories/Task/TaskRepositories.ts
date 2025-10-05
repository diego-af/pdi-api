export interface ITaskRepository {
  createTask: (task: any) => Promise<any>;
  getAllTasks: (userId: string) => Promise<any>;
}
