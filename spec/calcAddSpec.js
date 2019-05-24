describe("Add", function(){
    it ("should add two numbers", function(){
        let result = add(70,7);
        expect(result).toBe(77);
    });

    it ("should add more than two numbers", function() {
        let result = addMore(32,1,4,7);
        expect(result).toBe(44);
    });
    
});

describe("Multiply", function() {
    it("should multiply two numbers", function() {
        let result = multiply(17,2);
        expect(result).toBe(34);
    });

    it("should multiply more than two numbers", function() {
        let result = multiplyMore(111,2,3);
        expect(result).toBe(666);
    });
});
