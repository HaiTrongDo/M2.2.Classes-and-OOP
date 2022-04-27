class Rectangle {
    width: number;
    length: number;
    color: string;
    filled: boolean;
    constructor(width: number,
                length: number,
                color: string,
                filled: boolean) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.length = length;
    }

    getArea(): number {
        return this.width * this.length;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.length);
    }
}

let rectangle = new Rectangle(2.5, 3.8, "orange", true);

console.log(rectangle);