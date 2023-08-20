const fs = require('fs')
let SVG = require('./lib/svg')

let newShape = new SVG()

fs.writeFile(`./output/Logo.svg`, newShape.render(), (err) => {
    if(err) [
        console.log(err)
    ]
})