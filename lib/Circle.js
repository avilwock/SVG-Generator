const Shapes = require('./shapes');

class Circle extends Shapes {
    constructor (color) {
        super(color);
    }
    render() { 
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50" fill="${this.color}" />
    </svg>`
    }
}


module.exports = Circle;