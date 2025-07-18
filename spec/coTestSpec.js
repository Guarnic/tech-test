const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("CarInsurance", function() {

  describe("Normal products", function() {
    it("should decrease price by 1 each day", function() {
      const carInsurance = new CarInsurance([new Product("Normal Item", 5, 10)]);
      const products = carInsurance.updatePrice();
      expect(products[0].price).to.equal(9);
      expect(products[0].sellIn).to.equal(4);
    });

    it("should decrease price by 2 when expired", function() {
      const carInsurance = new CarInsurance([new Product("Normal Item", 0, 10)]);
      const products = carInsurance.updatePrice();
      expect(products[0].price).to.equal(8);
      expect(products[0].sellIn).to.equal(-1);
    });

    it("should never have negative price", function() {
      const carInsurance = new CarInsurance([new Product("Normal Item", 1, 0)]);
      const products = carInsurance.updatePrice();
      expect(products[0].price).to.equal(0);
    });
  });

  describe("Full Coverage", function() {
    it("should increase price by 1 each day", function() {
      const carInsurance = new CarInsurance([new Product("Full Coverage", 5, 10)]);
      const products = carInsurance.updatePrice();
      expect(products[0].price).to.equal(11);
    });

    it("should never exceed price of 50", function() {
      const carInsurance = new CarInsurance([new Product("Full Coverage", 5, 50)]);
      const products = carInsurance.updatePrice();
      expect(products[0].price).to.equal(50);
    });
  });

  describe("Mega Coverage", function() {
    it("should never change price or sellIn", function() {
      const carInsurance = new CarInsurance([new Product("Mega Coverage", 0, 80)]);
      const products = carInsurance.updatePrice();
      expect(products[0].price).to.equal(80);
      expect(products[0].sellIn).to.equal(0);
    });
  });

  describe("Super Sale", function() {
    it("should decrease price by 2 each day", function() {
      const carInsurance = new CarInsurance([new Product("Super Sale", 5, 10)]);
      const products = carInsurance.updatePrice();
      expect(products[0].price).to.equal(8);
    });

    it("should decrease price by 4 when expired", function() {
      const carInsurance = new CarInsurance([new Product("Super Sale", 0, 10)]);
      const products = carInsurance.updatePrice();
      expect(products[0].price).to.equal(6);
    });
  });

});
