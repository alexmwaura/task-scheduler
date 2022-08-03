// Create task scheduler
// loops
// ternary operators
// switch case statements
// functions
// Variables

// Pseudo Code
// USING IF / SWITCH CASE
// COMPARE USING OPERATORS TO MATCH DAYS WITH TASKS
// RETURN THE TASK

// let firstName = 'John'
// let lastName = 'Doe'

// let fullName = firstName + ' ' + lastName

// let greeting = `Hey ${fullName}, how are you doing`

// console.log(greeting)

const calendar = [
  'wake up',
  'brush teeth',
  'play fifa',
  'Go to sleep',
  'Go to the gym',
  'buy groceries',
  'Wajackoya campaign',
];

function ifTaskScheduler(currentDay) {
  if (currentDay === 'Monday') {
    return calendar[0];
  } else if (currentDay === 'Tuesday') {
    return calendar[1];
  } else if (currentDay === 'Wednesday') {
    return calendar[2];
  } else if (currentDay === 'Thursday') {
    return calendar[3];
  } else if (currentDay === 'Friday') {
    return calendar[4];
  } else {
    return 'Take a break';
  }
}

function switchTaskScheduler(currentDay) {
  switch (currentDay) {
    case 'Monday':
      return calendar[0];
    case 'Tuesday':
      return calendar[2];
    case 'Wednesday':
      return calendar[3];
    case 'Thursday':
      return calendar[4];
    default:
      return 'Take a break';
  }
}

console.log(switchTaskScheduler('Wednesday') )

// console.log(taskScheduler('Monday'));
// console.log(taskScheduler('Saturday'))
