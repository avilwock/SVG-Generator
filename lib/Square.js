const Shapes = require('./shapes');

class Square extends Shapes {
    constructor (color) {
        super(color);
    }
    render() { 
        return `
        <svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
                <!-- Simple rectangle -->
                <rect width="100" height="100" fill="${this.color}" />
        </svg>`;
    }
}

module.exports = Square ;