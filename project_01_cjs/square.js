const Square = class Square {
    constructor(width) {
        this.width = width
    }
    area() {
        return Math.pow(this.width, 2);
    }
    length(){
        return this.width*4;
    }
}
const PI = Math.PI
module.exports = {
    Square, PI
}