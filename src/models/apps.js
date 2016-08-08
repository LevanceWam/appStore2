const db = require('./db');

//--------------------------
// create apps
exports.add = (payload, err, success) => {
  db.app.create(payload).then(success).catch(err);
};

//--------------------------
// find all apps
exports.all = (err, success) => {
  console.log('finding all');
  db.app.findAll().then(success).catch(err);
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
};

//--------------------------
// delete apps
exports.remove = (payload, err, success) => {
  db.app.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
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
};
