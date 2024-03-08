//creates a class with the name shape
class Shapes {
    //creates a color variable
    constructor(color) {
        this.color = color;
    }
    //returns the color when a color is entered into the prompt
    render() {
        return `this.color="${this.color}"`;
    }
}

//exports this as a Shapes class
module.exports = Shapes;