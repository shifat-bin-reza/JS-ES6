const students = [
    { name: "Shifat", id: 3240, department: 'CSE', balance: 200000 },
    { name: "Rashed", id: 3241, department: 'CSE', balance: 80000 },
    { name: "Shahriar", id: 3242, department: 'EEE', balance: 350000 }
]

const balance = students.filter(student => student.balance > 100000);
console.log(balance);