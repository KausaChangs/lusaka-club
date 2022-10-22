import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SectionController } from './section.controller';
import { SectionService } from './section.service';
import { Section } from 'src/typeorm/section';
import { Facility } from 'src/typeorm/facility';

@Module({
  imports: [TypeOrmModule.forFeature([Section, Facility])],
  controllers: [SectionController],
  providers: [SectionService],
})
export class SectionModule {}
