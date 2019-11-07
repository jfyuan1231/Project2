import {SVG_NS} from "../settings.js";
export default class Ball {
    constructor(radius, boardWidth, boardHeight) {
        this.radius = radius;
        this. boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = 1;
        this.reset();
    }
    //change x and y
    ballMove() {
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }
    reset() {
        this.x = this.boardWidth/2;
        this.y = this.boardHeight/2;
        this.vy = 0;
        while (this.vy === 0) {
            this.vy = Math.floor(Math.random() * 10) - 5;
        }
        this.vx = this.direction * (6 - Math.abs(this.vy));
    }
    wallCollision() {
        const hitTop = (this.y - this.radius <= 0);
        const hitBottom = (this.y + this.radius >= this.boardHeight);
        if (hitTop || hitBottom) {
            this.vy = this.vy * -1;
        }
    //paddleCollision() {

   // }
    
    }
    
    
    render(svg) {
        const ball = document.createElementNS(SVG_NS, "circle");
        ball.setAttributeNS(null, "r", this.radius);
        ball.setAttributeNS(null, "cx", this.x);
        ball.setAttributeNS(null, "cy", this.y);
        ball.setAttributeNS(null, "fill", "white");
        svg.appendChild(ball);
        this.ballMove();
        this.wallCollision();
        
        
        //...
    }
}