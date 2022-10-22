import { IsNotEmpty, MinLength } from 'class-validator';

export class UpdateSectionDto {
  @IsNotEmpty()
  @MinLength(2)
  name: string;

  @IsNotEmpty()
  @MinLength(10)
  description: string;
}
