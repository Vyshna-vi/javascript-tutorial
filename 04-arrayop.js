//array is mutable
let a=["panda",1,true,undefined,"vyshnavi","santhosh"]
console.log(a.length);//to find the length.
console.log(a[2]);//to get the objech in position 2.
console.log(a[4][7])//to get a character from array.
let b=["bears","grizzly",1,true,"panda"];
b[0]="icebear";//icebear is replaced in 0th position.
console.log(b)
let c=[1,true,undefined,"bears",["pandas","icebear","grizzly"]];
console.log(c);
console.log(c[4][0][4]);
let x=["pandas","icebears","grizzly"];
console.log(x);
x.push("mickeymon");//mickeymon is added to the last position of x.
console.log(x);
let y=["pandas","icebears","grizzly",["mickeymon","jerry"]];
y[3].push("tom");//tom is added to the last position inside the y.
console.log(y);
y[3].pop();//item is deleted from the last position.
console.log(y);
y[3].unshift("tom");//item is added to the first position.
console.log(y);
y[3].shift()//item is deleted from the front.
console.log(y);
let d=["x","y","z"];
let z=d.join("")//join elements without comas or space.
console.log(z);