// const expect = require('chai').expect;
// const request = require('supertest');
//
// describe('User Routes', () => {
//   var server;
//   var user;
//
//   beforeEach(() => {
//     server = require('../src/server');
//   });
//
//   afterEach(() => {
//     server.close();
//   });
//
//   // This test is to check for multiple user
//   it('GET /api/v1/users returns multiple users', (done) => {
//     request(server)
//       .get('/api/v1/users')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect((res) => {
//         const users = res.body;
//
//
//         this.user = users[0];
//
//         expect(users.length).to.be.above(0);
//       })
//       .end(done);
//   });
//
//   // This test is for one user and is checking for its properties
//   it('GET /api/v1/users/:id returns an user obj with a id and name property', (done) => {
//     request(server)
//       .get('/api/v1/users/' + this.user.id)
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect((res) => {
//         const user = res.body;
//         expect(user).to.have.property('id');
//         expect(user).to.have.property('name');
//         expect(user).to.have.property('age');
//         expect(user).to.have.property('occupation');
//       })
//       .end(done);
//   });
// });
