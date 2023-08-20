const {Circle, Square, Triangle} = require('./shapes.js')

test('should create a red circle', () => {
    const testShape = new Circle('red')
    expect(testShape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="red" />')
});

test('should create a blue square', () => {
    // empty to test for default 'blue'
    const testShape = new Square()
    expect(testShape.render()).toEqual('<rect width="100%" height="100%" fill="blue" />')
});

test('should create a green triangle', () => {
    const testShape = new Triangle('green')
    expect(testShape.render()).toEqual('<polygon points="150,0 300,300 0,300" fill="green" />')
});