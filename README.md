# appStore2
Develper Installion Guide

# Download Package.json (command line)

```
npm i

This will download all of the dependencies I have been using.
```

# Things you want to have Globally (command line)

```
Mocha: npm i -g mocha
nodemon npm i -g nodemon
```

# Start Server (command line)

```
To start the server you need to type

nodemon src/server.js

This will start the server on port 3000
```

# Dynamic api

```
To use the crud feature of the Dynamic api you need to have postman downloaded.

once you have postman and open it make sure that you have you server running

nodemon src/server.js

and inside of your url bar have make sure to have the right url.

```

# Unit Testing (command line)

```
To be able to unit test please make sure that the server is off

then in the command line type

mocha

This will run a series to test and if it runs you are all good
```

# EndPoints
GET /api/v1/apps
```
When you go to this route you will see these properties for a certain
amounts of apps.

title
description
releaseDate
budget
popular
```


GET /api/v1/apps/:id
```
When you go to this route the route will take you to a see these properties of a specific app

title
description
releaseDate
budget
popular
```

GET /api/v1/users
```
When you go to this route you will see these properties for a certain
amounts of users.

id
name
age
occupation
```

GET /api/v1/users/:id
```
When you go to this route the route will take you to a see these properties of a specific user

id: 8,
name: 'Priscilla',
age: '23',
occupation: 'Head Chef',
```


GET /api/v1/users/:id/apps
```
When you go to this route this route will take you to see all of the users apps that are connected to the users id

userID
title
description
releaseDate
budget
popular
```
