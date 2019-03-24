module.exports = function getZerosCount(number, base) {
  let divider = [];
  let dividerPair = {};
  let factorsBefore = 1;
  let result = 1;
  let limit = Math.ceil(Math.sqrt(base));
  let dividerCount = {};
  
  for (i = 2; i < limit  ; i++) {
    if (base % i == 0 ) {
      result++;
      divider.push(i); 
      quotient = base / i;
      divider.unshift(quotient); 
      dividerCount[i] = 0;
      dividerCount[quotient] = 0;
      dividerPair[i]=quotient;
      dividerPair[quotient]=i;
    };
  }

  let dividerLenght = divider.length;
  divider.unshift(base);
  console.log(divider);
  
  for (let i = base + 1; i <=  number; i++) {
    for (let j = 0; j <= dividerLenght; j++ ) {
      let factor = i; 
      while (factor % divider[j] == 0) {
        factor =factor / divider[j];
        dividerCount[divider[j]]++;
        if ((dividerCount[dividerPair[j]] > 0 ) && (dividerCount[j] > 0)) {
          dividerCount[dividerPair[j]]--;
          dividerCount[j]--;
          result++;
        }
      };
    };
  };
  console.log(dividerCount);
  console.log(result);
   return result;  
}