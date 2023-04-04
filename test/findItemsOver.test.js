

describe('Test my findItemsOver function' , function(){
    it('It should return  all items that are higher than the threshold' , function(){
        var itemList3 = [
            {name : 'apples', qty : 40},
            {name : 'pears', qty : 20},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];

        assert.deepEqual(findItemsOver(itemList3, 38),
        [{name : 'apples', qty : 40}]);
    });
    it('It should return  all items that are higher than the threshold' , function(){
        assert.deepEqual(findItemsOver(itemList3, 35),
        [{name : 'apples', qty : 40},{name : 'apples', qty : 37}]);
    });


  });