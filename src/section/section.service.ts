import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Section } from './types';
import { Section as SectionEntity } from 'src/typeorm/section';
import { Repository } from 'typeorm';
import { CreateSectionDto } from './dto/createSection.dto';
import {
  CreateSectionFacilityParams,
  UpdateSectionParams,
} from './utils/types';
import { Facility } from 'src/typeorm/facility';

@Injectable()
export class SectionService {
  constructor(
    @InjectRepository(SectionEntity)
    private sectionRepository: Repository<SectionEntity>,
    @InjectRepository(Facility)
    private facilityRepository: Repository<Facility>,
  ) {}

  //private sections: Section[] = [];

  createSection(createSectionDto: CreateSectionDto) {
    const newSection = this.sectionRepository.save(createSectionDto);

    return newSection;

    //return this.sectionRepository.save(newSection);
  }

  getSections() {
    return this.sectionRepository.find();
  }

  getSection(id: number) {
    return this.sectionRepository.findOneBy({ id });
  }

  updateSection(id: number, updateSectionDetails: UpdateSectionParams) {
    this.sectionRepository.update({ id }, { ...updateSectionDetails });

    return this.getSection(id);
  }

  deleteSection(id: number) {
    return this.sectionRepository.delete({ id });
  }

  async createSectionFacility(
    id: number,
    createSectionFaciltyDetails: CreateSectionFacilityParams,
  ) {
    const section = await this.sectionRepository.findOneBy({ id });

    if (!section)
      throw new HttpException(
        'Section not found. Cannot create Facility',
        HttpStatus.BAD_REQUEST,
      );

    const newFacility = this.facilityRepository.create(
      createSectionFaciltyDetails,
    );

    // const savedFacility = await this.facilityRepository.save(newFacility);

    // section.faclitities = savedFacility;

    // return this.sectionRepository.save(section);
  }
}
