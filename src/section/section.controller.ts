import { Body, ParseIntPipe } from '@nestjs/common';
import { UsePipes } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { CreateSectionDto } from './dto/createSection.dto';
import { CreateSectionFacilityDto } from './dto/createSectionFacility.dto';
import { UpdateSectionDto } from './dto/updateSection.dto';
import { SectionService } from './section.service';

@Controller('sections')
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createSection(@Body() createSectionDto: CreateSectionDto) {
    return this.sectionService.createSection(createSectionDto);
  }

  @Get()
  getAllSections() {
    return this.sectionService.getSections();
  }

  @Get(':id')
  getOneSection(@Param('id', ParseIntPipe) id: number) {
    return this.sectionService.getSection(id);
  }

  @Put(':id')
  updateSectionById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSectionDto: UpdateSectionDto,
  ) {
    return this.sectionService.updateSection(id, updateSectionDto);
  }

  @Delete(':id')
  deleteSectionById(@Param('id', ParseIntPipe) id: number) {
    this.sectionService.deleteSection(id);

    return this.getAllSections();
  }

  @Post(':id/facility')
  createSectionFacility(
    @Param('id', ParseIntPipe) id: number,
    @Body() createSectionFacilityDto: CreateSectionFacilityDto,
  ) {
    return this.sectionService.createSectionFacility(
      id,
      createSectionFacilityDto,
    );
  }
}
