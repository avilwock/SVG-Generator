//imports the Shapes class from the shapes.js file
const Shapes = require('./shapes');

//extends the shapes color into the triangle class
class Triangle extends Shapes {
    constructor(color, text, textColor) {
        super(color);
        this.text = text;
        this.textColor = textColor;
    }
    //renders the shape for the circle, with a viewbox that takes up the full length and gives the item a width of 200 and height of 30
    render() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="300">
            <polygon points="50,5 95,95 5,95" fill="${this.color}" />
            <text x="50%" y="50%" dy=".3em" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}
//exports this as Triangle class
module.exports = Triangle;