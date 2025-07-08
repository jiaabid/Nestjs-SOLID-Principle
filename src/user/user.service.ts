import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor (@InjectRepository(User)
  private userRepository: Repository<User>
  ) { }

  /**
   * The User Service is the example of "S" stands for SRP (Single Responsibility Principle) in SOLID.
   * Only responsible for user-related operations.
   */
  create(createUserDto: CreateUserDto) {
    try {
      const user = this.userRepository.create(createUserDto);
      return this.userRepository.save(user);
    } catch (e) {
      console.error('Error creating user:', e);
      throw new Error('Failed to create user');
    }
  }

  findAll() {
    try {
      return this.userRepository.find();
    } catch (e) {
      console.error('Error fetching users:', e);
      throw new Error('Failed to fetch users');
    }
  }


  /**
   * Create Order in User Service is violating the Single Reponsibility Principle (SRP).
   * The UserService should only handle user-related operations, not order management.
   */

  // createOrder(  userId: number, orderDetails: any) {
  //   try {
  //      Assuming you have an Order entity and repository set up
  //      const order = this.orderRepository.create({ userId, ...orderDetails });
  //      return this.orderRepository.save(order);
  //     throw new Error('Order creation not implemented');
  //   } catch (e) {
  //     console.error('Error creating order:', e);
  //     throw new Error('Failed to create order');
  //   }
  // }
}
