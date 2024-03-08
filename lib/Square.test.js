//pulls in the Square class from the Square.js file
const Square = require("./Square");

//Test, creates a test called Square rendering test
//it logs the shape as a new square and tests if entering blue, word, and red for the variable works
test('Square rendering test', () => {
    const shape = new Square("blue", "word", "red");
    const expectedValue = `
    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="200" height="300">
        <rect x="0" y="0" width="80" height="80" fill="blue" />
        <text x="50%" y="50%" dy=".3em" text-anchor="middle" fill="red">word</text>
    </svg>`;

//expects a shape to render, and replaces extra empy space with one space to ensure compatibility
//between sections
expect(shape.render().replace(/\s+/g, ' ')).toEqual(expectedValue.replace(/\s+/g, ' '));
});