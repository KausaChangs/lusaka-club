import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Section } from './section';

@Entity({ name: 'facility' })
export class Facility {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Section, (section) => section.faclitities)
  section: Section;
}
