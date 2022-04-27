var Rectangle = /** @class */ (function () {
    function Rectangle(width, length, color, filled) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.length = length;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.length;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.length);
    };
    return Rectangle;
}());
var rectangle = new Rectangle(2.5, 3.8, "orange", true);
console.log(rectangle);
