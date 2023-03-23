// Target class (position and width)
class Target {
  constructor(x, y, w, l, id) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.label = l;
    this.id = id;
  }

  // Checks if a mouse click took place
  // within the target
  clicked(mouse_x, mouse_y) {
    return dist(this.x, this.y, mouse_x, mouse_y) < this.width / 2;
  }

  getTextColor(label) {
    const firstLetter = label.charAt(0).toUpperCase(); // get the first letter and convert to uppercase

    const letterToColor = {
      // create an object that maps each letter to a color
      0: "white",
      A: "lime",
      B: "yellow",
      C: "cyan",
      F: "white",
      G: "lime",
      K: "pink",
      L: "yellow",
      M: "cyan",
      N: "red",
      O: "orange",
      P: "white",
      R: "yellow",
      S: "cyan",
      T: "red",
      V: "lime",
      W: "pink",
      Y: "yellow",
      Z: "red",
    };

    return letterToColor[firstLetter] || "black"; // return the color mapped to the first letter, or black as the default color
  }

  // Draws the target (i.e., a circle)
  // and its label
  draw() {
    // Draw target
    fill(color(this.getTextColor(this.label)));
    rect(this.x - this.width, this.y- 30, this.width * 2, 60);

    // Draw label
    textFont("Arial", 24);
    textStyle(BOLD);
    fill(color(0, 0, 0));
    textAlign(CENTER);
    text(this.label, this.x, this.y);
  }

  getLabel() {
    return this.label;
  }

  setX(x) {
    this.x = x;
  }

  setY(y) {
    this.y = y;
  }
}