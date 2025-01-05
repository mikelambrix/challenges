function formatMoney(amount){
  let USDollar = new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'USD',
    useGrouping: false,
  });
  return USDollar.format(amount)
}
