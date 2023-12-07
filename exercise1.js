let myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 6000);
})

let myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 3000);
})

myPromise1.then((successMsg) => {
    console.log("From Callback " + successMsg);
    
    myPromise2.then((successMsg) => {
        console.log("Form Callback " + successMsg);
    })
})