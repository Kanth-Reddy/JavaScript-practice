let n = prompt("Enter the number ");

let arr = [];
for(let i=1; i<=n; i++){
    arr[i-1] = i;
}

console.log(arr);

let sumArr=arr.reduce((res, curr) => {
    return res + curr;
})

console.log(sumArr);

let mulArr = arr.reduce((res, curr) =>{
    return res * curr;
})

console.log(mulArr);