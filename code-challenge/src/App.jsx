import React from 'react'


//filter thru an arr of words to find anagrams of a given targeted word

function isAnagram(word1, word2) {
  // Helper function to check if two words are anagrams
  const sortedWord1 = word1.split('').sort().join('');
  const sortedWord2 = word2.split('').sort().join('');
  return sortedWord1 === sortedWord2;
}

function filterAnagrams(arr, target) {
  // Main function to filter anagrams from the array
  return arr.filter(word => isAnagram(word, target));
}

const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
const target = 'enlist';

const anagrams = filterAnagrams(words, target);
console.log(anagrams)

//given an arr of obj with people's names and age. 
// have new arr produce the arr of objects in AGE Ascending order.
//Then by name in Alphabetica Order.

function sortByMultipleCriteria(people){
//sorting and comparing people arr, obj

   function comparePeople(a, b){
      //compares age in ascending order 
    if (a.age !==b.age){
      return a.age - b.age
    }
    // If ages are equal than compare name by alphabetical order 
      return a.name.localeCompare(b.name)
   }
   return people.slice().sort(comparePeople)
}

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Matt', age: 30},
  { name: 'Carlos', age: 25},
  { name: 'Zach', age:35},
  { name:'Sydney', age:32}
]

const sortedPeople= sortByMultipleCriteria(people)
console.log(sortedPeople)



// Write a function called calculateTotalPrice that calculates the total price for each product in an array of objects representing products, where each object has a name (string), price (number), and quantity (number) property. The function should return a new array containing objects with the name and totalPrice properties, where totalPrice is the result of multiplying the price with the quantity for each product.

function calculateTotalPrice(products) {
  return products.map(product=>{
    return {
      name: product.name, totalPrice: product.price*product.quantity

    }
  
    
  })
  
}

const products = [
  { name: 'Apple', price: 1.5, quantity: 3 },
  { name: 'Banana', price: 0.75, quantity: 5 },
  { name: 'Orange', price: 1.25, quantity: 2 },
];

const totalPriceArray = calculateTotalPrice(products);
console.log(totalPriceArray);

// Output: [
//  { name: 'Apple', totalPrice: 4.5 },
//  { name: 'Banana', totalPrice: 3.75 },
//  { name: 'Orange', totalPrice: 2.5 }
// ]


 function App() {
  
  return (
    <>
      <div>
       <h1 className='h1'>Code Challenge</h1>
      </div>
     
    </>
  )}


export default App
