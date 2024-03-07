const Shapes = require('./shapes');

class Triangle extends Shapes {
    constructor(color, text, textColor) {
        super(color);
        this.text = text;
        this.textColor = textColor;
    }

    render() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="300">
            <polygon points="50,5 95,95 5,95" fill="${this.color}" />
            <text x="50%" y="50%" dy=".3em" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

module.exports = Triangle;