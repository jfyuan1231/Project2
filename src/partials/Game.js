import {SVG_NS, PADDLE_GAP, PADDLE_HEIGHT, PADDLE_WIDTH, KEYS, BALL_RADIUS, PADDLE_SPEED, TEXT_SIZE} from "../settings.js";
import Board from './Board';
import Paddle from './Paddle';
import Ball from "./Ball";
import Score from "./Score";

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.gameElement = document.getElementById(this.element);
    this.board = new Board(this.width, this.height);
    this.paddle1 = new Paddle(PADDLE_WIDTH, PADDLE_HEIGHT, this.height, PADDLE_GAP, (this.height/2) - (PADDLE_HEIGHT/2), KEYS.p1Up, KEYS.p1Down);
    this.paddle2 = new Paddle(PADDLE_WIDTH, PADDLE_HEIGHT, this.height, this.width - PADDLE_GAP - PADDLE_WIDTH, (this.height/2) - (PADDLE_HEIGHT/2),KEYS.p2Up, KEYS.p2Down);
    this.ball = new Ball(BALL_RADIUS, this.width, this.height);
    this.score1 = new Score(this.width/2 - 50 , 30, TEXT_SIZE);
    this.score2 = new Score(this.width/2 + 25 , 30, TEXT_SIZE);
    this.paused = false;
    document.addEventListener("keydown", (event) => {
      if (event.key === KEYS.pause) {
        this.paddle1.setSpeed(PADDLE_SPEED);
        this.paddle2.setSpeed(PADDLE_SPEED);
        this.paused = !this.paused;
      }
    });
  }

  render() {
    if (this.paused) {
      this.paddle1.setSpeed(0);
      this.paddle2.setSpeed(0);
      return;
    }
    this.gameElement.innerHTML = '';

    let svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
    this.gameElement.appendChild(svg);
  
    this.board.render(svg);
    this.paddle1.render(svg);
    this.paddle2.render(svg);
    this.ball.render(svg, this.paddle1, this.paddle2);
    this.score1.render(svg, this.paddle1.getScore());
    this.score2.render(svg, this.paddle2.getScore());
    
  }
}
