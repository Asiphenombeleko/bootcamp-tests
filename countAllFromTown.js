function countAllFromTown(regNum, regEnd){
    var regNo =regNum.split(",")
    //console.log(regNo)
    var newArr= [];
    for(var i=0; i<regNo.length; i++){
      var currentRegistrationNumber = regNo[i].trim()
      if(currentRegistrationNumber.startsWith(regEnd)){
       newArr.push(regNo[i])  
      }
    
    }return  newArr.length
  }