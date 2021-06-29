// function to format currency
function CurrencyFormatter (number, fractionDigits=0) {
  const CurrencyFormatter = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    maximumFractionDigits: fractionDigits
  });
  const {format} = CurrencyFormatter
  return format(number)
}

export default CurrencyFormatter;