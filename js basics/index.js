console.log('Hello, world!');
var name_ak=function(){
    console.log(8+5*48+62);
};
name_ak();
// variable naming rules :- connot be a reserved keyword, should be meaningful, cannot start with a number, cannot contain a space or hyphen(-), are case-sensitive
// use camelCase for variable naming
let a,b;
a=1;
b=3;
console.log(a+b);



// in built Objects
// 1. Math object
let x=Math.random();
console.log(x*10);
let y=Math.round(x*10);
console.log(y);
let z=Math.ceil(x*10);
console.log(z);
let w=Math.floor(x*10);
console.log(w);
let p=Math.max(1,2,3,4,5,6,7,80,9,10);
console.log(p);

// 2.string object
let str='Hello, world!';
console.log(str.length);
let str1=str.toUpperCase();
console.log(str1);
console.log(str1.toLowerCase());
console.log(str1.indexOf('world'));
console.log(str1.lastIndexOf('world'));
console.log(str1.slice(0,5));
console.log(str1.substring(0,5));
console.log(str1.substr(0,5));
console.log(str1.replace('world','Akshay'));
console.log(str1.includes('world'));
str1=str1.replace('world','Akshay');
console.log(str1);

// place holder
let name='Akshay';
let age=21;
let sentence=`My name is ${name} and I am ${age} years old.`;
console.log(sentence);

// 3. Date object
let date=new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getTime());
console.log(date.getMonth());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
let date1=new Date('2021-12-25');
console.log(date1);

// 4. Array object
let arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr);
console.log(arr.length);
arr.push(201,'akki');
console.log(arr);
console.log(arr[5]);
arr.unshift(202,'akshay');
console.log(arr);
arr.splice(2,0,203,'akshay');
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
console.log(arr.indexOf(99));//bad practice
console.log(arr.includes(9));//good practice
let courses=[
    {no:1,name:'akshay'},
    {no:2,name:'akki'},
]
console.log(courses);
console.log(courses.indexOf({no:1,name:'akshay'}));
console.log(courses.includes({no:1,name:'akshay'}));
// in case of reference type, it will not work
// in case of primitive type, it will work
// in case of reference we will use call back function
console.log(courses.find(function(course){
    return course.name==='akshay';
}));
// arrow function
console.log(courses.find(couse=>couse.name=='akki'));
console.log(courses.findIndex(couse=>couse.name==='akshay'));
// removing elements
let numbers=[1,2,3,4,5,6,7,8,9,10];
let last=numbers.pop();
console.log(numbers);
let first=numbers.shift();
console.log(numbers);
numbers.splice(2,3);
console.log(numbers);
let middle=numbers.splice(2,3);
console.log(numbers);

//emptying an array
let num=[1,2,3,4,5,6,7,8,9,10];
let another=num;
num.splice(0,num.length);
//num.length=0;// this is way to empty an array
console.log(another);

// combining and slicing an array
let first1=[1,2,3];
let second=[4,5,6];
let combined=first1.concat(second);
console.log(combined);
let slice=combined.slice(2,4);
console.log(slice);

// spread operator
let first2=[1,2,3];
let second2=[4,5,6];
let combined1=[...first2,'a',...second2];
console.log(combined1);
let copy=combined1.slice();
console.log(copy);
let copy1=[...combined1];
console.log(copy1);

// iterating an array
let num1=[1,2,3,4,5,6,7,8,9,10];   
for(let number of num1){
    console.log(number);
}  
num1.forEach(function(number){
    console.log(number);
});
num1.forEach(number=>console.log(number));
num1.forEach((number,index)=>console.log(index,number));

// joining an array
let num2=[1,2,3,4,5,6,7,8,9,10];
let joined=num2.join(',');
console.log(joined);
let message='This is my first message';
let parts=message.split(' ');
console.log(parts);
let combined2=parts.join('_');
console.log(combined2);

// sorting an array
let num3=[10,20,60,80,30,40,50,70,90,100];
console.log(num3);
num3.reverse();
console.log(num3);

//mapping with object
let numbers1=[1,2,3,4,5,6,7,8,9,10];
let filtered=numbers1.filter(n=>n>=5);
let items=filtered.map(function(n){
    return {value:n};
});
console.log(items);
items=numbers1.filter(n=>n>5).map(n=>({value:n}));
console.log(items);



