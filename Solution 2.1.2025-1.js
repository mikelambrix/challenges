function getDrinkByProfession(param){
  let drink = param.toLowerCase();
  if(drink === 'jabroni') {
    return "Patron Tequila"
  } else if (drink === "school counselor") {
    return "Anything with Alcohol"
  }else if(drink === "programmer"){
    return "Hipster Craft Beer"
  }else if(drink === 'bike gang member'){
    return "Moonshine"
  }else if(drink === "politician"){
    return "Your tax dollars"
  }else if(drink === "rapper"){
    return "Cristal"
  }else{
    return 'Beer'
  };
};
