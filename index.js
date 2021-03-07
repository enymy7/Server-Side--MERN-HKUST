const rect = require("./rectangle");

function solveRect(l, b) {
  console.log("Solving the rectangle with length:" + l + " and breadth: " + b);
  if (l <= 0 || b <= 0) {
    console.log("Rectangle dimensions should be greather than zero:");
  } else {
    console.log("The area of a rectangle is " + rect.area(l, b));
    console.log("The perimeter of the rectangle is: " + rect.perimeter(l, b));
  }
}

solveRect(2, 3);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);
