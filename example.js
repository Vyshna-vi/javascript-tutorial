function getNoOfLegs(x, y, z) {
  return 4 * x + 4 * y + 2 * z;
}
console.log(getNoOfLegs(2, 4, 6));
console.log(getNoOfLegs(2, 3, 2));
let num = getNoOfLegs(2, 2, 2);
console.log(num);

function plusfour(x) {
  return 4 + x;
}
console.log(plusfour(4));
console.log(plusfour(5));

function printSum(x, y) {
  return x + y;
}
console.log(printSum(4, 5));
console.log(printSum(4, 4));

function convertToMinutes(minute) {
  return minute * 60;
}
console.log(convertToMinutes(2));
console.log(convertToMinutes(4));

function convertToDays(year) {
  return "nmber of years=" + year * 365;
}
console.log(convertToDays(2));
console.log(convertToDays(4));

function getFootBallPoints(win, draw, lose) {
  return "Footballpoints= " + (win * 3 + draw * 1);
}
console.log(getFootBallPoints(2, 4, 5));
console.log(getFootBallPoints(3, 8, 6));

function printFirstLast(arr) {
  return [arr[0], arr[arr.length - 1]];
}
console.log(printFirstLast([1, 2, 3, 4]));
console.log(printFirstLast([4, 9, 7, "a"]));

function getCircleArea(radius) {
  return "area of circle =" + 3.14 * radius * radius;
}
console.log(getCircleArea(2));
console.log(getCircleArea(4));

function convertyStringToNumber(str) {
  return parseFloat(str);
}
console.log(convertyStringToNumber("6"));
console.log(convertyStringToNumber("8"));

function printPositonValue(arr, num) {
  return arr[num];
}
console.log(printPositonValue(["a", "b", "x"], 1));
console.log(printPositonValue(["w", "e", "g"], 2));
console.log(printPositonValue(["u", "s", "a"], 2));
console.log(printPositonValue(["u", "s", "a", "r", "i", "o", "j"], 6));
