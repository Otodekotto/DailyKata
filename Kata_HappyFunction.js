function happyAlgorithm(num){
    let loopCheckArr = []
    let newNum = num;
    let numArr=splitNumberToDigits(num)
    let count=0;
    while( num !==1 && !loopCheckArr.includes(num) ){

        loopCheckArr.push(newNum)
        newNum=0


        for(let i = 0; i<numArr.length; i++){
            newNum += Math.pow(numArr[i],2)
        }
        num = newNum;

        numArr = splitNumberToDigits(num)

        count++
    }
    if(count === 0){
        count++
    }
    if(num===1){
        console.log("HAPPY " + (count))
    }
    else{
        console.log("SAD " + (count))
    }
}

function splitNumberToDigits(num){
    let digits =  String(num).split("").map(Number)
    return digits;
}



happyAlgorithm(139)
happyAlgorithm(67)
happyAlgorithm(1)
happyAlgorithm(89)