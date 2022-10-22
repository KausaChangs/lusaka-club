import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  @MinLength(2)
  name: string;

  @MinLength(4)
  date: string;
}
