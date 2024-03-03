const Shapes = require('./shapes');

class Triangle extends Shapes {
    constructor (color) {
        super(color);
    }
    render() { 
        return `<svg id="triangle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50 15, 100 100, 0 100" fill="${this.color}"/>
    </svg>`
    }
}


module.exports = Triangle;