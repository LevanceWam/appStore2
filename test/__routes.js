const request = require('supertest');

const util = require('Wamble');

let server;

beforeEach(() => {
  server = require('../src/server');

  util.debug('Before each of');
});

afterEach(() => {
  server.close();
  util.debug('After each of');
});

const routes = [
  // My users
  {
    // Creating a user.
    description: 'Created a user',
    route: 'api/users/v1',
    method: 'post',
  },
  {
    // Updating a user.
    description: 'Updated a user',
    route: 'api/users/v1/2',
    method: 'post',
  },
  {
    // reading one user.
    description: 'Read one user',
    route: 'api/users/v1/1',
    method: 'get',
  },
  {
    // Reading all user.
    description: 'Read all user',
    route: 'api/users/v1',
    method: 'get',
  },
  // my apps
  {
    // Creating a app.
    description: 'Created a app',
    route: 'api/apps/v1',
    method: 'post',
  },
  {
    // Updated a app.
    description: 'Updated a app',
    route: 'api/apps/v1/2',
    method: 'post',
  },
  {
    // Reading one app.
    description: 'Read one app',
    route: 'api/apps/v1/1',
    method: 'get',
  },
  {
    // Reading all apps.
    description: 'Read all apps',
    route: 'api/apps/v1',
    method: 'get',
  },
];
// Need addition for commit
describe('Test the routes', () => {
  for (let rIndex = 0; rIndex < routes.length; rIndex++) {
    it(routes[rIndex].description, () => {
      if (routes[rIndex].method === 'get') {
        request(server)
        .get(routes[rIndex])
        .set('Accept', 'application/json')
        .expect('Content-type', /json/)
        .expect(200)
        .end();
        util.debug('Error on Get');
      } else if (routes[rIndex].method === 'post') {
        request(server)
        .post(routes[rIndex])
        .set('Accept', 'application/json')
        .expect('Content-type', /json/)
        .expect(200)
        .end();
        util.debug('Error on Post');
      } else {
        request(server)
        .delete(routes[rIndex])
        .set('accept', 'application/json')
        .expect('Content-type', /json/)
        .expect(200)
        .end();
        util.debug('Error on Delete');
      }
    });
  }
});
