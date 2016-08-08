const db = require('./db');

//--------------------------
// create users
exports.add = (payload, err, success) => {
  db.user.create(payload).then(success).catch(err);
};

//--------------------------
// find all users

exports.all = (err, success) => {
  db.user.findAll().then(success).catch(err);
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
};

//--------------------------
// Delete one User

exports.remove = (payload, err, success) => {
  db.user.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
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
};
