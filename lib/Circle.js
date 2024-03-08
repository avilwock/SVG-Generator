//imports the Shapes class from the shapes.js file
const Shapes = require('./shapes');
//creates a class named circle and extends off of shapes. Constructor pulls color in
//from shapes file, and adds text and text color variables
class Circle extends Shapes {
    constructor (color, text, textColor) {
        //pulls from the shapes class
        super(color);
        this.text = text;
        this.textColor = textColor;
    }
    //renders the shape for the circle, with a viewbox that takes up the full length and gives the item a width of 200 and height of 300
    render() { 
        return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="300" >
        <circle cx="50" cy="50" r="50" fill="${this.color}" />
        <text x="50%" y="50%" dy=".3em" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`
    }
}

//exports this as Circle class
module.exports = Circle;