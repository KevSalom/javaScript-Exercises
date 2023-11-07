
//Mia
// function HasBalancedBrackets(string) {
//   //Tu código aquí

//   let stack = [];
//   const open = ['(','{','['];
//   const close = [')', '}', ']']

//   for(let i = 0; i < string.length; i ++){
//     if( open.includes(string[i])) {stack.push(string[i])
//     } else if( close.includes(string[i])) {
//       const lastOpenBracket = stack.pop();
//       if (open[close.indexOf(string[i])] !== lastOpenBracket) {
//         return false;
//       }
//     }
//   }
//   return true
// }




// Nelson
// function HasBalancedBrackets(string) {

//   const open = ["{", "[", "("],
//     close = ["}", "]", ")"],
//     reg = [];
//   for (let i = 0; i < string.length; i++) {
//     if (open.includes(string[i])) {
//       reg.push(string[i]);
//     } else {
//       if (close.indexOf(string[i]) !== open.indexOf(reg.pop())) {
//         return false;
//       }
//     }
//   }
//   if (!reg.length) return true;
//   return false;}


  //Ivan

  function HasBalancedBrackets(string) {
  const validBrackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const stack = [];
  for (const bracket of string) {
    if (validBrackets[bracket]) stack.push(bracket);
    else if (validBrackets[stack.pop()] !== bracket) return false;
  }
  return !stack.length;
}



console.log(HasBalancedBrackets('{ [ ( [ { ( )[ )]{ } } ] ) ] }'))

module.exports = HasBalancedBrackets;
