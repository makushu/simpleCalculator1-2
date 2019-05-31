class Calculator{
    constructor(){
        this.array = [];
    }

last(){
    return this.result;
}

 add(){
    
    this.result = 0;
    for(var a=0; a<arguments.length; a++){
        this.result += parseFloat(arguments[a]);
    }
    return this.result;
}

 multiply(){
    
    this.result = 1;
    for(var a=0; a<arguments.length; a++){
        this.result *= parseFloat(arguments[a]);
    }
    return this.result;
}

    set_slot(number){
        this.array.push(this.last);
        return this.array[number-1];

    }
 
    get_slot(number){
        return this.array[number-1];
    }
}


