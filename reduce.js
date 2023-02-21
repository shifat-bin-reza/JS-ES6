const array = [1, 2, 3, 4, 5];
const sum = array.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current;
}, 0)

console.log('Sum is ' + sum);