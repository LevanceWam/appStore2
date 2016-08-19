const db = require('./db');
const util = require('Wamble');

//--------------------------
// create users
exports.add = (payload, err, success) => {
  db.user.create(payload).then(success).catch(err);
  util.debug('Created new user', payload);
};

//--------------------------
// find all users

exports.all = (err, success) => {
  db.user.findAll().then(success).catch(err);
  util.debug('All users found', success);
};

//--------------------------
// find one users

exports.one = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
  util.debug('Found one user', success);
};

//--------------------------
// Delete one User

exports.remove = (payload, err, success) => {
  db.user.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  util.debug('Deleted user', success);
};

//--------------------------
// Updated users

exports.update = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
  util.debug('Update success', success);
};
