const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session')
const routes = require('./router/friends.js')

let users = [];

const userExist = (username) => {
    let userWithSameName = users.filter((user) => {
        return user.username === username;
    });

    if (userWithSameName.length > 0) {
        return true;
    } else {
        return false;
    }
}

const authenticateUsers = (username, password) => {
    let validUsers = users.filter((user) => {
        return (user.username === username && user.password === password);
    })

    if (validUsers.length > 0) {
        return true;
    } else {
        return false;
    }
}

const app = express();

app.use(session({ secret: "fingerprint" }, resave = true, saveUninitialized = true));

app.use(express.json());

app.use("/friends", auth = (req, res, next) => {
    if (req.session.authorization) {
        token = req.session.authorization["accessToken"];
        jwt.verify(token, "access", (err, user) => {
            if (!err) {
                req.user = user;
                next();
            } else {
                return res.status(403).json({ message: "User not authenticated" })
            }
        });
    } else {
        return res.status(403).json({ message: "User not logged in" })
    }
})

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
        return res.status(401).json({ message: "Invalid Credentials" });
    }

    if (authenticateUsers(username, password)) {
        let accessToken = jwt.sign({
            data: password
        }, "access", { expiresIn: 60 * 60 });

        req.session.authorization = {
            accessToken,
            username,
        }
        return res.status(200).json({ message: "Login sucessfull" });
    } else {
        return res.status(404).json({ message: "Failed to login. Invalid Credentials" });
    }
})

app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username && password) {
        if (!userExist(username)) {
            users.push({ "username": username, "password": password });
            return res.status(200).json({ message: "User registration successfull" });
        } else {
            return res.status(409).json({ message: "User already exist" });
        }
    }
    return res.status(404).json({ message: "Failed to register user" });
})

const PORT = 5000;
app.use("/friends", routes);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})