const apps = require('../../models/apps');

module.exports = (express) => {
  const router = express.Router();

  // -----------------------------------------
  // Find One app

  router.get('/apps/:id', (req, res) => {
    req.body.id = req.params.id;
    apps.one(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
    console.log('I found this one thing and its ok');
  });

  // -----------------------------------------
  // Find All app


  router.get('/apps', (req, res) => {
    apps.all((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
    console.log('Wow I found all of them');
  });

  // -----------------------------------------
  // Update app

  router.post('/apps/:id', (req, res) => {
    req.body.id = req.params.id;
    apps.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
    console.log('Look at me I got some features');
  });

// -----------------------------------------
// Create App

  router.post('/apps', (req, res) => {
    apps.add(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
    console.log('An app was created');
  });

//----------------------------------
// Delete App

  router.delete('/apps/:id', (req, res) => {
    req.body.id = req.params.id;
    apps.remove(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
    console.log('Good bye')
  });
  return router;
};
