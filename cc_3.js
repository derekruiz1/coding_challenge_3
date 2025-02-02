// Task 1 
let prices = [70, 250, 1000, 25,150]; //Original Array
prices.push(35); //Adds 35 to the array
let updatedPrice = prices.slice(1); //Removes First Price
console.log(updatedPrice); 

//Task 2
let numbers = [13, 27, 10, 8, 36]; //Original Array
numbers[2] += 5; //Adding 5 to the Third Number in the array
let total = numbers.reduce((sum, numbers) => sum + numbers,0); //Adding up the numbers
console.log(numbers);
console.log(total);

// Task 3
let employee = {
    name: "Abel",
    role: "Manager",
    performanceScore: 92,
    isActive: true
}; //Employee Information

employee.performanceScore = 98 //Updated performance score
employee.promotionEligible = true //Added new property

console.log(employee);

//Task 4
let feedback = [{
   
    name: "Luka",
    feedbackText: "Very good!",
    rating: 9,
},
{
    name: "Anthony",
    feedbackText: "It was really bad.",
    rating: 2,
},
{
    name: "Taylor",
    feedbackText:"It was ok.",
    rating: 5
}]; //Creating the array with feedback

feedback.push ({
    name: "Pedro",
    feedbackText: "I LOVED IT!",
    rating: 10
}); //Adding more feedback

console.log(feedback);
