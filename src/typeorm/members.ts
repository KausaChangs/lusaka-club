import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Members {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({
    nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
  })
  email: string;
}
