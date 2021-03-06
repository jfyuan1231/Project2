import { SVG_NS, PADDLE_HEIGHT, PADDLE_SPEED } from "../settings.js";

export default class Paddle {
    constructor(width, height, boardHeight, x, y, upKey, downKey) {
      this.width = width;
      this.height = height;
      this.boardHeight = boardHeight;
      this.x = x;
      this.y = y;
      this.score = 0;
      this.speed = PADDLE_SPEED;

    document.addEventListener("keydown", event => {
      switch (event.key) {

        case upKey:
          this.moveUp();
          break;

        case downKey:
          this.moveDown();
          break;
        
        default:
          console.log("another key was pressed");  
      }
  });
}

    moveUp() {
      this.y = Math.max(0, this.y - this.speed)  
    }

    moveDown() {
      this.y = Math.min(this.boardHeight - this.height, this.y + this.speed)
    }
        
    increaseScore() {
      this.score = this.score + 1;
    }

    getScore() {
      return this.score ;
    }

    setSpeed() {
      this.speed = speed;

    }

    getCoordinates() {
      return {
        left: this.x,
        top: this.y,
        right: this.x + this.width,
        bottom: this.y + this.height
      }
    }

    render(svg) {
        const paddle = document.createElementNS(SVG_NS, "rect");
        paddle.setAttributeNS(null, "width", this.width);
        paddle.setAttributeNS(null, "height", this.height);
        paddle.setAttributeNS(null, "x", this.x);
        paddle.setAttributeNS(null, "y", this.y);
        paddle.setAttributeNS(null, "fill", "white");
        
        svg.appendChild(paddle);
    }
}
  

