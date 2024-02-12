let students = [85, 97, 44, 37, 76, 60];

let sum = 0;

for(let marks of students){
    sum += marks;
}

let result = sum / students.length ;
console.log(`Avg marks of the class = ${result}`);