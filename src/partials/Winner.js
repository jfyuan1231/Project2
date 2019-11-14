import { SVG_NS, WIN_SCORE } from "../settings";

export default class Winner {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

render(svg, paddle1, paddle2) {
let WIN_SCORE_Text = document.createElementNS(SVG_NS, "text");
WIN_SCORE_Text.setAttributeNS(null, "x", this.x);
WIN_SCORE_Text.setAttributeNS(null, "y", this.y);
WIN_SCORE_Text.setAttributeNS(null, "font-size", 40);
WIN_SCORE_Text.setAttributeNS(null, "font-family", "'Silkscreen Web', monotype");
WIN_SCORE_Text.setAttributeNS(null, "fill", "#ff0000");

let paddle1Win = paddle1.getScore();
let paddle2Win = paddle2.getScore();

if (paddle1Win === WIN_SCORE) {
  WIN_SCORE_Text.textContent = 'Paddle1 WON!';
  svg.appendChild(WIN_SCORE_Text);

} else if (paddle2Win === WIN_SCORE) {
  WIN_SCORE_Text.textContent = 'Paddle2 WON!';
  svg.appendChild(WIN_SCORE_Text);
}
}
}