function correctTitle(title) {
  let wordsArray = title.toLowerCase().split(" ")
  let newTitle = []

  wordsArray.forEach((word) => {
    let fixWords = []
    let newfixwords = []
    if (word.includes(",")) {
      fixWords = word.split(",")
      fixWords.forEach((fixWord) => {
        if (fixWord === "") {
          if (fixWord === " " + fixWord[fixWords.length - 1]) {
            newfixwords.push(" ")
          }
        } else if (fixWord === fixWords[fixWords.length - 1]) {
          newfixwords.push(" " + fixWord[0].toUpperCase() + fixWord.slice(1))
        } else {
          newfixwords.push(fixWord[0].toUpperCase() + fixWord.slice(1) + ",")
        }
      })
      newTitle.push(newfixwords.join(""))
    } else if (
      word === "and" ||
      word === "the" ||
      word === "of" ||
      word === "in"
    ) {
      newTitle.push(word)
    } else {
      newTitle.push(word[0].toUpperCase() + word.slice(1))
    }
  })
  if (newTitle.join(" ").slice(-1) === ".") {
    console.log(newTitle.join(" "))
  } else {
    console.log(newTitle.join(" ") + ".")
  }
}
correctTitle("jOn SnoW, kINg IN thE noRth")
correctTitle("sansa stark,lady of winterfell.")
correctTitle("TYRION LANNISTER, HAND OF THE QUEEN.")
