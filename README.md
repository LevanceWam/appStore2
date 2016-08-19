# appStore2
Develper Installion Guide

# Download Package.json

```
npm i
```
This will download all of the dependencies I have been using.

# Things you want to have Globally

```
Mocha: npm i -g mocha
nodemon npm i -g nodemon
```

# Start Server


To start the server you need to type
```
nodemon src/server.js
```
This will start the server on port 3000


# Dynamic api


To use the crud feature of the Dynamic api you need to have postman downloaded.

once you have postman and open it make sure that you have you server running
```
nodemon src/server.js
```
and inside of your url bar have make sure to have the right url.



# Unit Testing


To be able to unit test please make sure that the server is off

then in the command line type
```
mocha
```
This will run a series to test and if it runs you are all good

**This is the continuation of unit test**

In this part I added to more unit test that can still be activated with the instructions with the previous unit test.

But, when you run:

```
DEBUG=true nodemon src.server.js
```
 you will Then want to go into postman and use the dynamic api feature that is built in
 so if the test does not go through the debugger will notify you and let you know what area failed.


#Usage
First you need to install the new packages we have so make sure to
```
npm i
```

**This section is for how to use the Utility tool.**

First lets review on how to start the server without the Debug tool.

```
nodemon src/server.js
```

by doing this, The server will start and will not be in debug mode.

**To start the server in debug mode**
First type in:

```
DEBUG=true nodemon src/server.js
```


Once this has started you will see the package terminal-color take effect.
Next up you are going to want to open postman with the Debug server running.
once in postman try creating, deleting, and updating and finding and messages will be shown in the
terminal

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

#Debuging endpoint
```
------------------------------
server active on 3000

------------------------------
 Thu Aug 11 2016 23:19:46 GMT-0400 (EDT)

------------------------------
I found this one thing and its ok 1

------------------------------
 Thu Aug 11 2016 23:20:01 GMT-0400 (EDT)
```
