const Shapes = require('./shapes');

class Circle extends Shapes {
    constructor (color, text, textColor) {
        super(color);
        this.text = text;
        this.textColor = textColor;
    }
    render() { 
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50" fill="blue" />
        <text x="50%" y="50%" dy=".3em" text-anchor="middle" fill="red">word</text>
    </svg>`
    }
}


module.exports = Circle;