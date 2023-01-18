
let stockprice = [8, 5, 12, 9, 19, 1]


MaximumProfit(stockprice)

//function to calculate the maximum profit

function MaximumProfit(stockprice){
    
    let maximumprofit = 0;
    let newprofit = 0;
    //check the firt stockprice of the day and continue forward
    for(let i=0; i<stockprice.length; i++){
        //check the next stockprice
        for(let j=i+1; j<stockprice.length; j++) {
            //if the new stockprice is bigger then old one check out profit
            if(stockprice[i] < stockprice[j]){
                //new profit
                newprofit = stockprice[j]-stockprice[i]
            }
            //check if the new stockprice is more profittable then current maximum profit
            if (newprofit> maximumprofit)
            {
                //new maximum profit
                maximumprofit = newprofit;
            }
        }
    }
    //type out the new maximum profit in log
    console.log(maximumprofit)
}