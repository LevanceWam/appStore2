
module.exports = (express) => {

  const router = express.Router();

//This route is getting all of the apps
  router.get('/apps', (req, res) => {

// This is a list of all my apps
    res.json([
      {
        id: 9,
        title: 'Instagram',
        description: 'Facebook Owns This',
        releaseDate: '5/23/06',
        budget: '$12m',
        popular: 'It Goes down in the DM'
      },
      {
        id: 66,
        title: 'Papa Johns',
        description: 'I Have A Pizza Problem',
        releaseDate: '4/72/28',
        budget: '$1m',
        popular: 'On a Saturday night yes'
      },
      {
        id: 73876,
        title: 'Youtube',
        description: 'How I Spend Most Of The Day',
        releaseDate: '9/53/452',
        budget: '$33m',
        popular: 'Yes'
      },
      {
        id: 522,
        title: 'Messenger',
        description: 'Lets just waste money and make it seperate',
        releaseDate: '9/53/452',
        budget: '$33m',
        popular: 'Yes'
      },
    ]);

  });

// This route is going to a specific app
  router.get('/apps/:id', (req, res) => {
    res.json(
      {
        id: 9,
        title: 'Instagram',
        description: 'Facebook Owns This',
        releaseDate: '5/23/06',
        budget: '$12m',
        popular: 'It Goes down in the DM'
      });
  });

  //This is returning
  return router;
}
