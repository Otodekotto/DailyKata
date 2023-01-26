function elasticWord(word) {
  const arrWord = Array.from(word)

  let left = ""
  let right = ""
  let pivot = []

  console.log(arrWord)
  if (word.length < 3) {
    return console.log(word)
  }
  //odd
  else if (word.length % 2 != 0) {
    let firstHalfOfArray = arrWord.slice(0, arrWord.length / 2)
    let secondHalfOfArray = arrWord.slice(arrWord.length / 2)
    secondHalfOfArray.shift()
    for (let i = 0; i < firstHalfOfArray.length; i++) {
      left += firstHalfOfArray[i].repeat(i + 1)
      right += secondHalfOfArray[i].repeat(firstHalfOfArray.length - i)
    }
    pivot = arrWord[Math.round(arrWord.length / 2) - 1].repeat(
      Math.round(arrWord.length / 2)
    )

    console.log(left + pivot + right)
  }
  //even
  else {
    let firstHalfOfArray = arrWord.slice(0, arrWord.length / 2)
    let secondHalfOfArray = arrWord.slice(arrWord.length / 2)

    for (let i = 0; i < firstHalfOfArray.length; i++) {
      left += firstHalfOfArray[i].repeat(i + 1)
      right += secondHalfOfArray[i].repeat(firstHalfOfArray.length - i)
    }
    console.log(left + right)
  }
}

elasticWord("ANNA")
elasticWord("KAYAK")
elasticWord("X")
elasticWord("DARKAKRAD")
