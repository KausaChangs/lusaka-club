import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateSectionDto {
  @IsNotEmpty()
  @MinLength(2)
  name: string;

  @MinLength(10)
  description: string;
}
