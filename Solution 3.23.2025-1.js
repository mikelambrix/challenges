function betterThanAverage(classPoints, yourPoints) {
  let classPointsSum = classPoints.reduce((sum, current) => sum + current, 0)
  let average = (classPointsSum/classPoints.length)
  if(yourPoints >= average){
    return true;
  }else{
    return false
  }
}
