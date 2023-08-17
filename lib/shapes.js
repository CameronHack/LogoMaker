

class Shape {
    constructor(fill = 'green') {
        this.fill = fill;
    }

    setcolor() {

    }
}

class Circle extends Shape {
    constructor() {
        super(fill, radius)
        this.radius = radius
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.fill}" />`
    }
}

class Square extends Shape {

}

class Triangle extends Shape {

}