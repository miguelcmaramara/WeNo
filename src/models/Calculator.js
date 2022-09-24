export default class Calculator{

    
    constructor(){

    }
    values={};

    setMethod(n,value){
        this.values[n]=value;
    }
    getMethod(n){
        return this.values[n];
    }

 Question (){

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
