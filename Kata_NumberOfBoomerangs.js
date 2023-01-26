function countBoomerangs(boomerangs) {
  let boomerangcount = 0
  for (let i = 0; i < boomerangs.length - 2; i++) {
    if (
      boomerangs[i] === boomerangs[i + 2] &&
      boomerangs[i] !== boomerangs[i + 1]
    ) {
      boomerangcount++
    }
  }
  console.log(boomerangcount)
}

countBoomerangs([9, 5, 9, 5, 1, 1, 1])
countBoomerangs([5, 6, 6, 7, 6, 3, 9])
countBoomerangs([4, 4, 4, 9, 9, 9, 9])
countBoomerangs([1, 7, 1, 7, 1, 7, 1])
