const expect = require('chai').expect;
const user = require('../src/models/users');
const util = require('Wamble');

let phonyUser = {};

describe('The Users', () => {
  // Before each test this function will  use this information to create a new user
  beforeEach((done) => {
    const fakeUser = {
      name: 'Nelza alphonse',
      age: 27,
      hobby: 'cooking',
      occupation: '2nd chef',
    };

// create the user function
    user.add(fakeUser, (error) => {
      util.debug('Error creating fake user.', error);
    }, (dbUser) => {
      phonyUser = dbUser;
      done();
    });
  });

// After each test this function will delete the user so the DB will not get full of users
  afterEach((done) => {
    user.remove(phonyUser, (error) => {
      util.debug('It will not delete', error);
    }, (emptyUser) => {
      expect(emptyUser).to.be.equal(1);
      done();
    });
  });

  //--------------------------------------------
  // Read One User Test

  it('I should be able to read one user', (done) => {
    user.one(phonyUser, (error) => util.debug('Error reading One User', error),
  (oneUser) => {
    expect(oneUser.id).to.be.equal(phonyUser.id);
    done();
  });
  });

//--------------------------------------------
// Read All Users Test

  it('I should get all of my users', (done) => {
    user.all((error) => {
      util.debug('Error reading all Users', error);
    }, (allUsers) => {
      expect(allUsers.length).to.be.above(0);
      done();
    });
  });

  //--------------------------------------------
  // Update One User

  it('Update my user', (done) => {
    const updateInfo = {
      id: phonyUser.id,
      name: 'Lance',
    };
    user.update(updateInfo, (err) => util.debug('User failed to update', err),
  (newDBUser) => {
    expect(newDBUser.name).to.be.equal(updateInfo.name);
    phonyUser = newDBUser;
    done();
    util.debug('my user got updated', phonyUser.id);
  });
  });

  //--------------------------------------------
  // Create User

  it('Create My user', () => {
    expect(phonyUser.id).to.not.be.null;
    util.debug('created User id', phonyUser.id);
  });
});
