const Shapes = require('./shapes');

class Circle extends Shapes {
    constructor (color, radius) {
        super(color);
        this.radius = radius;
    }
    render() { 
        return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill = ${this.radius} = 80/>
      </svg>`
    }
}


module.exports = { Circle };