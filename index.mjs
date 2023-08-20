import fs from 'fs';
import SVG from './lib/svg.js';
import inquirer from 'inquirer';

let {title, textColor, logoShape, shapeColor} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "Enter logo text max 3 characters",
        },
        {
            type: 'input',
            name: 'textColor',
            message: "What color do you want your text ex. 'red' 'blue' green'",
        },
        {
            type: 'list',
            name: 'logoShape',
            message: "what shape do you want",
            choices: [
                'circle',
                'square',
                'triangle'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: "What color do you want your shape background ex. 'red' 'blue' green'",
        },
    ])



let newLogo = new SVG(title, textColor, logoShape, shapeColor)

// allows the user to make multiple logos that store in the output folder
fs.readdir('./output', (err, outputFolder) => {
    if (err) {
        console.log(err)
    } else {
        let logoFilePath = `./output/Logo${outputFolder.length += 1}.svg`
        fs.writeFile(logoFilePath, newLogo.render(), (err) => {
            if(err) {
                console.log(err)
            } else {
                console.log(`Generated Logo${outputFolder.length}.svg in the output folder!`)
            }
        })
    }
});
