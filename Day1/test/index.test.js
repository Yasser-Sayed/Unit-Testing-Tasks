const index = require("../index");
const assertMocha = require("assert");

const expect = require("chai").expect;
const assert = require("chai").assert;
const should = require("chai").should();
var num = 1

describe("Test capitalizeText function ", function () {
    beforeEach(()=>{
        console.log(num++)
    })
  it("test that the function takes a string  it will return a string", function () {
    expect(index.capitalizeText("test string")).to.be.a("string");
  });
  it("test that the function takes a string and return it after capitalize it", function () {
    expect(index.capitalizeText("test string")).to.be.equal("TEST STRING");
  });
  it("test if the function takes number it will throw type error says parameter should be string", function () {
    expect(()=>index.capitalizeText(100)).to.throw(
      TypeError,
      "parameter should be string"
    );
  });
  it("test if the input iti , the returned value  will not equal to hello", function () {
    expect(index.capitalizeText("iti")).to.be.not.equal("hello");
  });
});

describe.skip("Test array function", function () {
  it("test that the return value of type array", function () {
    expect(index.createArray(3))
      .to.be.an("array")
      .to.have.lengthOf(3)
      .that.have.includes(1);
  });
});

