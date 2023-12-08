const axios = require('axios').default;

const connectToURL = async (url) => {
  try {
    const todos = await axios.get(url);
    let listOfWork = todos.data;

    if (listOfWork.length > 0) {
      listOfWork.forEach((todo) => {
        console.log(todo.id + ". " + todo.title);
      });
    } else {
      console.log("Zero records");
    }
  } catch (error) {
    console.error("Error: ", error.message);
  }
}

console.log("Before connect URL");

connectToURL('https://jsonplaceholder.typicode.com/todos?userId=10&completed=false');

console.log("After connect URL");