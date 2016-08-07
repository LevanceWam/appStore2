const db = require('./db.js');

exports.add = (payload, err, success) => {
  db.users.create(payload).then(success).catch(err);
}

exports.all = (err, success) => {
  db.users.findAll().then(success).catch(err);
}

exports.one = (payload, err, success) => {
  db.users.find({
    where: {
      id: payload.id
    },
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
}

exports.remove = (payload, err, success) => {
  db.users.destroy({
    where: {
      id: payload.id,
    }
  }).then(success).catch(err);
}

exports.update = (payload, err, success) => {
    db.users.find({
      where: {
        id: payload.id,
      }
    }).then((existingData) => {
      existingData.updateAttributes(payload).then(success).catch(err);
    }).catch(err);
}
