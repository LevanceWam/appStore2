const db = require('./db');
const util = require('Wamble');


//--------------------------
// create apps
exports.add = (payload, err, success) => {
  db.app.create(payload).then(success).catch(err);
  util.debug('New app', payload);
};

//--------------------------
// find all apps
exports.all = (err, success) => {
  util.debug('finding all', success);
  db.app.findAll().then(success).catch(err);
  util.debug('finding all apps', success);
};

//--------------------------
// find one app
exports.one = (payload, err, success) => {
  db.app.find({
    where: {
      id: payload.id,
    },
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
  util.debug('finding one app', success);
};

//--------------------------
// delete apps
exports.remove = (payload, err, success) => {
  db.app.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  util.debug('deleted my app', success);
};

//--------------------------
// update app
exports.update = (payload, err, success) => {
  db.app.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
  util.debug('updated the app', success);
};
