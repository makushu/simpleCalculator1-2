class Calculator{
    constructor(){
        this.result = 0;
        this.slot = [];
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
        this.slot[number] = this.result;
    }

    get_slot(number){
        return this.slot[number];
    }
}



