const index=require("../index");

describe("testing math utilities", () => {
    let pos_vals=[1,3,4];
    let neg_vals=[-4,-5,-6];
    let vals=[1,3,4,-4,-5,-6];
    let sum_of_vals=-7;
  
     
    beforeAll(function(){
        const posVal=index.positive(vals);
        console.log(posVal);
    })
    beforeEach(function(){
        console.log(vals)
    })
    afterAll(function(){
        vals=0;
        neg_vals=0;
        pos_vals=0;
        sum_of_vals=0
    })
    afterEach(function(){
        console.log("done")
    })
    it("sum function should equal to sum of the values", () => {
      expect(index.sum(vals)).toEqual(sum_of_vals)
    });
  
    it("positive function should equal to positive values", () => {
        expect(index.positive(vals)).toEqual(pos_vals)
  
    });
    xit("test check positivity function",function(){
        expect(index.positive(vals)).toBeFalsy()
    });

  });