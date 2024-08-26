module.exports = function check(str, bracketsConfig) {
  let stack = [];

  for (let el of str) {
    for (let i = 0; i < bracketsConfig.length; i++) {
      let open = bracketsConfig[i][0];
      let close = bracketsConfig[i][1];

      if (el === open) {
        // Special case: if the same character is used for both open and close
        if (open === close) {
          if (stack.length > 0 && stack[stack.length - 1] === i) {
            stack.pop();
          } else {
            stack.push(i);
          }
        } else {
          stack.push(i);
        }
      } else if (el === close) {
        if (stack.length === 0 || stack.pop() !== i) {
          return false;
        }
      }
    }
  }

  return stack.length === 0;
}
