class Cross extends Piece {

  constructor(x, y, r) {
    super(x, y, r);
    this.symbol = Cross.symbol;
  }

  draw() {
    const center = this.getCenter();
    
    const top_left = createVector(center.x - this.r * 0.5, center.y - this.r * 0.5);
    const top_right = createVector(center.x + this.r * 0.5, center.y - this.r * 0.5);
    const bottom_left = createVector(center.x - this.r * 0.5, center.y + this.r * 0.5);
    const bottom_right = createVector(center.x + this.r * 0.5, center.y + this.r * 0.5);
    
    const value = this.entry_animation.value();

    stroke(0);

    const l1_end = p5.Vector.lerp(top_left, bottom_right, min(1, value * 2));
    line(
      top_left.x, top_left.y,
      l1_end.x, l1_end.y
    );

    if (value > 0.5) {
      const l2_end = p5.Vector.lerp(top_right, bottom_left, max(0, value * 2 - 1));
      line(
        top_right.x, top_right.y,
        l2_end.x, l2_end.y
      );
    }
  }

}

Cross.symbol = "X";