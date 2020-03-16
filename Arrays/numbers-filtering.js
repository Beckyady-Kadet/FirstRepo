let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let evenNumbers = numbers.filter(e => e % 2 === 0

)
 console.log(evenNumbers);



 //4. Give the below array of object:

 const userScore = [  
    {id: 1, name: 'Olarike', score: 34},  
    {id: 2, name: 'Taiwo', score: 12},  
    {id: 3, name: 'Kehinde', score: 27} ];


// Find where user score above 12 and return the user info.

let aboveTwelve = userScore.filter(e => e.score > 12)
console.log(aboveTwelve)

// Sort the array in descending order based on the user score.
 userScore.sort(function (a,b) {
     return b.score - a.score
 })

console.log(userScore)

// Loop through the array after sort and return the each user. Note your position should start at 1.

for (index = 1; index < userScore.length; index++) { 
    console.log(userScore[index]); 
} 

// Sum the total score of the user in the array.

let total = userScore.map(i => i.score).reduce((prev, next) => prev + next);

console.log("The sum of all scores is " + total)

// Merge the below array to the userScore array above:

userScore.push(
    {id: 5, name: 'wale', score: 34},  
    {id: 6, name: 'wole', score: 12},  
    {id: 4, name: 'bobby', score: 27}
)

console.log(userScore)

//or can use spread annotation
const oldScore = [
    {id: 1, name: 'Olarike', score: 34},  
    {id: 2, name: 'Taiwo', score: 12},  
    {id: 3, name: 'Kehinde', score: 27}
]

const newScore = [
    {id: 5, name: 'wale', score: 34},  
    {id: 6, name: 'wole', score: 12},  
    {id: 4, name: 'bobby', score: 27}
]

const allScores = [...oldScore, ...newScore]
console.log(allScores);

//or you can concatenates the arrays together

const allScore = oldScore.concat(newScore)
console.log(allScore)
