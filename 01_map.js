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

// example: 
const arr = [1,2,3,4];
const square = arr.myMap((item, i, arr)=> item*item);
console.log(square)
// result: [1,4,9,16]