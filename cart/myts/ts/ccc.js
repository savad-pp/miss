"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(e, distance) {
        this.engin = e;
        this.distancecoverd = distance;
    }
    Car.prototype.getEngin = function () {
        return this.engin;
    };
    Car.prototype.getMilage = function (fuekinliters) {
        return this.distancecoverd / fuekinliters;
    };
    return Car;
}());
exports.Car = Car;
