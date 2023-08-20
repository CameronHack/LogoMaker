const {Circle, Square, Triangle} = require('./shapes.js')

class SVG {
    constructor(title, textColor, logoShape, shapeColor) {

        this.title = title

        this.textColor = textColor

        if (logoShape === 'circle') {
            this.shape = new Circle(shapeColor, '80');
        } else if (logoShape === 'square') {
            this.shape = new Square(shapeColor);
        } else if (logoShape === 'triangle') {
            this.shape = new Triangle();
        }

        this.shapeColor = shapeColor
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

${this.shape.render()}

<text x="200" y="250" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.title}</text>
        
</svg>`
    }
}

module.exports = SVG
