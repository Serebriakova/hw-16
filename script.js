const arr = [1, 2, 3, -1, -2, -3];


function positive (arr) {
    
    if (arr.length === 0) {
        return alert("Array is empty");
    }
    const arrPositive = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arrPositive.push(arr[i]);
        } 
    }
if (arrPositive.length === 0) {
    return null;
}
return arrPositive;

}

console.log(positive (arr));
