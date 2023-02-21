const doubleIt = number => number * 2;

const array1 = [1, 2, 3, 4, 5];
const makeDouble = array1.map(doubleIt);
console.log(makeDouble);

const array2 = [1, 2, 3, 4, 5];
const makeFiveTimes = array2.map(x => x * 5);
console.log(makeFiveTimes);

const makeThreeTimes = [3, 4, 5, 6, 7].map(x => x * 3);
console.log(makeThreeTimes);

const students = [
    { name: "Shifat", id: 3240, department: 'CSE' },
    { name: "Rashed", id: 3241, department: 'CSE' },
    { name: "Shahriar", id: 3242, department: 'EEE' }
]

const studentList = students.map(s => s.name);
console.log(studentList);