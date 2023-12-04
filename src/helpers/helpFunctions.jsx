export function numberWithCommas(x) {
  const numberToTwoDecimal = parseFloat(x.toFixed(2));
  return numberToTwoDecimal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
