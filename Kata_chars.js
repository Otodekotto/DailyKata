function charCount(letter, words){
    let count = 0;
    if(letter.length > 1){
        console.log("error")
        return;
    }
    for(let i=0; i<words.length; i++){
        if(letter === words[i]){
            count++
        }
    }
    console.log(count)
}

function charCountV2(letter, words){
    let wordarray = Array.from(words)
    if(letter.length > 1){
        console.log("error")
        return;
    }
    
    const count = wordarray.filter(words => words === letter);
    console.log(count.length)
}



charCountV2("a" , "edabit")
charCountV2("c" , "Cha,ber of secrets")
charCountV2("B" , "boxes are fun")
charCountV2("b" , "big fat bubble")
charCountV2("e" , "javascript is good")
charCountV2("!" , "!easy!")
charCountV2("wow" , "the universe is wow")
