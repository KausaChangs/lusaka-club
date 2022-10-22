import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customers {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  date: string;
}
