function howUnlucky(year) {
    let count= 0;
    for(let i = 1 ; i<13; i++){
        const d = new Date(year+"-"+i+"-13"); 
        if(d.getDay() === 5)
        {
            count++
        }
    }
    console.log(count)
}

howUnlucky(2020)
howUnlucky(2026)
howUnlucky(2016)