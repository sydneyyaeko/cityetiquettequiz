//collection of correct answers
var answers = ["D","C","B","D","A"], 
    tot = answers.length;

//return the value retrieved
function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName ); 
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value;
}

//return score back to user
function getScore(){
  var score = 0;
  for (var i=0; i<tot; i++)
    if(getCheckedValue("question"+i)===answers[i]) score += 1; 
  return score;
}

//display final score
function returnScore(){
  alert("Your score is "+ getScore() +"/"+ tot + ". Proud of yourself?");
}