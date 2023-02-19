import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class userlist {
  @PrimaryGeneratedColumn()
  useids: number;

  @Column()
  FullName: string;

  @Column()
  userName: string;

  @Column()
  userPass: string;

  @Column()
  email: string;

}