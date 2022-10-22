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
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/createCustomer.dto';
import { UpdateCustomerDto } from './dto/updateCustomer.dto';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.createCustomer(createCustomerDto);
  }

  @Get()
  getAllCustomers() {
    return this.customerService.getCustomers();
  }

  @Get(':id')
  getOneCustomer(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.getCustomer(id);
  }

  @Put(':id')
  updateCustomerById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customerService.updateCustomer(id, updateCustomerDto);
  }

  @Delete(':id')
  deleteCustomerById(@Param('id', ParseIntPipe) id: number) {
    this.customerService.deleteCustomer(id);

    return this.getAllCustomers();
  }
}
