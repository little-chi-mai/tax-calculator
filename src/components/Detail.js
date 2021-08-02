import React from 'react';

import currencyFormatter from '../helpers/CurrencyFormatter';

export default function TaxBracket(props) {
  return (
    <div className="tax-breakdowns">
      <div className="tax-breakdowns__bracket">
        <h4>Tax Bracket</h4>
        <p>{`${currencyFormatter(props.from)}${
          props.to !== Infinity ? ` - ${currencyFormatter(props.to)}` : '+'
        }`}</p>
      </div>
      <p className="tax-breakdowns__number">{currencyFormatter(props.tax)}</p>
    </div>
  );
}
