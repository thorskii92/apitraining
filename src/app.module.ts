import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database.module';
import { userProviders } from './config/user.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [...userProviders, AppService],
})
export class AppModule {}
