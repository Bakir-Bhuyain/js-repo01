function getOutput (){

}
getOutput()


function return0 (proice1,proice2) {
      const total = proice1 + proice2;
      return total;
}

const bill =return0(5,10);


//short vabe return

// const add = (90, 45);

// function add2 (price1 , price2){
//       return price1+price2;
// }
// const bill3 =add (90 , 45);
// console.log(add,add2)


function doMath (num1,num2 ){
const sum = num1+num2;
const diff = num1 - num2; 
const multi = num1 - num2 ;
const result = multi/2;
return result;
}
const result = doMath(10,5);
console.log(result);


function isEven (number){
      if (number % 2 ===0){
            return true;
      }
      else{
            return false;
      }
}