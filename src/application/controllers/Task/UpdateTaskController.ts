import { TaskControllerAbstract } from './TaskControllerAbstract';
import { UpdateTaskService } from '../../services/Task/UpdateTaskService';


export class UpdateTaskController extends TaskControllerAbstract{



  constructor(private updateTaskService: UpdateTaskService){
    super()
  }


  async handleTask(req: any, res: any, next: any): Promise<any> {

    try{
      const { id } = req.params;
      const { title, description, completed } = req.body;
      const task = {title, description, completed}


      const user_id = (req as any).user_id;


      await this.updateTaskService.handleTask({id, task, userId: user_id})


      return res.status(200).json({message: 'Tarefa atualizada com sucesso',})
    }
    catch (error){
      next(error)
    }
  }
}