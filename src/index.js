module.exports = function reverse(n) {
    let arr = n.toString().split('');
    if (n < 0) return +(arr.slice(1).reverse().join(''));
    return +(arr.reverse().join(''));
}
