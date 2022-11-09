function checkNumber(num) {
  switch (num) {
    case 1:
      return "One";
      break;
    case 2:
      return "Two";
      break;
    case 3:
      return "Three";
      break;
    case 4:
      return "Four";
      break;
    case 5:
      return "Five";
      break;
    default:
      return "Not In The Range";
  }
}
console.log(checkNumber(1));
console.log(checkNumber(2));
console.log(checkNumber(3));
console.log(checkNumber(4));
console.log(checkNumber(5));
console.log(checkNumber(6));
console.log(checkNumber(0));

function printDay(num) {
  switch (num) {
    case 0:
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    default:
      console.log("Invalid day");
  }
}
printDay(0);
printDay(1);
printDay(2);
printDay(3);
printDay(4);
printDay(5);
printDay(6);
printDay(7);

function customMessage(message) {
  message = message.toLowerCase();
  switch (message) {
    case "hi":
      console.log("Hi there,Big Offers Are Waiting For You.");
      break;
    case "offer":
    case "offers":
      console.log(
        "Here Are Some Amazing Offer Are Waiting for You.(iphone 14 is available 50000)"
      );
      break;
    case "customercare":
      console.log("Customer Care Number : 9876543210");
      break;
    default:
      console.log(
        "Contact on customer care number:9876543210 for more details"
      );
  }
}
customMessage("hi");
customMessage("customercare");
customMessage("offer");
customMessage("offers");
customMessage("cod");
customMessage("HI");
customMessage("Hi");

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      s = num1 + num2;
      console.log("the sum is =" + s);
      break;
    case "-":
      s = num1 - num2;
      console.log("the difference is =" + s);
      break;
    case "*":
      s = num1 * num2;
      console.log("The product is =" + s);
      break;
    case "/":
      s = num1 / num2;
      console.log("The Quotient is =" + s);
      break;
  }
}
calculator(2, 3, "+");
calculator(20, 10, "/");
calculator(9, 2, "-");
calculator(2, 30, "*");

function countMonthDays(month) {
  switch (month) {
    case "Januvary":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      console.log("There are 31 Days");
      break;
    case "February":
      console.log("There are 28 days");
      break;
    case "April":
    case "June":
    case "September":
    case "November":
      console.log("Ther are 30 days");
      break;
    default:
      console.log("invalid month");
  }
}
countMonthDays("July");
countMonthDays("June");
countMonthDays("February");
countMonthDays();

function wishMe(birthday) {
  today = 9;
  if (birthday == today) {
    return "Happy Birthday To You";
  } else if (birthday > today) {
    return birthday - today + " day to your birthday";
  } else {
    return "Wish You in Next Year";
  }
}
console.log(wishMe(9));
console.log(wishMe(3));
console.log(wishMe(25));
