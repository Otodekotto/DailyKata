function getLength(nestedArray) {
  if (nestedArray.length === 0) console.log(0)
  else console.log(nestedArray.toString().split(",").length)
}
getLength([])
getLength([1, [2, 3]])
getLength([1, [2, [3, 4]]])
getLength([1, [2, [3, [4, [5, 6]]]]])
getLength([1, [2], 1, [2], 1])
