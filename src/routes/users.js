module.exports = (express) => {

  const router = express.Router();


// This is a list of all my users
  router.get('/users', (req, res) => {
    res.json([
      {
        id: 89,
        name: 'Vance',
        age: '21',
        occupation: '2nd Cook',
      },
      {
        id: 563,
        name: 'Aaron',
        age: '35',
        occupation: 'Sous Chef',
      },
      {
        id: 8649,
        name: 'Nelza',
        age: '26',
        occupation: '1st Cook',
      },
      {
        id: 8,
        name: 'Priscilla',
        age: '23',
        occupation: 'Head Chef',
      }
    ]);
    });


    // This route is going to a specific user
  router.get('/users/:id', (req, res) => {
    res.json({
      id: 8,
      name: 'Priscilla',
      age: '23',
      occupation: 'Head Chef',
    });
  });


  return router;
}
