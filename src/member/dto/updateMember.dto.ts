import { IsNotEmpty, MinLength } from 'class-validator';

export class UpdateMemberDto {
  @IsNotEmpty()
  @MinLength(2)
  name: string;

  @MinLength(5)
  email: string;
}
