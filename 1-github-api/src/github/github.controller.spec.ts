import { Test, TestingModule } from '@nestjs/testing';
import { Logger } from '@nestjs/common';
import { GithubController } from './github.controller';
import { GithubService } from './github.service';
import { GithubResponse } from './entity/github.response';
import { setupMockServer } from 'src/mock/server';
import { HttpModule } from '@nestjs/axios';

describe('GithubController', () => {
  let controller: GithubController;

  const server = setupMockServer();

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GithubController],
      providers: [GithubService, Logger],
      imports: [HttpModule],
    }).compile();

    controller = module.get<GithubController>(GithubController);
  });

  describe('getMostPopularRepositoriesByUser', () => {
    it('should return repositories for a valid user', async () => {
      const user = 'validUser';
      const repositories: GithubResponse[] = [];

      const result = await controller.getMostPopularRepositoriesByUser(user);
      expect(result).toEqual(repositories);
    });

    it('should throw HttpException for an invalid user', async () => {
      const user = 'error';

      await expect(await controller.getMostPopularRepositoriesByUser(user))
        .rejects;
    });
  });
});
