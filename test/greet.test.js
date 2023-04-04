

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

it('It should return no name was greeted if an empty string was passed' , function(){
  assert.equal("no name was greeted", greet(""));
});


});