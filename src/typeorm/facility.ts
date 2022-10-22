import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'facility' })
export class Facility {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
}
