// Variable temporarily stores user's inputted age and day of the week
let age = 0
let day = 0

// Connect "Find Out" button to "findOut" function
document.getElementById('button').addEventListener('click', findOut)

function findOut () {
  // Stores the user's age and converts it into an integer
  age = document.getElementById('age').value
  age = parseInt(age)
  day = document.getElementById('day').value
  // Program determines if user is eligable for student pricing
  if ((day === 'Tuesday' || day === 'Thursday') || (age > 12 && age < 21))  {  document.getElementById('text').innerHTML =  'You\'re eligible for student pricing!'
  } else {
  document.getElementById('text').innerHTML = 'You must pay regular price'
}
    }
    