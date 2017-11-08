var EventEmitter = require("events");

let myEventEmitter = new EventEmitter();

myEventEmitter.on("first", (arr) => {
    console.log("event-first2:");
    console.log("\'this\' in arrow function:" + this.a);
    console.log("\'this\' in arrow function:" + JSON.stringify(this));
});

myEventEmitter.on("first", function(arr) {
    console.log("event-first1:");
    console.log("\'this\' in normal function:" + this.a);
});

myEventEmitter.a = "aa";
myEventEmitter.emit("first");
myEventEmitter.emit("second");
