import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCustomerDto } from './dto/createCustomer.dto';
import { Customers as CustomersEntity } from 'src/typeorm/customers';
import { Repository } from 'typeorm';
import { UpdateCustomerParams } from 'src/section/utils/types';

@Injectable()
export class CustomerService {
  // createCustomer(createCustomerDto: CreateCustomerDto) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(
    @InjectRepository(CustomersEntity)
    private customersRepository: Repository<CustomersEntity>,
  ) {}

  createCustomer(createCustomerDto: CreateCustomerDto) {
    const newCustomer = this.customersRepository.save(createCustomerDto);

    return newCustomer;
  }

  getCustomers() {
    return this.customersRepository.find();
  }

  getCustomer(id: number) {
    return this.customersRepository.findOneBy({ id });
  }

  updateCustomer(id: number, updateCustomerDetails: UpdateCustomerParams) {
    this.customersRepository.update({ id }, { ...updateCustomerDetails });

    return this.getCustomer(id);
  }
  deleteCustomer(id: number) {
    return this.customersRepository.delete({ id });
  }
}
