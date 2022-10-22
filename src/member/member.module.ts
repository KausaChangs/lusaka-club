import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Members } from 'src/typeorm/members';
import { MemberController } from './member.controller';
import { MemberService } from './member.service';

@Module({
  imports: [TypeOrmModule.forFeature([Members])],
  controllers: [MemberController],
  providers: [MemberService],
})
export class MemberModule {}
