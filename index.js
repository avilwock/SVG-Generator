const inquirer = require('inquirer');

async function askSvgQuestions() {
    const svgQuestions = [
        {
            type: 'input',
            message: 'Please enter up to 3 characters',
            name: 'characters',
            validate: function(input) {
                const isValidLength = input.length > 3;
                const isValidLetters = /^[a-zA-Z]+$/.test(input);
                
                if (!isValidLetters) {
                    return 'Please enter only letters';
                }

                if (!isValidLength) {
                    return 'Please only enter up to only 3 characters';
                }
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
            choices: ['circle', 'square', 'triangle'],
        },
        {
            type: 'input',
            message: 'Please enter a color for your shape',
            name: 'background-color',
        }

    ]
    const answers = await inquirer.prompt(svgQuestions);
    console.log('Answers', answers);
}

askSvgQuestions();
