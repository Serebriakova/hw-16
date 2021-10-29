const arr = [1, 2, 3, -1, -2, -3];


function positive (arr) {
    const arrPositive = [];
    if (arr.length === 0) {
        return alert("Array is empty");
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arrPositive.push(arr[i]);
        } else { continue; }
    }
if (arrPositive.length === 0) {
    return console.log(null);
}
return console.log(arrPositive);

}

positive (arr);