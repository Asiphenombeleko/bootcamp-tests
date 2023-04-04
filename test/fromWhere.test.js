

describe('Test my fromWhere function' , function(){
    it('It should return  Bellville if the regNo has CY' , function(){
        assert.equal(fromWhere('567489 CY'), 'Bellville'); 
    });
    it('It should return  Paarl if the regNo has CJ' , function(){
      assert.equal(fromWhere('343502 CJ'), 'Paarl');
  });
  
  it('It should return invalid registration number when the regstartion number starts with the locator' , function(){
    assert.equal(fromWhere('CY 43502'), 'invalid registration number');
});
  
  });