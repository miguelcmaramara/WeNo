var sleepHours
var yesNoPref

function getSleepHours(){
  return this.sleepHours;
}

function setSleepHours(sleepHours){
  this.sleepHours = sleepHours;
}

function setYesNoPref(yesNoPref){
  this.yesNoPref=yesNoPref;
}

function getYesNoPref(){
  return this.yesNoPref;
}

function Question (text, type, DT){

  let randomVal=  Math.random()*100;

  if (randomVal>Calc()){
    return true;
  } else {
    return false;
  }

  
}


function Calc() {

  return 50;
}
  
