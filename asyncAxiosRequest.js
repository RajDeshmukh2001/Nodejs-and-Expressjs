const axios = require('axios').default;

const connectToURL = (url) => {
    const req = axios.get(url);
    console.log(req);
    
    req.then(res => {
        console.log("Fulfilled")
        console.log(res.data);
    })
    .catch(err => {
        console.log("Rejected for url " + url)
        console.log(err.toString())
    });
}
//Valid URL
connectToURL('https://jsonplaceholder.typicode.com/users');
//Invali URL
connectToURL('https://jsonplaceholder.typicode.com/users.json');
