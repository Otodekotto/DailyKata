function splitOnDoubleLetter(word) {
    const array = word.split('')
    let memo = [];
    let newArray2 = [];
    let newArray = [];
    let finnishedarray = [];
    let newstring;
    let currentloop = 0;
    let j = 0;
    for (let i = 0; i < array.length; i++) {

        if (i === array.length) {
            break;
        }
        else if (array[i] === array[i + 1]) {
            memo[currentloop] = i + 1
            currentloop++
        }
    }
    if (memo.length === 0) {
        return;
    }

    newArray2[0] = memo[0]

    for (let i = 1; i < memo.length; i++) {
        newArray2[i] = memo[j + 1] - memo[j]
        j++
    }
    console.log(newArray2)
    console.log(newArray2.length)


    for (let i = 0; i < newArray2.length; i++) {

        for (let v = 0; v < newArray2[0]; v++) {
            newArray[v] = array[0]
            array.shift();
        }
        newstring = newArray.join('')
        finnishedarray[i] = newstring

    }
    if (array.length != 0) {
        newstring = array.join('')
        finnishedarray.push(newstring)
    }

    console.log(finnishedarray)
}
const wordie = "letter";
splitOnDoubleLetter(wordie)