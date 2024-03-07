 # SVG Generator   ![License](https://img.shields.io/badge/license-MIT%20License-blue)

## Description

The purpose of this project is to generate a logo with up to three letters, giving the creator the option of a square, circle, or triangle for their shape options, and allowing them to choose the text color, and the shape color.

## User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Future Implementations

* Offer a font choice

* Offer more than just the three shape options

* Offer differing sizes for the shapes

* Adding more styling to the images to make them look more professional

## Access

To access this site, please visit: https://github.com/avilwock/SVG-Generator.git

## Usage

To use this program, you open up the integrated terminal and type in node index.js to start the generator. You will be prompted with questions about how you wish the logo to look. When you have answered the questions, a logo is generated in a separate SVG file.

## Credits

With thanks to:

https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering

Logan Garland, Coding Bootcamp, University of Irvine California

## License

MIT License