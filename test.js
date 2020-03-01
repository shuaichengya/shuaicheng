var a=2,b=3
class Point {
    constructor(x, y) {
        // console.log(this);
        this.x = x;
        this.y = y;
        this.moveTo = (x, y) => {
            console.log(this);
            this.x = x;
            this.y = y;
            console.log(this);
            console.log(this.x + "," + this.y);
        };
    }
}
var p1 = new Point(0, 0);
var p2 = { z: 1, x: 0, y: 0, };
p1.moveTo.bind(p2, 10, 10)();
console.log(`${a}和${b}`);

// let a=p1.moveTo;
// a.apply(p2,[10,10]);
// a(10,10);
// p2.moveTo =p1.moveTo;
// p2.moveTo(10,10);