// Object destructuring

// const person = {
//     name: 'Boris',
//     age: 45,
//     location: {
//         city: 'Reston',
//         temp: 38
//     }
// };


// const { name: firstName = 'Anynymous', age} = person;

// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It is ${temperature} in ${city}.`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

// Array destructuring

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [,, state = 'New York'] = address;

// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [itemName, , medium] = item;

console.log(`A medium ${itemName} costs ${medium}`);
