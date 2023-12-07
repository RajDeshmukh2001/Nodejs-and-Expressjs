const express = require('express');
const router = express.Router();

let users = [
    {
        firstName: "Virat",
        lastName: "Kohli",
        email: "virat18@gamil.com",
        age: 35,
    },
    {
        firstName: "Rohit",
        lastName: "Sharma",
        email: "rohit45@gamil.com",
        age: 36,
    },
    {
        firstName: "hardik",
        lastName: "Pandya",
        email: "hardik07@gamil.com",
        age: 28,
    },
];

// GET request: Retrieve all users
router.get("/", (req, res) => {
    res.send(JSON.stringify(users), null, 4);
})

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email", (req, res) => {
    const email = req.params.email;
    let user = users.filter((user) => user.email === email);
    res.send(user);
})

// POST request: Create a new user
router.post("/", (req, res) => {
    users.push({
        "firstName": req.query.firstName,
        "lastName": req.query.lastName,
        "email": req.query.email,
        "age": req.query.age,
    })

    res.send(`The user ${firstName} has been added`);
})

// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
    const email = req.params.email;
    let user = users.filter((user) => user.email === email);
    
    if (user.length > 0) {
        let filtered_user = user[0];
        let first_name = req.query.firstName;        
        let last_name = req.query.lastName;
        
        if (first_name) {
            filtered_user.firstName = first_name;
        }

        if (last_name) {
            filtered_user.lastName = last_name;
        }

        all_users = users.filter((user) => user.email != email);
        all_users.push(filtered_user);
        res.send(`User with ${email} has been updated`);
    } else {
        res.send(`User with ${email} not found`);
    }
})

// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
    const email = req.params.email;
    let user = users.filter((user) => user.email != email);
    res.send(`User with ${email} has been deleted`);
})

module.exports = router;