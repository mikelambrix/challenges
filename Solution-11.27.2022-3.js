const minSum = arr =>
  arr.sort((a,b) => a - b).reduce((prev,curr) => prev + curr * arr.pop(), 0)