let arr = ["Anirup", "Sangram"];

if (arr.__proto__ === Array.prototype) {
  console.log(arr.__proto__);
}

if (arr.__proto__.__proto__ === Object.prototype) {
  console.log(arr.__proto__.__proto__);
}

if (arr.__proto__.__proto__.__proto__ === null) {
  console.log(arr.__proto__.__proto__.__proto__);
}

let object = {
  name: "Anirup",
  city: "BBSR",
};

if (object.__proto__ === Object.prototype) {
  console.log(object.__proto__);
}

if (object.__proto__.__proto__ === null) {
  console.log(object.__proto__.__proto__);
}

function fun() {}

if (fun.__proto__ === Function.prototype) {
  console.log(fun.__proto__);
}

if (fun.__proto__.__proto__ === Object.prototype) {
  console.log(fun.__proto__.__proto__);
}

if (fun.__proto__.__proto__.__proto__ === null) {
  console.log(fun.__proto__.__proto__.__proto__);
}

// Prototypal Inheritance

let obj1 = {
  name: "Anirup",
  city: "BBSR",
  getInfo() {
    console.log(this.name + " " + this.city);
  },
};

let obj2 = {
  name: "Sharan",
};

obj1.getInfo(); // Anirup BBSR

obj2.__proto__ = obj1;
obj2.getInfo(); // Sharan BBSR
