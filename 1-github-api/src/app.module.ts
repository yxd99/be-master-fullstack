import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GithubModule } from './github/github.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), GithubModule],
  controllers: [],
  providers: [Logger],
})
export class AppModule {}
