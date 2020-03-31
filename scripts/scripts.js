
/**  edabit: Triangular Number Sequence 
  * This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are: 1, 3, 6, 10, 15. Write a function that converts n number of places with its corresponding number.

Examples
triangle(1) ➞ 1

triangle(6) ➞ 21

triangle(215) ➞ 23220
 //SOLUTION*/

function triangle(n) {
	return n*(n+1)/2;
}

/*edabit: Make a Circle with OOP
Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two getters getArea() (PIr^2) and getPerimeter() (2PI*r) which give both respective areas and perimeter (circumference).

For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.

Examples
let circy = new Circle(11);
circy.getArea();

// Should return 380.132711084365

let circy = new Circle(4.44);
circy.getPerimeter();

// Should return 27.897342763877365

//*SOLUTION */

class Rectangle {
  constructor(sideA,sideB){
    this.sideA = sideA;
    this.sideB = sideB;
  }
  getArea(){return this.sideA*this.sideB};
  getPerimeter(){return (this.sideA + this.sideB) *2 };
}


class Circle {
	constructor(r){
    this.radius = r;
  }
   getArea(){return Math.PI * (this.radius*this.radius)}
  getPerimeter(){return Math.PI * 2 * this.radius}
}

// Citation : https://www.w3resource.com/javascript-exercises/javascript-object-exercise-9.php

/**Edabit: Array of Multiples
 * Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

Examples
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
Notes
Notice that num is also included in the returned array.
 * 
 //SOLUTION*/

function arrayOfMultiples (num, length) {
	var container = 0;
	var container1 = [];

	for (var i=0; i<length; i++) {
	container = container + num;
	container1.push(container);
	}
	return container1;
}
// Citation:https://stackoverflow.com/questions/54193060/javascript-function-for-finding-multiples-of-a-number

