let grade = prompt("grade");

if(grade >= 90 && grade <= 100){
    console.log("Your Grade is A");
} else if(grade >= 70 && grade <= 89){
    console.log("Your Grade is B");
} else if(grade >= 60 && grade <= 69){
    console.log("Your Grade is C");
} else if(grade >= 50 && grade >= 59){
    console.log("Your Grade is D");
}else{
    console.log("Your Grade is F")
}