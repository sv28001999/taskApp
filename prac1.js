const myArr = [1, 2, 3, 4, 5, 6, 7, 8]
const sqrArr = myArr.map((arr) => {
    return arr * arr;
}).join(' ')

console.log(typeof sqrArr);
console.log(myArr.join(''));