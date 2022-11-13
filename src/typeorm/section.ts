import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Facility } from './facility';

@Entity()
export class Section {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({
    nullable: false,
  })
  name: string;

  @Column({
    nullable: true,
  })
  description: string;

  // @OneToOne(() => Facility) //changes requested: one to many
  // @JoinColumn()
  // facility: Facility;

  @OneToMany(() => Facility, (facility) => facility.section)
  faclitities: Facility[];
}
