//imports the Shapes class from the shapes.js file
const Shapes = require('./shapes');

//extends the shapes color into the square class
class Square extends Shapes {
    constructor (color, text, textColor) {
        super(color);
        this.text = text;
        this.textColor = textColor;
    }
    //tells the program to render the square with the specifications, and allows the user input of background color, text color, and text
    render() { 
        return `
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="200" height="300">
            <rect x="0" y="0" width="80" height="80" fill="${this.color}" />
            <text x="50%" y="50%" dy=".3em" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

//exports the Square class
module.exports = Square ;