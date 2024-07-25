const { json } = require("node:stream/consumers");

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
    hobbies = JSON.parse(data.trim());
    let hobby1 = hobbies[0];
    let hobby2 = hobbies[1];
    console.log(`${firstName} ${lastName} is ${age} years old and his hobbies are ${hobby1} and ${hobby2}`);
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

    hobbiesjson = JSON.parse(hobbies);
    let hobby1 = hobbiesjson[0];
    let hobby2 = hobbiesjson[1];

    console.log(`${firstName} ${lastName} is ${age} years old and his hobbies are ${hobby1} and ${hobby2}`);
  } catch (error) {
    console.error(error);
  }
}

readFiles();