interface Shape {
  getArea(): number;
}
class Square1 implements Shape {
  private length: number;
  constructor(length: number) {
    this.length = length;
  }
  public getArea(): number {
    const area = this.length * this.length;
    return area;
  }
}

class Rectangle1 implements Shape {
  private length: number;
  private breadth: number;
  constructor(length: number, breadth: number) {
    this.length = length;
    this.breadth = breadth;
  }
  public getArea(): number {
    const area = this.length * this.breadth;
    return area;
  }
}

class Print1 {
  private shape: Shape;
  constructor(shape: Shape) {
    this.shape = shape;
  }
  public printObject(): void {
    console.log("Area of Square", this.shape.getArea());
  }
}

const rectArea1 = new Rectangle1(10, 12);
const sqArea1 = new Square1(12);

const t1 = new Print1(rectArea1);
const j1 = new Print1(sqArea1);
t1.printObject();
j1.printObject();
