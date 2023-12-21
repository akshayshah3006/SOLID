class Square {
  private length: number;
  constructor(length: number) {
    this.length = length;
  }
  public getArea(): number {
    const area = this.length * this.length;
    return area;
  }
}

class Rectangle {
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

class Print {
  private area;
  constructor(area: number) {
    this.area = area;
  }
  public printObject(): void {
    console.log("Area of Square", this.area);
  }
}

const rectArea = new Rectangle(10, 12);
const sqArea = new Square(12);

const t = new Print(rectArea.getArea());
const j = new Print(sqArea.getArea());
t.printObject();
j.printObject();
