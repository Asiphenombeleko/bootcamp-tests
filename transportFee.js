function transportFee(shift){
  //var shift = 0
  if( shift =="morning"){
    return 'R20';
  }
  else if(shift =="afternoon"){
    return 'R10'
  }
  else if(shift =="nightshift"){
    return "free"
  }
  else{
    return "lies";
  }
}