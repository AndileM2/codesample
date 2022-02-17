import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SequelizeModule } from '@nestjs/sequelize';
import { LibraryModule } from './library/library.module';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'library',
    autoLoadModels: true,
    synchronize: true
  }), LibraryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
