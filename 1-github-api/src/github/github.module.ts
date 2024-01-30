import { Logger, Module } from '@nestjs/common';
import { GithubService } from './github.service';
import { GithubController } from './github.controller';
import { HttpModule } from '@nestjs/axios';
import { HttpModuleConfigFactory } from 'src/factories';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpModuleConfigFactory,
      inject: [ConfigService],
    }),
  ],
  controllers: [GithubController],
  providers: [GithubService, Logger],
  exports: [GithubService],
})
export class GithubModule {}
