const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/Circle');
const Triangle = require('./lib/Triangle');
const Square = require('./lib/Square');
const Shapes = require('./lib/shapes');

async function askSvgQuestions() {
    const svgQuestions = [
        {
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
            type: 'input',
            message: 'Please enter a color for your font',
            name: 'font-color',
        },
        {
            type: 'list',
            message: 'Please select a shape',
            name: 'shape',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            type: 'input',
            message: 'Please enter a color for your shape',
            name: 'background-color',
        }
    ];
    
   return inquirer.prompt(svgQuestions);
}

function generateSVG(answers) {
    let svgContent = '';

    if (answers && answers.shape) {
    switch (answers.shape.toLowerCase()) {
        case 'circle':
            svgContent = new Circle(answers['background-color'], answers['characters'], answers['font-color']).render();
            break;
        case 'square':
            svgContent = new Square(answers['background-color'], answers['characters'], answers['font-color']).render();
            break;
        case 'triangle':
            svgContent = new Triangle(answers['background-color'], answers['characters'], answers['font-color']).render();
            break;
        default:
            console.error('Invalid shape selection');
            break;
    }

    console.log('Color:', answers['background-color'])

    console.log('Shape:', answers.shape);
    console.log('SVG Content:', svgContent);

    } else {
        console.error('Shape not provided in answers');
    }

    
    return svgContent || '';
}

async function init() {
    const answers = await askSvgQuestions();
    console.log('Answers:', answers);

    const svgLogoContent = generateSVG(answers);
    console.log('SVG Logo Content: ', svgLogoContent);

    fs.writeFile('Logo.svg', svgLogoContent, (err) =>
    err ? console.log(err): console.log('Generated logo.svg')
    );

}
 init();