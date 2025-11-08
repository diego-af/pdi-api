import { TaskControllerAbstract } from './TaskControllerAbstract';
import { DeleteTaskService } from '../../services/Task/DeleteTaskService';


export class DeleteController extends TaskControllerAbstract {

  constructor( private deleteTaskService: DeleteTaskService) {
    super()
  }
  async handleTask(req: any, res: any, next: any): Promise<any> {
    try{
      const { id } = req.params;
      const user_id = (req as any).user?.user_id;

      await this.deleteTaskService.handleTask({ id, userId: user_id });

      return res.status(200).json({
        message: 'Tarefa deletada com sucesso awui',
      });
    }catch (error){
      next(error)
    }
  }

}