const Square = require("./Square");

test('Square rendering test', () => {
    const shape = new Square("blue", "word", "red");
    const expectedValue = `
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="80" height="80" fill="blue" />
        <text x="50%" y="50%" dy=".3em" text-anchor="middle" fill="red">word</text>
    </svg>`;


    expect(shape.render().replace(/\s+/g, ' ')).toEqual(expectedValue.replace(/\s+/g, ' '));
    });