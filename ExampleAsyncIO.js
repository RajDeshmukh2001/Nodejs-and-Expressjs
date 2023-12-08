// Requiring fs module - fs is used for File I/O
let fs = require('fs');

let filename1 = "courseDetails.json"
let filename2 = "usersData.json"

// Reading the file Asynchronously - Not blocking rest of execution
const readFile1 = (filename1) => {
    fs.readFile(filename1, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log("\n\nThe content of the file-1 is \n\n" + data);
            console.log("Completed reading file-1 \n\n");
        }
    });
}

const readFile2 = (filename2) => {
    fs.readFile(filename2, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log("\n\nThe content of the file-2 is \n\n" + data);
            console.log("Completed reading file-2 \n\n");
        }
    });
}

console.log('Before the reading the file-1');
readFile1(filename1);

console.log('Before the reading the file-2');
readFile2(filename2);

console.log('All done!');