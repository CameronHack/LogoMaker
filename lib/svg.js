const {Circle, Square, Triangle} = require('./shapes.js')

class SVG {
    constructor(title, textColor, logoShape, shapeColor) {

        this.title = title

        this.textColor = textColor

        if (logoShape === 'circle') {
            this.shape = new Circle(shapeColor);
        } else if (logoShape === 'square') {
            this.shape = new Square(shapeColor);
        } else if (logoShape === 'triangle') {
            this.shape = new Triangle(shapeColor);
        }

        this.shapeColor = shapeColor
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${this.shape.render()}

    <text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.title}</text>
        
</svg>`
    }
}

module.exports = SVG
