import { SVG_NS} from "../settings";

export default class Score {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    render (svg, score) {
        const scoreText = document.createElementNS(SVG_NS, "text");
        scoreText.setAttributeNS(null, "x", this.x);
        scoreText.setAttributeNS(null, "y", this.y);
        scoreText.setAttributeNS(null, "font-size", this.size);
        scoreText.setAttributeNS(null, "font-family", "'Silkscreen Web', monotype");
        scoreText.setAttributeNS(null, "fill", "white");

        scoreText.textContent = score;
        svg.appendChild(scoreText);
    }

    }