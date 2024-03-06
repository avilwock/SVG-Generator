const Shapes = require('./shapes');

class Triangle extends Shapes {
    constructor (color, text, textColor) {
        super(color);
        this.text = text;
        this.textColor = textColor;
    }
    render() { 
        return `<svg id="triangle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>
        <text x="50%" y="50%" dy=".3em" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`
    }
}


module.exports = Triangle;
