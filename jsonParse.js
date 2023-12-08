const axios = require('axios').default;

const req = axios.get("https://jsonplaceholder.typicode.com/users");
console.log(req);

req.then(res => {
    let users = res.data;
    console.log(JSON.stringify(users, null, 4));
})
    .catch(err => {
        console.log(err.toString())
        //This will console log the error with the code. eg. Error: Request failed with status code 404
    });
