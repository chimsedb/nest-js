import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [CatsModule, CoreModule, MongooseModule.forRoot('mongodb+srv://admin:1@cluster0.dgeim.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
