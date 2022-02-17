import { Controller, Get } from '@nestjs/common';

import { Message, UserData } from '@adaptit/api-interfaces';
import { Version } from '@adaptit/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('Angular')
  getVersion(): Version {
    return this.appService.getVersion(7);
  }

  @Get('user')
  getUserData(): UserData {
    return this.appService.getUserData(2)
  }
}
