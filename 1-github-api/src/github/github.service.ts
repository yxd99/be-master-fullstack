import { Injectable, Logger } from '@nestjs/common';
import { GithubResponse } from './entity/github.response';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { snakeCaseConverter } from 'src/utils';
import { GithubParams } from 'src/interfaces';

@Injectable()
export class GithubService {
  constructor(
    private readonly httpService: HttpService,
    private readonly logger: Logger,
  ) {}

  async getMostPopularRepositoriesByUser(
    user: string,
    params: GithubParams = {
      sort: 'stars',
      perPage: 10,
    },
  ): Promise<GithubResponse[]> {
    const path = `/users/${user}/repos`;
    const parseParams = snakeCaseConverter(params);

    try {
      const { data } = await firstValueFrom(
        this.httpService.get<GithubResponse[]>(path, { params: parseParams }),
      );
      this.logger.log(`Searching repositories of '${user}'`);
      return data;
    } catch (error) {
      this.logger.error(
        `Cant get repositories for ${user}`,
        GithubService.name,
      );
      throw error;
    }
  }
}
