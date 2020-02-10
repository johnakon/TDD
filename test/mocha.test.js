const MathsService = require('../index');
const chai = require('chai');

const expect = chai.expect; 

describe('Factorial', function() {
    it('factorial should return correct value', function() {
        const mathsService = new MathsService();
        expect(mathsService.factorial(5)).to.equal(20);
    });

});