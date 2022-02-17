import { Injectable } from '@nestjs/common';
import { Message, UserData } from '@adaptit/api-interfaces';
import { Version } from '@adaptit/api-interfaces';
import { version } from 'os';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!123' };
  }

  getVersion(n_version: number): Version {
    return { message: 'Your Agnular is on ' ,version: n_version };
  }

  getUserData(id: number): UserData {

    switch(id) { 
      case 1: { 
        return { name: 'Jack' , age: 19 , email: 'jack@gmail.com', balance: 1801.50 };
         break; 
      } 
      case 2: { 
       return { name: 'John' , age: 29 , email: 'john@gmail.com', balance: 22020.19 };   
         break; 
      } 
      default: { 
        return { name: '' , age: 0 , email: '', balance: 0 };
         break; 
      } 
    }
  }
}
