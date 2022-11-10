function bmi(weight, height) {
    let reading = weight / Math.pow(height, 2);
    if(reading <= 18.5){
      return 'Underweight'
    }else if(reading <= 25.0){
      return 'Normal'
    }else if(reading <= 30.0){
      return 'Overweight'
    }else{
      return 'Obese'
    };
  };