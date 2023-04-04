

describe('Test my countAllPaarl function', function () {
    it('It should return the number of registration numbers in the string for Paarl', function () {
        assert.equal(countRegNumber('CA 182736'), 1);
    });

    it('It should return the number of registration numbers in the string for Paarl', function () {
        assert.equal(countRegNumber(''), 'no number in the string');
    });

    it('It should return no intergers please return registration number if the number does not have locator', function () {
        assert.equal(countRegNumber(812328), 'no intergers please return registration number');
    });

})