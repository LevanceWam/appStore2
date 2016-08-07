const app = require('../models/app');

module.exports = (express) => {
  const router = express.Router();

// Read All Apps Function
  router.get('/apps', (req, res) => {
    app.all((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  //----------------------------------------------------------

// Read One App Function
  router.get('/apps/:id', (req, res) => {
    const appData = { id: req.params.id };
    app.one(appData, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  //----------------------------------------------------------

// destroy App Function
  router.delete('/apps/:id', (req, res) => {
    const appData = { id: req.params.id };
    app.remove(appData, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  //----------------------------------------------------------

// update App Function
  router.post('/apps/:id', (req, res) => {
    const appData = {
      id: req.params.id,
      name: req.params.body,
      code: req.params.code };

    app.update(appData, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  //----------------------------------------------------------

 // create App Function
  router.post('/apps', (req, res) => {
    app.add(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  return router;
};
