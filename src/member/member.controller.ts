import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateMemberDto } from './dto/createMember.dto';
import { UpdateMemberDto } from './dto/updateMember.dto';
import { MemberService } from './member.service';

@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createMember(@Body() createMemberDto: CreateMemberDto) {
    return this.memberService.createMember(createMemberDto);
  }

  @Get()
  getAllMembers() {
    return this.memberService.getMembers();
  }

  @Get(':id')
  getOneMember(@Param('id', ParseIntPipe) id: number) {
    return this.memberService.getMember(id);
  }

  @Put(':id')
  updateMemberById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMemberDto: UpdateMemberDto,
  ) {
    return this.memberService.updateMember(id, updateMemberDto);
  }

  @Delete(':id')
  deleteMemberById(@Param('id', ParseIntPipe) id: number) {
    this.memberService.deleteMember(id);

    return this.getAllMembers();
  }
}
