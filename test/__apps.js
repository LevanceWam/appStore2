const expect = require('chai').expect;
const app = require('../src/models/apps');
const util = require('Wamble');

let phonyApp = {};

describe('The Apps', () => {
  // Before each test this function will  use this information to create a new app
  beforeEach((done) => {
    const fakeapp = {
      title: 'Manga Scope',
      description: 'It crashes a lot',
      releaseDate: '04-19-47',
      budget: '300k',
      popular: 'Do you like to read?',
    };

// create the app function
    app.add(fakeapp, (error) => {
      util.debug('Error creating fake app.', error);
    }, (dbapp) => {
      phonyApp = dbapp;
      done();
    });
  });

// After each test this function will delete the app so the DB will not get full of apps
  afterEach((done) => {
    app.remove(phonyApp, (error) => {
      util.debug('It will not delete', error);
    }, (emptyApp) => {
      expect(emptyApp).to.be.equal(1);
      done();
    });
  });

  //--------------------------------------------
  // Read One app Test

  it('I should be able to read one app', (done) => {
    app.one(phonyApp, (error) => util.debug('Error reading One app', error),
  (oneApp) => {
    expect(oneApp.id).to.be.equal(phonyApp.id);
    done();
  });
  });

//--------------------------------------------
// Read All apps Test

  it('I should get all of my apps', (done) => {
    app.all((error) => {
      util.debug('Error reading all apps', error);
    }, (allApps) => {
      expect(allApps.length).to.be.above(0);
      done();
    });
  });

  //--------------------------------------------
  // Update One app

  it('Update my app', (done) => {
    const updateInfo = {
      id: phonyApp.id,
      title: 'animania',
    };
    app.update(updateInfo, (err) => util.debug('app failed to update', err),
  (newDBapp) => {
    expect(newDBapp.name).to.be.equal(updateInfo.name);
    phonyApp = newDBapp;
    done();
  });
  });

  //--------------------------------------------
  // Create app

  it('Create My app', () => {
    expect(phonyApp.id).to.not.be.null;
    util.debug('created app id', phonyApp.id);
  });
});
