const bcrypt = require('bcryptjs');

module.exports = {
    doctorRegister: async(req, res) => {
        const{username, password} = req.body;
        const db = req.app.get('db');
        const{session} = req;
        // console.log(req.body)
        let user = await db.check_user(username);
        user = user[0];

        if(user){
            return res.status(400).send('User is already exists')        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUser = await db.register_user(true, username, hash, null);
        newUser = newUser[0];

        session.user = newUser;
        console.log(req.session.user)
        res.status(201).send(session.user)
    },

    patientRegister: async(req, res) => {
        const{username, password, doctor} = req.body;
        const db = req.app.get('db');
        const{session} = req;

        let user = await db.check_user(username);
        user = user[0];

        if(user){
            return res.status(400).send('User is already exists')        
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUser = await db.register_user(false, username, hash, doctor);
        newUser = newUser[0];

        

        session.user = newUser;
        console.log(req.session.user)
        res.status(201).send(session.user)
    },

    login: async(req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');
        const{session} = req;

        let user = await db.check_user(username);

        user = user [0];
        if(!user){
            return req.status(400).send('User not found');
        }else
    },

    getUser: (req, res) => {

    },

    logout: (req,res) => {
        // req.session.destroy()
        // res.sendStatus(200)
    }
}