var itemList3 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];


function findItemsOver(items,threshold){
    var overThresh=[]
      for(var i=0; i<items.length; i++){
        if(items[i].qty>threshold){
          overThresh.push(items[i])
           }
      }
          return overThresh
  }