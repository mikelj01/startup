const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
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

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

async function getUser(field, value) {
  if (value) {
    DB.getUser(value)
  }
  return null;
}


// Create a new user
async function createUser(username, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    username: username,
    password: passwordHash,
    pic: 'DefaultChair.png',
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
  user = user.Yeahs.push(req.body.id);
  await DB.updateUser(user);  //somthing isn't right here, need to check the database
  res.send({ Yeahs: user.Yeahs });
});

//add to the nays
apiRouter.post('/nays/add', async (req, res) => {
  const user = users.find((u) => u.token === req.cookies[authCookieName]);
  if (!user) {
    res.status(401).send({ msg: 'user does not exist' });
    return;
  }
  user.Nays.push(req.body.id);
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
apiRouter.post('/profPic/set', (req, res) => {
  const user = users.find((u) => u.token === req.cookies[authCookieName]);
  if (!user) {
    res.status(401).send({ msg: 'user does not exist' });
    return;
  }
  user.profPic = req.body.pic;
  DB.updateUser(user);
  res.send({ pic: user.profPic });
});

//get the profile pic
apiRouter.get('/profPic/get', (req, res) => {
  //const user = users.find((u) => u.token === req.cookies[authCookieName]);
  const user = DB.getUserByToken(req.cookies[authCookieName]);
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

//clear cookies
function clearAuthCookie(res, user) {
  delete user.token;
  DB.updateUser(user);
  res.clearCookie('token');
}

