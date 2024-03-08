//imports the shapes class from the shapes.js
const Shapes = require('./shapes');

//creates a test called Shape rendering test that tests to ensure that when the color is specified as blue, the test passes
test('Shape rendering test', () => {
    const shape = new Shapes("blue");
    const expectedValue = `this.color="blue"`
    //this tells the program that the expected value when rendered in shapes should match this test, and ensures the extra spacing is removed
    expect(shape.render().replace(/\s+/g, ' ')).toEqual(expectedValue.replace(/\s+/g, ' '));
});