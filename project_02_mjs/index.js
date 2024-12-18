import {Square,PI} from "./square.js";

const square1 = new Square(9)
console.log(`Area = ${square1.area()}`);
console.log(`Length = ${square1.length()}`);

console.log(`PI = ${PI}`);

function test(){
    return new Promise((resolve, reject)=>{
        if (Boolean((new Date()).getSeconds()%2)){
            resolve('SUCCESS')
        } else {
            reject('ERROR')
        }
    });
}

try {
    console.log(await test());
} catch (e) {
    console.log(e)
} finally {
    console.log('func test called')
}