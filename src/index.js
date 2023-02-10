module.exports = function reverse (n) {
    if (n < 0) {
        n = n * (-1)
    }
  let arr = ('' + n).split('').map(Number);
  let newArr = arr.reverse();
  return +newArr.join('');
}
