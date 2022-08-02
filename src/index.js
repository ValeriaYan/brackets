module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let bracketsPairs = {}
  for(let brackets of bracketsConfig){
    bracketsPairs[brackets[0]] = brackets[1];
  }

  for(let br of str){
    if(stack.length === 0){
      if(`${br}` in bracketsPairs){
        stack.push(br);
      }else {
        return false;
      }
    }else if(br == bracketsPairs[stack[stack.length - 1]]){
      stack.pop();
    }else if(`${br}` in bracketsPairs){
      stack.push(br);
    }
  }
  if(stack.length !== 0 ) return false;
  return true;
}