import { Injectable } from '@nestjs/common';
import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HttpModuleConfigFactory implements HttpModuleOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createHttpOptions(): HttpModuleOptions {
    return {
      timeout: Number(this.configService.get<string>('HTTP_TIMEOUT')),
      maxRedirects: Number(
        this.configService.get<string>('HTTP_MAX_REDIRECTS'),
      ),
      baseURL: this.configService.get<string>('GITHUB_API_URL'),
    };
  }
}
