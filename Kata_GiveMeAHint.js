function grantTheHint(sentence) {
  let wordArray = sentence.split(" ")
  let maxLength = 0
  let newSentence = []

  for (let i = 0; i < wordArray.length; i++) {
    if (maxLength < wordArray[i].length) {
      maxLength = wordArray[i].length
    }
  }
  console.log(maxLength)
  for (let i = 0; i < maxLength + 1; i++) {
    newSentence.push(hideLetter(wordArray, i))
  }
  console.log(newSentence)
}

function hideLetter(wordArray, count) {
  let character = []
  let newWord = []
  for (let i = 0; i < wordArray.length; i++) {
    character = wordArray[i].split("")
    for (let j = 0 + count; j < character.length; j++) {
      character[j] = "_"
    }
    let word = character.join("")

    newWord.push(word)
  }
  newWord = newWord.join().replaceAll(",", " ")
  return newWord
}

grantTheHint("Mary Queen of Scots")
grantTheHint("The Life of Pi")
