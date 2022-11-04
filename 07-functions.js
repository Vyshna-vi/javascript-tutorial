function sayHello(){
    // console.log("hello")
}

sayHello()
sayHello()
sayHello()
sayHello()
sayHello()

function sayHelloToYou(x){
    // console.log("Hello"+x)
}
sayHelloToYou("Panda")
sayHelloToYou("Grizzly")

function printPlusFive(x){
    // console.log(x+5)
}
printPlusFive(8)
printPlusFive(10)

function printSum(x,y){
    // console.log(x+y)
}
printSum(5,6)
printSum(10,6)

//To Print birthyear
function printBirthYear(age){
    let a=2022-age
    // console.log("You are born in "+a)
    return a
}
printBirthYear(21)
printBirthYear(18)
printBirthYear(5)
let  year=printBirthYear(58)
// console.log(year)

//To Print Square of a number
function printSquare(num){
    // console.log(num*num)
}
printSquare(2)
printSquare(8)
printSquare(4)

//return function
function getSquare(num){
    return num*num
}
// console.log(getSquare(2));
//to find area of triangle
function getTriangleArea(bredth,height){
    return ("Area = "+(0.5*bredth*height))
}
console.log(getTriangleArea(5,5))
console.log(getTriangleArea(10,15))

function getBasketBallPoints(threepoints,twopoints,freethrow){
    return ("Total = "+((3*threepoints)+(2*twopoints)+freethrow))
}
console.log(getBasketBallPoints(8,25,15))
console.log(getBasketBallPoints(5,50,8))
let a=getBasketBallPoints
console.log(a(8,25,15))
