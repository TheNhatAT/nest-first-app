import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import {CatService} from '../services/cats.service';
import { CatController } from '../controllers/cats.controller';

@Module({
  imports: [],
  controllers: [AppController, CatController],
  providers: [AppService, CatService],
})
export class AppModule {}
