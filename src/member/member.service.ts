import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateMemberParams } from 'src/section/utils/types';
import { Members as MembersEntity } from 'src/typeorm/members';
import { Repository } from 'typeorm';
import { CreateMemberDto } from './dto/createMember.dto';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(MembersEntity)
    private membersRepository: Repository<MembersEntity>,
  ) {}

  createMember(createMemberDto: CreateMemberDto) {
    const newMember = this.membersRepository.save(createMemberDto);

    return newMember;
  }

  getMembers() {
    return this.membersRepository.find();
  }

  getMember(id: number) {
    return this.membersRepository.findOneBy({ id });
  }

  updateMember(id: number, updateMemberDetails: UpdateMemberParams) {
    this.membersRepository.update({ id }, { ...updateMemberDetails });

    return this.getMember(id);
  }

  deleteMember(id: number) {
    return this.membersRepository.delete({ id });
  }
}
