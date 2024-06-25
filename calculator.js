let runningTotal=0;//this variable keep track that what was we have previously like we added 10 in 46 then 10 store in runningTotal.
let buffer="0";// buffer represent that What is actually on the screen at any given time and it is always an string.
let previousOperator=null;//let say i do 20+10 then click on =. but we have to store + operator in any variable.

const screen=document.querySelector(".screen");//This is where we are actually be writing out to.

function buttonClick(value){//This function tell what happens if user clicks one of the button
    // console.log(value);
    if(isNaN(value)){
        handleSymbol(value)//this is not a number
    }else{
        handleNumber(value);//this is a number
    }
    screen.innerText=buffer;

}
function flushOperation(intBuffer){
    if(previousOperator==="+"){
        runningTotal+=intBuffer;
    }else if(previousOperator==='−'){
        runningTotal-=intBuffer;
    }else if(previousOperator==='×'){
        runningTotal*=intBuffer;
    }else {
        runningTotal/=intBuffer;
    }
    console.log('runningTotal', runningTotal); 
}
function handleMath(symbol){
    // console.log('handleMath',symbol);
    if(buffer==='0'){
        //if i hit any symbol like + doesnot make any sense.
        return;
    }
    const intBuffer=parseInt(buffer);
    if(runningTotal===0){
        runningTotal=intBuffer;//because if i have 25+ then 25 become running total.
    }else{
        flushOperation(intBuffer);
    }

      previousOperator=symbol;
      buffer="0";//when we click on any symabol , we get zero at screen.

}
function handleSymbol(symbol){//create this function to handle the symbols.
    // console.log('handleSymbol',symbol);
    // we have to write symbols as +,-,x because javascript convert &plus; etc into +.
    if(symbol==="C"){
        buffer="0";
        runningTotal=0;
    }else if (symbol === "+" || symbol === "−" || symbol === "×"|| symbol === "÷") {
        handleMath(symbol); 
    }else if(symbol==="="){
        if(previousOperator===null){//it mean user hasnot choose operator yet. 
            return;
        }
        
            flushOperation(parseInt(buffer));
            previousOperator=null;
            buffer=runningTotal;
            runningTotal=0;
        
    }

}
function handleNumber(numberString){//create this function to handle the numbers because all numbers have same code .
    if(buffer==="0"){//like jab 0 hota hai screen par and koi bhi number click karte hai calculator mai to wahi number display ho jata hai 0 ko reolace kar ke.
        buffer=numberString;
    }else{
        buffer=buffer+numberString;//like jab 0 nahi hota hai screen par and koi bhi number hota hai like 5 and other number  click karte hai calculator mai like 8 to final number hume 58 display hota hai which mean string concatination ho raha hota hai.
    }
    // console.log("buffer",buffer); 
    
}
function init(){
    document.querySelector(".calc-buttons").
    addEventListener("click",function(event){//Here event is given by browser.
        // console.log(event);//Lot of stuf present inside event object.
        buttonClick(event.target.innerText);//Here innerText is string.
    })
}

init();
  
