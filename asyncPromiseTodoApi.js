const axios = require('axios').default;

const connectToURL = (url) => {
  const req = axios.get(url);
  console.log(req);

  req.then(res => {
    let listOfWork = res.data;

    listOfWork.forEach((todo) => {
      console.log(todo.id + ". " + todo.title);
    });
  })
    .catch(err => {
      console.log(err.toString())
    });
}
console.log("Before connect URL");

connectToURL('https://jsonplaceholder.typicode.com/todos?userId=10&completed=false');

console.log("After connect URL");
