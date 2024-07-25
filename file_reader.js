const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
function readFile(filename) {
  return fs.readFile(filename, 'utf-8');
}

let firstName, lastName, age, hobbies;

readFile('firstname.txt')
  .then(data => {
    firstName = data.trim();
    return readFile('lastname.txt');
  })
  .then(data => {
    lastName = data.trim();
    return readFile('age.txt');
  })
  .then(data => {
    age = data.trim();
    return readFile('hobbies.txt');
  })
  .then(data => {
    hobbies = data.trim().split(',');
    const hobby1 = hobbies[0].trim().replace(/"/g, '');
    const hobby2 = hobbies[1].trim().replace(/"/g, '');
    console.log(`${firstName} ${lastName} is ${age} years old and his hobbies are ${hobby1.toString} and ${hobby2.toString}`);
  })
  .catch(error => {
    console.log(error);
  });

// ASYNC/AWAIT SOLUTION BELOW THIS LINE

async function readFiles() {
  try {
    const firstName = (await fs.readFile('firstname.txt', 'utf-8')).trim();
    const lastName = (await fs.readFile('lastname.txt', 'utf-8')).trim();
    const age = (await fs.readFile('age.txt', 'utf-8')).trim();
    const hobbies = (await fs.readFile('hobbies.txt', 'utf-8')).trim().split(',');

    const hobby1 = hobbies[0].trim().replace(/"/g, '');
    const hobby2 = hobbies[1].trim().replace(/"/g, '');

    console.log(`${firstName} ${lastName} is ${age} years old and his hobbies are ${hobby1} and ${hobby2}`);
  } catch (error) {
    console.error(error);
  }
}

readFiles();