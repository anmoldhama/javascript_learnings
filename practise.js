
Array.prototype.myMap = function(callback, thisArg) {
    // 1. Create an empty array to store the results
    const result = [];
    // 2. Iterate through the array using a for loop
    for (let i = 0; i < this.length; i++) {
        // 3. Check if the element is not undefined (to skip holes in sparse arrays)
        if (i in this) {
            // 4. Call the callback function with the current element, index, and the original array
            const value = callback.call(thisArg, this[i], i, this);
            result.push(value); // Push the result to the new array

        }
    }

    // 5. Return the new array
    return result;
};


const arr = [1, 2, 3, 4];

const newArr = arr.myMap(function(num) {
    return num * 2;
});

console.log(newArr);