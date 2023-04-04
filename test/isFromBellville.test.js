describe('Test my isFromBellville function' , function(){
    it('It should return  true if a registration number is for Bellville' , function(){
        assert.equal(isFromBellville('CY 123'), true);
    });
    it('It should return false if the registration number is not for Bellville' , function(){
      assert.equal(isFromBellville('CJ 123'), false);
  });

  it('It should return no number in the string if the string  passed is empty ' , function(){
    assert.equal(isFromBellville(''),'no number in the string' );
});
  
  });