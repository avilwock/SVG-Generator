const Shapes = require('./shapes');

class Square extends Shapes {
    constructor (color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    render() { 
        return `
        <svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
                <!-- Simple rectangle -->
                <rect width="${this.width}" height="${this.height}" fill="${this.color}" />
        </svg>`;
    }
}

module.exports = { Square };