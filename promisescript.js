let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 4000)
})

console.log("Before calling promise");

myPromise.then((successMsg) => {
    console.log("Form Callback " + successMsg);
})

console.log("After calling promise");