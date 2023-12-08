// Requiring fs module - fs is used for File I/O
let fs = require('fs');

let filename1 = "courseDetails.json";
let filename2 = "usersData.json";

const readFile1 = (filename1) => {
   // Reading the file Synchronously - Blocking rest of execution
   let data = fs.readFileSync(filename1);
   console.log("\n\nThe content of the file 1 is \n\n" + data);
   console.log("Completed reading file1 \n\n");
}

const readFile2 = (filename2) => {
   // Reading the file Synchronously - Blocking rest of execution
   let data = fs.readFileSync(filename2);
   console.log("\n\nThe content of the file 2 is \n\n" + data);
   console.log("Completed reading file2 \n\n");
}

console.log('Before the reading the file-1');
readFile1(filename1);

console.log('Before the reading the file-2');
readFile2(filename2);

console.log('All done!');
