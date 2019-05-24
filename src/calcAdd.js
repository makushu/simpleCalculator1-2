function add(num1, num2){
    return num1 + num2;
}

function addMore(num1, num2, num3, num4){
    var sum = 0;
    for(var a=0; a<arguments.length; a++){
        sum += arguments[a];
    }
    return sum;
}

function multiply(num1, num2){
    return num1 * num2;
}

function multiplyMore(num1, num2, num3){
    var product = 1;
    for(var a=0; a<arguments.length; a++){
        product *= arguments[a];
    }
    return product;
}