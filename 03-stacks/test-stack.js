const Stack = require('./Stack')

const numbers = new Stack();
numbers.push(421);
numbers.push(424);
numbers.push(500);
numbers.push(506);

while (numbers.peek()){
    let top = numbers.pop();
    console.log(top)
}