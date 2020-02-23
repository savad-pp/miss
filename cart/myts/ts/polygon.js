var Circle = /** @class */ (function () {
    function Circle() {
        this.r = 15;
    }
    Circle.prototype.getSides = function () {
        console.log("sides");
        return this.nsides;
    };
    Circle.prototype.drawImage = function () {
        console.log("drawing a circle");
    };
    Circle.prototype.area = function () {
        return 3.14 * Math.pow(this.r, 2);
    };
    return Circle;
}());
var c = new Circle();
c.drawImage();
var ar = c.area();
console.log(ar);
c.getSides();
