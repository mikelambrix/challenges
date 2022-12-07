function removeSmallest(numbers) {
    const smallest = Math.min(...numbers);
    const index = numbers.indexOf(smallest);
    
    return numbers.filter((_, i) => i !== index);
  
  const result = removeSmallest([2, 1, 5, -10, 4, -10, 2])
  
  return result;
  }