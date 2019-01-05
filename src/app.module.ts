import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AtomController } from './atom/atom.controller';

@Module({
  imports: [],
  controllers: [AppController, AtomController, AtomController],
  providers: [AppService],
})
export class AppModule { }
