const Circle = require("./Circle");

test('Circle rendering test', () => {
    const shape = new Circle("blue", "word", "red");
    const expectedValue = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="300" >
    <circle cx="50" cy="50" r="50" fill="blue" />
    <text x="50%" y="50%" dy=".3em" text-anchor="middle" fill="red">word</text>
</svg>`

expect(shape.render().replace(/\s+/g, ' ')).toEqual(expectedValue.replace(/\s+/g, ' '));
});
