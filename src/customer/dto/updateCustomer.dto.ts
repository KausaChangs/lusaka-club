import { IsNotEmpty, MinLength } from 'class-validator';

export class UpdateCustomerDto {
  @IsNotEmpty()
  @MinLength(2)
  name: string;

  @IsNotEmpty()
  @MinLength(4)
  date: string;
}
