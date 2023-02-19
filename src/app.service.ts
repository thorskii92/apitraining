import { Inject, Injectable } from '@nestjs/common';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { userlist } from './config/user.entity';

@Injectable()

export class AppService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<userlist>,
  ) {} 

  getHello(): string {
    return 'Hello Willy!';
  }

  async findAll(): Promise<any> {
    //return this.userRepository.find();
    //const user  = await this.userRepository.findBy( {FullName: 'Willy Ramolete'} );
    const user  = await this.userRepository.find();
    console.log(user);
    return user;
  }
}



