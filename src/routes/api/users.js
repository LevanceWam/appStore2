const users = require('../../models/users');

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
    console.log('Look at this lonely loser');
  });

  //----------------------------------
  // Find all Users

  router.get('/users', (req, res) => {
    users.all((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
    console.log('look at all of these people');
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
    console.log('Old thing with some new features');
  });

  //----------------------------------
  // Create User

  router.post('/users', (req, res) => {
    users.add(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
    console.log('Fresh meat');
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
  console.log('Bye Fiolisha');
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
    console.log('All of this users apps have been found');
  });


  return router;
};
