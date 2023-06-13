//BLOCK 14 WORKSHOP: LOOPS AND ARRAYS

//ONLY ODDS Psuedocode
//1. Use for loop to find odd number in array
//2. Make new array filtering in odd numbers 
const numArray1 = [2, 4, 6, 8, 11, 20, 15, 22];
const odds1 = numArray1.filter((i) => i % 2 === 1);
console.log(odds1);

const numArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const odds2 = numArray2.filter((i) => i % 2 === 1);
console.log(odds2);

const numArray3 = [70, 42, 55, 81, 21, 91, 34];
const odds3 = numArray3.filter((i) => i % 2 === 1);
console.log(odds3);

const numArray4 = [2, 4, 6, 8, 10, 11, 12];
const odds4 = numArray4.filter((i) => i % 2 === 1);
console.log(odds4);


//VOWELS VS. CONSONANT Psuedocode
//1. Instantiate string
//2. Define int vowel count var and run iteration to count vowels
//3. Derrive consonant count from string length - vowl count
//4. Formulate output using both variables created
const str1 = "hello";
let vowels1 = 0;
for (i = 0; i <str1.length; i++) {
    if(str1[i] === "a" || str1[i] === "e" || str1[i] === "i" || str1[i] === "o" || str1[i] === "u"){
        vowels1++;
    }
}
let cons1 = str1.length - vowels1;
console.log(str1 + " has " + cons1 + " consonants and " + vowels1 + " vowels.")


const str2 = "ukelele";
let vowels2 = 0;
for (i = 0; i <str1.length; i++) {
    if(str2[i] === "a" || str2[i] === "e" || str2[i] === "i" || str2[i] === "o" || str2[i] === "u"){
        vowels2++;
    }
}
let cons2 = str2.length - vowels2;
console.log(str2 + " has " + cons2 + " consonants and " + vowels2 + " vowels.")


const str3 = "awesome";
let vowels3 = 0;
for (i = 0; i <str1.length; i++) {
    if(str3[i] === "a" || str3[i] === "e" || str3[i] === "i" || str3[i] === "o" || str3[i] === "u"){
        vowels3++;
    }
}
let cons3 = str3.length - vowels3;
console.log(str3 + " has " + cons3 + " consonants and " + vowels3 + " vowels.")


const str4 = "onomatopoeia";
let vowels4 = 0;
for (i = 0; i <str1.length; i++) {
    if(str4[i] === "a" || str4[i] === "e" || str4[i] === "i" || str4[i] === "o" || str4[i] === "u"){
        vowels4++;
    }
}
let cons4 = str4.length - vowels4;
console.log(str4 + " has " + cons4 + " consonants and " + cons4 + " vowels.")


const str5 = "textbook";
let vowels5 = 0;
for (i = 0; i <str1.length; i++) {
    if(str5[i] === "a" || str5[i] === "e" || str5[i] === "i" || str5[i] === "o" || str5[i] === "u"){
        vowels5++;
    }
}
let cons5 = str5.length - vowels5;
console.log(str5 + " has " + cons5 + " consonants and " + vowels5 + " vowels.")


//REVERSE ARRAY Psuedocode
//1. Instantiate exmaple array
//2. Defint i as 0 for start of array
//3. Define j as last index of array
//4. Use a for loop to go through midway point of array  while increasing i and decreasing j
//5. Use a temp array to assign values from original array to reversed array until midpoint is reached
//6. Print result

const arr1 = [1,2,3];
i = 0;
j = arr1.length-1;
for (i = 0; i < arr1.length/2;i++,j--){
    temp = arr1[i];
    arr1[i] = arr1[j];
    arr1[j] = temp;
}
console.log(arr1);

const arr2 = [1, 3, 5, 7, 9, 11];
i = 0;
j = arr2.length-1;
for (i = 0; i < arr2.length/2;i++,j--){
    temp = arr2[i];
    arr2[i] = arr2[j];
    arr2[j] = temp;
}
console.log(arr2);

const arr3 = [20, 50, 30, 60, 200];
i = 0;
j = arr3.length-1;
for (i = 0; i < arr3.length/2;i++,j--){
    temp = arr3[i];
    arr3[i] = arr3[j];
    arr3[j] = temp;
}
console.log(arr3);

const arr4 = [1, -1, 2, -3, 5, -8, 13];
i = 0;
j = arr4.length-1;
for (i = 0; i < arr4.length/2;i++,j--){
    temp = arr4[i];
    arr4[i] = arr4[j];
    arr4[j] = temp;
}
console.log(arr4);

//FizzBuzz Problem
//1. For loop to go through numbers 1-100
//2. If number is  divisible by 3, print Fizz
//3. If numbers is divisible by 5, print Buzz
//4. If number is divisible by 15, print FizzBuz

for (i=1; i<=100; i++) {
    if (i % 3 === 0){
        console.log('Fizz');
    }
    else if (i % 3 === 0){
        console.log('Fizz');
    }
    else if (i % 3 === 0){
        console.log('Fizz');
    } else {
        console.log(i);
    }
}