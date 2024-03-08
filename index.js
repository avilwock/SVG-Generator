//imports inquirer and fs packages
const inquirer = require('inquirer');
const fs = require('fs');
//imports the circle, triangle, and square modules
const Circle = require('./lib/Circle');
const Triangle = require('./lib/Triangle');
const Square = require('./lib/Square');

//creates a function to ask SVG questions
async function askSvgQuestions() {
    const svgQuestions = [
        {   
            //asks for letter input, ensures no more than 3 characters in length, and that everything is a letter character
            type: 'input',
            message: 'Please enter up to 3 characters',
            name: 'characters',
            validate: function(input) {
                const isValidLength = input.length <= 3;
                const isValidLetters = /^[a-zA-Z]+$/.test(input);
                
                if (!isValidLetters) {
                    return 'Please enter only letters';
                }

                if (!isValidLength) {
                    return 'Please only enter up to only 3 characters';
                }
                return true;
           },
        },
        {
            //asks for a font color to be entered
            type: 'input',
            message: 'Please enter a color for your font',
            name: 'font-color',
        },
        {
            //asks for a selection between three options, a circle, a square, or a triangle
            type: 'list',
            message: 'Please select a shape',
            name: 'shape',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            //asks for a color to be input for the shape fill
            type: 'input',
            message: 'Please enter a color for your shape',
            name: 'background-color',
        }
    ];
    
    //calls the inquirer prompt for the questions
    return inquirer.prompt(svgQuestions);
}

//this generates the SVG using the answers input into the file
function generateSVG(answers) {
    let svgContent = '';

    if (answers && answers.shape) {
        
        //ensures everything renders properly, and makes sure the entered text is converted to uppercase
        switch (answers.shape.toLowerCase()) {
            case 'circle':
                svgContent = new Circle(answers['background-color'], answers['characters'].toUpperCase(), answers['font-color']).render();
                break;
            case 'square':
                svgContent = new Square(answers['background-color'], answers['characters'].toUpperCase(), answers['font-color']).render();
                break;
            case 'triangle':
                svgContent = new Triangle(answers['background-color'], answers['characters'].toUpperCase(), answers['font-color']).render();
                break;
            default:
                console.error('Invalid shape selection');
                break;
    }

    // console logs to ensure everything renders   
    console.log('Color:', answers['background-color'])
    console.log('Shape:', answers.shape);
    console.log('SVG Content:', svgContent);

    } else {
        console.error('Shape not provided in answers');
    }

    
    return svgContent || '';
}

//creates the run function, and writes the answers to the file.
async function init() {
    const answers = await askSvgQuestions();
    console.log('Answers:', answers);

    const svgLogoContent = generateSVG(answers);
    console.log('Font Color:', answers['font-color']);
    console.log('SVG Logo Content: ', svgLogoContent);

    fs.writeFile('Logo.svg', svgLogoContent, (err) =>
    err ? console.log(err): console.log('Generated logo.svg')
    );

}
//runs the file
 init();