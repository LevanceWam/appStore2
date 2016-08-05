const expect = require('chai').expect;
const request = require('supertest');

describe('App Routes', () => {
  var server;
  var app;

  beforeEach(() => {
    server = require('../src/server.js');
  });

  afterEach(() => {
    server.close();
  });

//This test will check for multiple apps
  it('GET /api/v1/apps Returns All my Apps', (done) => {
    request(server)
      .get('/api/v1/apps')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const apps = res.body;

        this.app = apps[0]

        expect(apps.length).to.be.above(0)
      })
      .end(done)
  });

//This test will look for one app and test to see if it has
// all of its properties
  it('GET /api/v1/apps/:id Gives me all my properties I have listed', (done) => {
    request(server)
      .get('/api/v1/apps/' + this.app.id)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const app = res.body;
        expect(app).to.have.property('id')
        expect(app).to.have.property('title')
        expect(app).to.have.property('description')
        expect(app).to.have.property('releaseDate')
        expect(app).to.have.property('budget')
        expect(app).to.have.property('popular')
      })
      .end(done)
  });

});
