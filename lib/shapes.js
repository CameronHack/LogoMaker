class Shape {
    constructor(fill = 'blue') {
        this.fill = fill;
    }
}

class Circle extends Shape {
    constructor(fill) {
        super(fill)
    }

    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.fill}" />`
    }
}

class Square extends Shape {
    constructor(fill) {
        super(fill)
    }

    render() {
        return `<rect width="100%" height="100%" fill="${this.fill}" />`
    }
}

class Triangle extends Shape {
    constructor(fill) {
        super(fill)
    }

    render() {
        return `<polygon points="150,0 300,300 0,300" fill="${this.fill}" />`
    }
}


module.exports = {Circle, Square, Triangle}