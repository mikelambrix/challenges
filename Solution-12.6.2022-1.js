function removeSmallest(numbers) {
    let min = Math.min.apply(null, numbers);
    if (numbers.length > 0){
      for(i = 0; i < numbers.length; i++){
        if(numbers[i] == min){
          numbers.splice(i, 1)
          return numbers;
        }
      }
    }else{
      return numbers;
    }
  }