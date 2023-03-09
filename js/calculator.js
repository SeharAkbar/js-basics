const calculator =(kiskatable, kahntkatable)=> {
try{
for(let x=1; x<=10; x++){
    console.log(`${kiskatable} *${x}= ${kiskatable*x}`);
}
}catch(error){
console.log(error.message);
}
}
calculator(5,10);