const Shapes = require('./shapes');

test('Shape rendering test', () => {
    const shape = new Shapes("blue");
    const expectedValue = `this.color="blue"`

    expect(shape.render().replace(/\s+/g, ' ')).toEqual(expectedValue.replace(/\s+/g, ' '));
});