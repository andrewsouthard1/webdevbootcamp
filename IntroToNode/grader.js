function grader(avg){
    var x = 0;
    for(var i = 0; i<avg.length; i++){
        x += avg[i];
    }
    x = x / avg.length;
    return Math.round(x);
}

console.log(grader([5,3,1]));
