const express = require('express');

const router = express.Router();

let friends = {
    "rajdeshmukh@gamil.com": { "firstName": "Raj", "lastName": "Deshmukh", "DOB": "30-06-2001" },
    "adeshpandey@gamil.com": { "firstName": "Adesh", "lastName": "Pandey", "DOB": "04-12-2001" },
    "bharatpawar@gamil.com": { "firstName": "Bharat", "lastName": "Pawar", "DOB": "06-06-2001" }
};

// Get all friends
router.get("/", (req, res) => {
    res.send(JSON.stringify(friends, null, 4));
})

// Get a single friend using Email ID
router.get("/:email", (req, res) => {
    const email = req.params.email;
    res.send(friends[email]);
})

// Add a new friend
router.post("/", (req, res) => {
    if (req.body.email) {
        friends[req.body.email] = {
            "firstName": req.body.firstName,
            "lastName": req.body.lastName,
            "DOB": req.body.DOB,
        }
    }
    res.send(`The user ${firstName} has been added`);
})

// Update a details of a friend using Email Id
router.put("/:email", (req, res) => {
    const email = req.params.email;
    let friend = friends[email];

    if (friend) {
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let DOB = req.body.DOB;

        if (firstName) {
            friend["firstName"] = firstName;
        }

        if (lastName) {
            friend["lastName"] = lastName;
        }

        if (DOB) {
            friend["DOB"] = DOB;
        }

        friends[email] = friend;
        res.send(`Friend with the ${email} updated`);
    } else {
        res.send(`Friend with ${email} does not exist`);
    }
})

// Delete a friend using Email Id
router.delete("/:email", (req, res) => {
    const email = req.params.email;

    if (email) {
        delete friends[email];
    }
    res.send(`Friend with ${email} deleted`);
})

module.exports = router;