module.exports = function reverse (n) {
    if(n < 0){
    n = -n;
    }

    let rever;
    return rever = n.toString().split("").reverse().join("")
}
