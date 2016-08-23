// This is my Hello world page.
module.exports = (express) => {
  const router = express.Router();

  router.post('/status', (req, res) => {
    res.json({
      healthy: true,
    });
  });

// routes
  router.use('/api/v1', require('./api/users')(express));
  router.use('/api/v1', require('./api/apps')(express));

  return router;
};
