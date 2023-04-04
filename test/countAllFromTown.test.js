

describe('Test my countAllFromTown function', function () {
    it('It should return the number of registration numbers in the string for town', function () {
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3);
    });

    it('It should return the number of registration numbers in the string for town', function () {
        assert.equal(countRegNumber(''), 'no number in the string');
    });

    it('It should return no intergers please return registration number if the number does not have locator', function () {
        assert.equal(countRegNumber(812328), 'no intergers please return registration number');
    });

})