if (true) {
  console.log("if is working");
} else {
  console.log("if is not working");
}

function gtHundred(num) {
  if (num > 100) {
    return true;
  } else {
    return false;
  }
}
// console.log(gtHundred(101));
// console.log(gtHundred(89));

function oddOrEven(num) {
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}
// console.log(oddOrEven(4));
// console.log(oddOrEven(5));

function oddOrEvenOrZero(num) {
  if (num == 0) {
    return "zero";
  } else if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(oddOrEvenOrZero(0));
console.log(oddOrEvenOrZero(4));

function oddOrEvenInt(num) {
  if (num == 0) {
    return "Nmuber Is Zero";
  } else if (num % 2 == 0) {
    if (num < 0) {
      return "Negative even Number";
    } else {
      return "Positive even Nmuber";
    }
  } else {
    if (num < 0) {
      return "Negative odd number";
    } else {
      return "Positive odd Number";
    }
  }
}
console.log(oddOrEvenInt(4));
console.log(oddOrEvenInt(-4));
console.log(oddOrEvenInt(5));
console.log(oddOrEvenInt(-5));
console.log(oddOrEvenInt(0));

//or operator
function chechArray(arr) {
  if (arr[0] == 0 || arr.length <= 5) {
    return true;
  } else {
    return false;
  }
}
console.log(chechArray([0, 1, 2, 3]));
console.log(chechArray([0, 1, 2, 3, 4]));
console.log(chechArray([0, 1, 2, 3, 4, 5, 6]));
console.log(chechArray([1, 2, 3]));

//and operator
function chechArray(arr) {
  if (arr[0] == 0 && arr.length <= 5) {
    return true;
  } else {
    return false;
  }
}
console.log(chechArray([0, 1, 2, 3]));
console.log(chechArray([0, 1, 2, 3, 4]));
console.log(chechArray([0, 1, 2, 3, 4, 5, 6]));
console.log(chechArray([1, 2, 3]));

function barTender(year) {
  if (2022 - year >= 21) {
    return "chears";
  } else {
    return "out";
  }
}
console.log(barTender(2007));
console.log(barTender(2000));
