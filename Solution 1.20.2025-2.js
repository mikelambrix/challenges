class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }
  
  isWorthIt(){
    if((this.draft - (this.crew * 1.5)) > 20){
      return true;
    }else{
      return false;
    }
  }
  
}
