// //  ..................................(generic funtions for arthemetic operator)
//...................... if else k st conditions..............
// const arthemeticOperator =(x,y,operator)=>{
//     try {
//         if(operator === '+'){
//         return(x+y);
//     }else if(operator === '-'){
//         return(x-y); 
//     }else if(operator === '*'){
//         return(x*y);
//     }else if(operator === '/'){
//         return(x/y);
//     }else{
//         return 'please pass arthemetic operator'
//     }
//  } catch (error) {
//         return error.message;
//     }
// }
// const result=arthemeticOperator(12,30,'+');
// console.log(result);



// // .......................................................(alternate code)
// ...............object maping k st condition...............................
// const arthemeticOperators = (x,y,operator) => {
//     const operators = {
//         '+':x+y,
//         '-':x-y,
//         '*':x*y,
//         '%':x%y,
//     };
//     return operators[operator]||'please pass arthemetic operator';
// };
// const result = arthemeticOperators(12,3,'+');
// console.log(result);

// ..........................................................(switch statement)
const arthemeticOperators=(x,y,operator)=>{
    switch (operator) {
        case '+':
            return x+y;
            case '-':
                return x-y;  
                case '*':
                    return x*y;
        default:
            return 'please pass arthemetic operator';
    }
}
const result= arthemeticOperators (12,2,'+');
console.log(result);