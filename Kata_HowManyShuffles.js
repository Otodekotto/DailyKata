function shuffleCount(number) {
  let arr = []
  let arrOriginal = []
  let count = 0
  if (number === 2) {
    console.log(1)
    return
  }
  for (let i = 0; i < number; i++) {
    arr[i] = i + 1
    arrOriginal[i] = i + 1
  }
  do {
    arr = outShuffle(arr, number)
    count++
  } while (arrOriginal.toString() !== arr.toString())
  console.log(count)
}

function outShuffle(numberArray, endNumber) {
  const saveNumberArray = numberArray
  const number = numberArray.length
  const middleIndex = Math.ceil(numberArray.length / 2)
  let array1 = numberArray.splice(0, middleIndex)
  let array2 = numberArray.splice(-middleIndex)

  array1.shift()
  array2.pop()

  let newArray = []

  for (let i = 0; i < number - 2; i++) {
    if (i % 2 === 0) {
      newArray.push(array2[0])
      array2.shift()
    } else {
      newArray.push(array1[0])
      array1.shift()
    }
  }
  newArray.unshift(1)
  newArray.push(endNumber)
  return newArray
}

shuffleCount(4)
shuffleCount(14)
shuffleCount(52)
