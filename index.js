const fs = require('fs')
// const inquirer = require('inquirer');
let SVG = require('./lib/svg')

// inquirer
//     .prompt([
//         {
//             type: 'list',
//             name: 'logoShape',
//             message: "what shape do you want",
//             choices: [
//                 'circle',
//                 'square',
//                 'triangle'],
//         },
//         {
//             type: 'input',
//             name: 'title',
//             message: "Enter logo text",
//         },
//         {
//             type: 'input',
//             name: 'shapeColor',
//             message: "What color do you want your shape background",
//         },
//         {
//             type: 'input',
//             name: 'textColor',
//             message: "What color do you want your text",
//         },
//     ])
//     .then((answers) => {
//         const { logoShape, title, shapeColor, textColor } = answers;
//     })
//     .catch((err) => {
//         if (err) {
//             console.log(err)
//         }
//     });



let newShape = new SVG()

fs.writeFile(`./output/Logo.svg`, newShape.render(), (err) => {
    if(err) {
        console.log(err)
    }
})