import axios from 'axios' // IF YOU INSTALLED AXIOS VIA npm
// IF YOU SIMPLY USED A SCRIPT TAG, NO IMPORT IS REQUIRED!!!!!!

console.log('1 About to fetch data with axios')

axios.get('https://lambda-times-api.herokuapp.com/FOOBAR')
  .then(res => {
    // future code, for when the data actually arrives
    // freedom to assume the future data is here (but ONLY here)
    console.log('2 here is the response organized by axios', res)
    console.log('here is the response BODY', res.data)
  })
  .catch(drama => {
    // handle the drama
    console.log(drama)
    debugger
  })

// if you want to handle several independent promises
// Promise.all([p1, p2, p3]).then([res1, res2, res3])

// the future data is NOT in this area of the program
console.log('3 We requested data with axios')

// Imports at the top of the file!
// We never nest imports inside blocks of code!


// 👉 TASK 1- Test out the following endpoints:

//     https://lambda-times-api.herokuapp.com/friends
//     https://lambda-times-api.herokuapp.com/friends/1
//     https://lambda-times-api.herokuapp.com/quotes
//     https://lambda-times-api.herokuapp.com/cards
//     https://lambda-times-api.herokuapp.com/breeds
//     https://dog.ceo/api/breeds/image/random

//    * With HTTPie (command-line tool)
//    * With Postman (tool with GUI)
//    * With Chrome
//    * With JS using the native fetch


// 👉 TASK 2- Select the "entry point", the element
// inside of which we'll inject our dog cards 
const entryPoint = null


// 👉 TASK 3- `dogCardMaker` takes an object and returns a Dog Card.
// Use this function to build a Card, and append it to the entry point.
function dogCardMaker({ imageURL, breed }) {

  // instantiating the elements
  const dogCard = document.createElement('div')
  const image = document.createElement('img')
  const heading = document.createElement('h3')
  // setting class names, attributes and text
  heading.textContent = `Breed: ${breed}`
  image.src = imageURL
  image.classList.add('dog-image')
  dogCard.classList.add('dog-card')
  // creating the hierarchy
  dogCard.appendChild(image)
  dogCard.appendChild(heading)
  // adding some interactivity
  dogCard.addEventListener('click', () => {
    dogCard.classList.toggle('selected')
  })
  // never forget to return!
  return dogCard
}


// 👉 TASK 4- Bring the Axios library into the project using one of two methods:
//    * Traditional way: put another script tag inside index.html (`https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js`)
//    * Proyects with npm: install it with npm and import it into this file


// 👉 TASK 5- Fetch dogs from `https://dog.ceo/api/breed/{breed}/images/random/{number}`
//    * ON SUCCESS: use the data to create dogCards and append them to the entry point
//    * ON FAILURE: log the error to the console
//    * IN ANY CASE: log "done" to the console


// 👉 (OPTIONAL) TASK 6- Wrap the fetching operation inside a function `getDogs`
// that takes a breed and a count (of dogs)


// 👉 (OPTIONAL) TASK 7- Put a button in index.html to 'get dogs' and add a click
// event listener that executes `getDogs`


// 👉 (OPTIONAL) TASK 8- Import the breeds from `breeds.js`
// or request them from https://lambda-times-api.herokuapp.com/breeds
// and loop over them, fetching a dog at each iteration
