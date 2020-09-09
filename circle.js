class Circle extends Piece {

  constructor(x, y, r) {
    super(x, y, r);
    this.symbol = Circle.symbol;
  }

  draw() {
    noFill();
    stroke(0);
    const center = this.getCenter();
    arc(center.x, center.y, this.r, this.r, -HALF_PI, TWO_PI * this.entry_animation.value() - HALF_PI, OPEN);
  }

}

Circle.symbol = "O";