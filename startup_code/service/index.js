const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const { peerProxy } = require('./peerProxy.js');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');
const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 4000;

let users = [];
let messages = [];

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);


const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService);




//Websocket stuff
// const wss = new WebSocketServer({ noServer: true });



// server.on('upgrade', (request, socket, head) => {
//   wss.handleUpgrade(request, socket, head, function done(ws) {
//     wss.emit('connection', ws, request);
//   });
// });

// let connections = [];

// wss.on('connection', (ws) => {
//   const connection = { id: connections.length + 1, alive: true, ws };
//   connections.push(connection);

//   ws.on('message', function message(data) {
//     connections.forEach((conn) => {
//       if (conn.id !== connection.id) {
//         conn.ws.send(data);
//       }
//     });
//   });

//   ws.on('close', () => {
//     const index = connections.findIndex((o) => o.id === connection.id);
//     if (index !== -1) {
//       connections.splice(index, 1);
//     }
//   });

// ws.on('pong', () => {
//   connection.alive = true;
// });
// });

// setInterval(() => {
//   connections.forEach((conn) => {
//     if (conn.alive === false) {
//       conn.ws.terminate();
      
//     } else {
//     conn.alive = false;
//     conn.ws.ping();
//     }
//   });
// }, 10000);






//end websocket stuff





async function getUser(field, value) {
  if (value) {
    user = DB.getUser(value)
    return user;
  }
  return null
}




apiRouter.get('/user', async (req, res) => {
  // const user = users.find((u) => u.token === req.cookies[authCookieName]);
  const user = DB.getUserByToken(req.cookies[authCookieName]);
  if (!user) {
    res.status(401).send({ msg: 'user does not exist' });
    return;
  }
  res.send({ username: user.username, Yeahs: user.Yeahs, Nays: user.Nays });
}
);



// Create a new user
async function createUser(username, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    username: username,
    password: passwordHash,
    pic: 'DefaultChair.png',
    token: uuid.v4(),
    Yeahs: [],
    Nays: [],
  };
  DB.addUser(user);
  return user;
}


apiRouter.post('/messages/add', async (req, res) => {
  // const user = users.find((u) => u.token === req.cookies[authCookieName]);
  const user = DB.getUserByToken(req.cookies[authCookieName]);
  if (!user) {
    res.status(401).send({ msg: 'user does not exist' });
    return;
  }
  messages.push({ from: user.username, message: req.body.message });  //here's some messaging stuff that will need to change
  res.send({ messages });
});

//add to the yeahs
apiRouter.post('/yeahs/add', async (req, res) => {
  //const user = users.find((u) => u.token === req.cookies[authCookieName]);
  const user = await DB.getUserByToken(req.cookies[authCookieName]);
  if (!user) {
    res.status(401).send({ msg: 'user does not exist' });
    return;
  }
  user.Yeahs.push(req.body.id);
  await DB.updateUser(user);  
  res.send({ Yeahs: user.Yeahs });
});

//add to the nays
apiRouter.post('/nays/add', async (req, res) => {
  const user = await DB.getUserByToken(req.cookies[authCookieName]);
  if (!user) {
    res.status(401).send({ msg: 'user does not exist' });
    return;
  }
  user.Nays.push(req.body.id);
  await DB.updateUser(user); 
  res.send({ Nays: user.Nays });
});




// Create a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await getUser('username', req.body.username)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.username, req.body.password);
    setAuthCookie(res, user);

    res.send({ username: user.username });
  }
});
// Login
apiRouter.put('/auth/login', async (req, res) => {
  const user = await getUser('username', req.body.username);
  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    setAuthCookie(res, user);
    DB.updateUser(user);
    res.send({ username: user.username, pic: user.pic });
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});
// Logout
apiRouter.delete('/auth/logout', async (req, res) => {
  const token = req.cookies['token'];
  const user = await getUser('token', token);
  if (user) {
    clearAuthCookie(res, user);
  }
  res.send({});
});

// make cookie
function setAuthCookie(res, user) {
  user.token = uuid.v4();

  res.cookie('token', user.token, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}
//clear cookie
function clearAuthCookie(res, user) {
  delete user.token;
  DB.updateUser(user);
  res.clearCookie('token');
}

//set the profile pic
apiRouter.post('/profPic/set', async (req, res) => {
  const user = await DB.getUser(req.body.username);
  if (!user) {
    res.status(401).send({ msg: 'user does not exist' });
    return;
  }
  user.profPic = req.body.pic;
  user.pic = req.body.pic;
  DB.updateUser(user);
  res.send({ pic: user.profPic });
});

//get the profile pic
apiRouter.get('/profPic/get', async (req, res) => {
  //const user = users.find((u) => u.token === req.cookies[authCookieName]);
  const user = await DB.getUserByToken(req.cookies[authCookieName]);
  if (!user) {
    res.status(401).send({ msg: 'user does not exist' });
    return;
  }
  if (!user.profPic) {
    res.status(404).send({ msg: 'no profile pic' });
    return;
  }
  res.send({ pic: user.profPic });
});



