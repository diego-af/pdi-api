export interface ITaskRepository {
  createTask: (task: any) => Promise<any>;
  getAllTasks: (userId: string) => Promise<any>;
  deleteTaskById: (id:string, userId: string)=> Promise<any>
  updateTaskById: (id:string, task: any, userId: string)=> Promise<any>
}
