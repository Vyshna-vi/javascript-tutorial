function printUpToFive() {
  let a = 1;
  while (a <= 5) {
    console.log(a);
    a++;
  }
}
printUpToFive();

function printUpTo(num) {
  let a = 1;
  while (a <= num) {
    console.log(a);
    a++;
  }
}
printUpTo(6);

function printUpToDo(num) {
  let a = 1;
  do {
    console.log(a);
    a++;
  } while (a <= num);
}
printUpToDo(5);

function printUpToFor(num) {
  for (a = 0; a <= num; a++) {
    console.log(a);
  }
}
printUpToFor(6);

function printFrom(num) {
  for (i = num; i >= 1; i--) {
    console.log(i);
  }
}
printFrom(8);

function printArray(arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printArray(["a", "b", "c"]);
