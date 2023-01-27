function noStrangers(longString) {
  let stringArr = longString
    .toLowerCase()
    .replaceAll(".", "")
    .split(" " || ".")

  let counter = []
  let count = 0
  let acquaintance = []
  let friend = []
  let noStrangers = [[], []]

  for (let i = 0; i < stringArr.length; i++) {
    counter.push(stringArr[i])
    for (let j = 0; j < counter.length; j++) {
      if (stringArr[i] === counter[j]) {
        count++
      }
    }
    if (count === 5) {
      friend.push(stringArr[i])
      acquaintance.splice(stringArr.indexOf(stringArr[i] - 1, 1))
    } else if (count === 3) {
      acquaintance.push(stringArr[i])
    }
    count = 0
  }
  noStrangers[([0], [1])] = friend
  noStrangers[([1], [0])] = acquaintance
  console.log(noStrangers)
}

noStrangers("see see see see spot spot spot spot spot see")
noStrangers("See Spot run. See Spot jump. Spot likes jumping. See Spot fly.")
