class Shapes {
    constructor(color) {
        this.color = color;
    }

    render() {
        return `this.color="${this.color}"`;
    }
}

module.exports = Shapes;