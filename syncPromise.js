let prompt = require('prompt-sync')();
let fs = require('fs');

const myPromise = new Promise((resolve, reject) => {
  let filename = prompt('Enter the name of the file: ');
  
  try {
    const data = fs.readFileSync(filename, { encoding: 'utf8', flag: 'r' });
    resolve(data);
  } catch (err) {
    reject(err)
  }
});

console.log(myPromise);

myPromise.then(
  (data) => console.log(data),
  (err) => console.log("Error reading file")
);
