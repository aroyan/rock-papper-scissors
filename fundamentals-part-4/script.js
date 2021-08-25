//Declaring Array
const fruit = ["Apple", "Banana", "Cherry", "Durian", "Dragon Fruit"]

console.log(fruit)

const mahasiswa = {nama:"Aroyan", nim:"2010010293", kelas:"3B Reg BJB",
                    nama:"Bakti", nim:"23000293", kelas:"LC20"};
console.log(mahasiswa);

//typeof(mahasiswa);

//Replace an array element
fruit[3] = "Devil Fruit";
console.log(fruit[3]);

//fruit.push = "Rambutan";


//Array in JS are object

/* 

let fLength = fruit.length;

text = "<ul>";

for(let i = 0; i < fLength; i++){
    text += "<li>" + fruit[i] + "</li>";
}
text += "</ul>";

document.getElementById("coba").outerHTML = text;

*/

fruit.push("Lemon");

fruit[fruit.length] = "Melon";

fruit[10] = "Blueberry";

console.log(fruit);

//Avoid using new Array 
//This will create 200 of blank array
const buah2 = new Array(200);


//Using this is create new array
const buah3 = [200];


//How to check if the variables is Array or an object

//First
console.log(fruit instanceof Array);

console.log(mahasiswa instanceof Object);

//Second
console.log(Array.isArray(fruit));

//Convert arrays to strings
console.log(fruit.toString());


//Join() is behave like arrays to string but you can add separator or character between each strings
console.log(fruit.join("+"));


//pop() function is return last element of array
console.log(fruit.pop());


//push() funtion is adding new element to the end of arrays
//push() return the new array of length
fruit.push("Manggo");
console.log(fruit.push("Manggo"));
console.log(fruit);


//shift() is return value that was "shifted out", it's like pop() but removes the first array of element and 
// "shift all" other element to a lower index
fruit.shift();
console.log(fruit);

// now x value will be the first element of the fruit 
let x = fruit.shift();
console.log(x);


//unshift() adds a new element to an array (at the beginning), and "unshifts" order elements
fruit.unshift("tomatto");
console.log(fruit);


//Append element with length property
fruit[fruit.length] = "Grape"
console.log(fruit);

//Change elements with index of array
fruit[0] = "Watermelon"
console.log(fruit);

//Delete elements with operator delete, but delete operator will leave an empty space, use pop() or shift() instead
delete fruit[0];
console.log(fruit);

//Splicing an array with splice() can be used to add new items to array
fruit.splice(1, 0, "Kiwi", "Pineapple"); //The first parameter(1) is define position where new elements should be add
                                        //and the second parameter(0) is define how many elements should be removed
console.log(fruit);


const fruits = ["kiwi", "lemon", "banana", "manggo", "apple"];
fruits.splice(2, 2, "orange", "lime");
console.log(fruits);


//Using splice() to remove elements, with clever indexing it will leave no holes in array
fruits.splice(2, 1);
console.log(fruits);


//Merging two arrays

let namaCewek = ["Celine", "Deane", "Emilly"];
let namaCowok = ["Adam", "Bruce", "Chris"];

let namaMereka = namaCewek.concat(namaCowok);
console.log("This is the result of the join arrays : " + namaMereka);


//Slicing an Array using slice()
const hewan = ["Anaconda", "Bebek", "Kuda", "Zebra"];
const ular = hewan.slice(1, 3);
console.log(ular);


//Automatic toString()


//