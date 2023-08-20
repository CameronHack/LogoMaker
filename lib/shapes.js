

class Shape {
    constructor(fill = 'blue') {
        this.fill = fill;
    }

    setcolor() {

    }
}

class Circle extends Shape {
    constructor(fill, radius) {
        super(fill)
        this.radius = radius
    }

    render() {
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.fill}" />`
    }
}

class Square extends Shape {
    constructor() {
        super(fill)
    }

    render() {
        return `<rect width="100%" height="100%" fill="${this.fill}" />`
    }
}

class Triangle extends Shape {
    constructor() {
        super(fill)
    }

    render() {
        return `<polygon points="200,0 400,400 0,400" fill="${this.fill}" />`
    }
}



module.exports = {Shape, Circle, Square, Triangle}