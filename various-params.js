function evenSizedString (str){
      const size = str.length;
      console.log(str,size);
      if(size % 2 ===0){
            console.log('even size');
            return true;
      }
      else{
            console.log('odd size');
      return false;
      }
}
// evenSizedString('Dhaka');
// evenSizedString('Faka');

//boolean er khetre 

function doubleOrTriple (number,doDouble){
      if(doDouble ===true){
            const result = number*2;
            return result;
      }
      else{
            const result = number*3;
            return result;
      }
}
// console.log(doubleOrTriple(5,true));
// console.log(doubleOrTriple (5,false))


//Array er vhitor er kahini

function numbersOfElements(numbers){
      const len = numbers.length;
      return len;
}
numbersOfElements([12,45,32,67,64]);
// console.log(numbers)