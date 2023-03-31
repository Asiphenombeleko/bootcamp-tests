

describe('Test my greet function' , function(){
  it('It should return  Hello, Asiphe' , function(){
      assert.equal("Hello, Asiphe", greet("Asiphe"));
  });
  it('It should return  Hello, Likhona' , function(){
    assert.equal("Hello, Likhona", greet("Likhona"));
});
it('It should return  Hello, Alunamda' , function(){
  assert.equal("Hello, Alunamda", greet("Alunamda"));
});

});