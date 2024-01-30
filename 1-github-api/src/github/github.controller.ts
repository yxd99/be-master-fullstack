import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  /**
   * Get the most popular repositories for a user.
   * @param user The GitHub username.
   * @returns List of repositories.
   */
  @Get(':user')
  async getMostPopularRepositoriesByUser(@Param('user') user: string) {
    try {
      return await this.githubService.getMostPopularRepositoriesByUser(user);
    } catch (error) {
      const status = error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR;
      const message =
        status === HttpStatus.NOT_FOUND
          ? `User ${user} not found`
          : `GitHub API Error: ${error.response?.statusText || 'Unknown error'}`;

      throw new HttpException(message, status);
    }
  }
}
