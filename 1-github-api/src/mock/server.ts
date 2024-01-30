import { HttpStatus } from '@nestjs/common';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

export const setupMockServer = () => {
  const handler = [
    http.get('http://localhost/users/:user/repos', ({ params }) => {
      const { user } = params;
      if (user === 'error') {
        throw HttpResponse.json({
          statusText: 'NOT FOUND',
          status: HttpStatus.NOT_FOUND,
        });
      }

      return HttpResponse.json([]);
    }),
  ];

  return setupServer(...handler);
};
