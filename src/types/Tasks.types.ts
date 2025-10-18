export interface ITaskResponse {
  id: string;
  title: string;
  description: string;
  userId?: string;
  completed: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ITaskCreate {
  title: string;
  description: string;
  completed?: boolean;
  userId?: string;
}


export interface IUpdateTask{
  id: string;
  task: any;
  userId: string;
}