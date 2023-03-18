function addup(num) {
    var temp = 0;
    for (let i = 0; i <= num; i++){
        temp += i;
    }
    return temp;
}
console.log(addup(5));

function matchstick(num){
    if (num <= 0){
        return 0;
    }
    if (num > 0){
        return (num * 6) - (num-1);
    }
}
console.log(matchstick(87));

