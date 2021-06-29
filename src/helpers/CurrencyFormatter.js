// const CurrencyFormatter = new Intl.NumberFormat('en-AU', {
//   style: 'currency',
//   currency: 'AUD',
//   maximumFractionDigits: 0
//   // These options are needed to round to whole numbers if that's what you want.
//   //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
//   //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
// });

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