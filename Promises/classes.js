class Rectangle {
  constructor(width, height, area) {
    this.width = width;
    this.height = height;
    this.area = area;
  }

  displayArea() {
    console.log(this.area);
  }
}

let newRec = new Rectangle(1, 2, 2);
newRec.displayArea();
