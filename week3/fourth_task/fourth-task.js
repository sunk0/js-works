let myNum = Math.round(Math.random() * 1000);
let early = true;
let age = 18;

if(early && age >= 18){
console.log(myNum + 1000);
console.log(`Race starts at 9:30 am. Your Number is ${myNum};`);
}
else if(!early && age >=18){
    console.log(`Race starts at 11:00 am. Your Number is ${myNum};`);
}
else if(age < 18){
    console.log(`Race starts at 12:30 am. Your Number is ${myNum};`);
}
else{
    console.log(`Please see the registration desk`);
}
