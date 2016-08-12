const users = require('../../models/users');
const util = require('../../../lib/util');


module.exports = (express) => {
  const router = express.Router();

  //----------------------------------
  // Find One User
  router.get('/users/:id', (req, res) => {
    req.body.id = req.params.id;
    users.one(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
    util.debug('Look at this lonely user', req.params.id);
  });

  //----------------------------------
  // Find all Users

  router.get('/users', (req, res) => {
    users.all((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
    util.debug('look at all of these users -route', req.params.id);
  });

  //----------------------------------
  // Update User

  router.post('/users/:id', (req, res) => {
    req.body.id = req.params.id;
    users.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
    util.debug('User updated in the routes', req.params.id);
  });

  //----------------------------------
  // Create User

  router.post('/users', (req, res) => {
    users.add(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
    util.debug('I found this one app', req.params.id);
  });

  //----------------------------------
  // Delete User

  router.delete('/users/:id', (req, res) => {
    req.body.id = req.params.id;
    users.remove(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
    util.debug('Bye user -route', req.params.id);
  });

  //----------------------------------
  // This route will only pull up all the apps associated with the user.


  router.get('/users/:id/apps', (req, res) => {
    const userData = { id: req.params.id };
    users.one(userData, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data.apps);
    });
    util.debug('All of this users apps have been found', req.params.id);
  });


  return router;
};
