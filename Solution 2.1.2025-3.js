function getUsersIds(str){
  let output = str.replace(/#/gu, '').split(',')
  output = output.map(entry => entry.trim().toLowerCase())
  return output.map(entry => entry.replace(/^uid/u, '').trim())
}
