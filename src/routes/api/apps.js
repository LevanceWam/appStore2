const apps = require('../../models/apps');
const util = require('Wamble');


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
    util.debug('I found this one app', req.params.id);
  });

  // -----------------------------------------
  // Find All app


  router.get('/apps', (req, res) => {
    apps.all((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
    util.debug('Wow I found all of the apps', res.status);
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
    util.debug('Update apps route', req.body);
  });

// -----------------------------------------
// Create App

  router.post('/apps', (req, res) => {
    apps.add(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
    util.debug('An app was created route', req.body);
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
    util.debug('Good bye app -route', req.params.id)
  });
  return router;
};
