export default class Calculator{
    constructor(){
    }
 sleepHours;
yesNoPref;

getSleepHours(){
  return this.sleepHours;
}

 setSleepHours(sleepHours){
  this.sleepHours = sleepHours;
}

 setYesNoPref(yesNoPref){
  this.yesNoPref=yesNoPref;
}
 getYesNoPref(){
  return this.yesNoPref;
}

 Question (text, type, DT){

  let randomVal=  Math.random()*100;

  if (randomVal>this.Calc()){
    return true;
  } else {
    return false;
  }

  
}
 Calc() {

  return 50;
}
}
