var Circle = /** @class */ (function () {
    function Circle(radius, color, filled) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * this.radius * Math.PI;
    };
    return Circle;
}());
var circle = new Circle(3.5, "indigo", false);
console.log(circle);
