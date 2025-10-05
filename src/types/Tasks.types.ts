export interface ITaskResponse {
  id: string;
  title: string;
  description: string;
  userId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ITaskCreate {
  title: string;
  description: string;
  completed?: boolean;
  userId?: string;
}
