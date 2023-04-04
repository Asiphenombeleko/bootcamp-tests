describe('Test my isWeekday function' , function(){
    it('It should return  the day of the week' , function(){
        assert.equal(isWeekday('Wednesday'), true);
    });
    it('It should return  the day of the week' , function(){
      assert.equal(isWeekday('Thursday'), true);
  });

  it('It should return  no specific day was found if the string passed is empty' , function(){
    assert.equal(isWeekday(''), 'no specific day was found');
});
  
  });
  

  