let numbers = [2,3,4,5,3,2];

numbers.forEach((num)=>{
    console.log(num);
});



let num = [1,2,3,4,5,6];

let num2 = numbers.concat(num);
//sorting
num2 = num2.sort();

console.log(num2);
//length

let length_of_an_array = num2.length;
console.log("length of an array is "+ length_of_an_array);



//slicing 
num2 = num2.slice(2,5);
console.log(num2);
