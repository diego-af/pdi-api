import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User.model';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: false })
  completed: boolean;

  @Column({ nullable: true })
  userId: string;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;
}
