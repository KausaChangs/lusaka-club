import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SectionController } from './section/section.controller';
import { SectionService } from './section/section.service';
import { MemberController } from './member/member.controller';
import { SectionModule } from './section/section.module';
import { MemberService } from './member/member.service';
import { MemberModule } from './member/member.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerController } from './customer/customer.controller';
import { CustomerModule } from './customer/customer.module';
import entities from './typeorm';

@Module({
  imports: [
    SectionModule,
    MemberModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: null,
      database: 'lusakaclub_db',
      entities: entities,
      synchronize: true,
    }),
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
