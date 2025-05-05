// polyfill for map

// syntax of map
// Array.map((num, i, arr)=> {})

Array.prototype.myMap = function(cb){
    let temp = [];
    for(let i=0; i<this.length; i++){
        temp.push(cb(this[i], i, this))
    }
    return temp;
}

/*--
 map function iterates the items and perform a callback action on each item/element in an array and return a new array 
 syntax: Array.map((item, i ,arr)=> {})
--*/

// example:
const arr = [1, 2, 3, 4];
const result = arr.myMap((item) => item * 2);

console.log(result);
