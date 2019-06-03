let calculator = new Calculator();

describe("Add", function(){

    it ("should add two numbers", function(){
        let result = calculator.add(70,7);
        result = calculator.add(calculator.last(),70,7);
        expect(result).toBe(154);
    });

    it ("should add more than two numbers", function() {
        let result = calculator.add(40,4);
        result = calculator.add(calculator.last(),40,4);

        expect(result).toBe(88);
    });
    
});


describe("Multiply", function() {
    it("should multiply two numbers", function() {
        let result = calculator.multiply(5,2);
        result = calculator.multiply(calculator.last(),5,2);
        expect(result).toBe(100);
    });

    it("should multiply more than two numbers", function() {
        let result = calculator.multiply(3,4,2);
        result = calculator.multiply(calculator.last(),3,4,2);
        expect(result).toBe(576);
    });

describe("Last", function() {
        it("should store the last number", function() {
            let result = calculator.last();
            expect(result).toBe(calculator.last());
        });
});

describe("Memory", function() {
  /*  it("should return 10", function(){
        //this.result = calculator.last();
    calculator.add(1,2,3,4);
    calculator.set_slot(1);
    let result = calculator.multiply(calculator.get_slot(1));
    expect(result).toBe(10);

});*/

 it("should return 12", function(){
     calculator.add(1,2);
    calculator.set_slot(1);
    let result = calculator.multiply(calculator.get_slot(1), 4);
    expect(result).toBe(12);
 })
});

});
