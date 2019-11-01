require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
// const auth = require('./controllers/middleware/authMiddleware');


const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET}=process.env;

const app = express();

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
})

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))

const authCtrl = require('./controllers/autController')


//Endpoints
//authController endpoints
app.post('/api/doctorRegister', authCtrl.doctorRegister);
app.post('/api/patientRegister', authCtrl.patientRegister);
app.post('/api/login', authCtrl.login);
app.post('/api/logout', authCtrl.logout);
app.post('/api/user', authCtrl.getUser);

//trackerController


//chatRoomController


const port = SERVER_PORT;
app.listen(port, () => console.log(`${port} is Haunted!`))