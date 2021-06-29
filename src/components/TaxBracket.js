import React from 'react';

import currencyFormatter from '../helpers/CurrencyFormatter';

export default function TaxBracket(props) {

  // var currencyFormatter = new Intl.NumberFormat('en-AU', {
  //   style: 'currency',
  //   currency: 'AUD',
  //   maximumFractionDigits: 0
  //   // These options are needed to round to whole numbers if that's what you want.
  //   //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //   //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  // });
  // const {format} = currencyFormatter;


  return (
    <div className="tax-breakdowns">
      <div className="tax-breakdowns__bracket">
        <h4>Tax Bracket</h4>
        <p>{`${currencyFormatter(props.from)}${props.to !== Infinity ? ` - ${currencyFormatter(props.to)}` : '+'}`}</p>
      </div>
      <p className="tax-breakdowns__number">{currencyFormatter(props.tax)}</p>
    </div>
  )
}