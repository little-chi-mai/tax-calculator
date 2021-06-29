import React, {useState} from 'react';

import InfoBox from '../InfoBox';
import FormContent from '../FormContent';
import TaxBracket from '../TaxBracket';

import '../../index.css';

const taxBrackets2021 = [
  {
    from: 0,
    to: 18200,
    taxRate: 0,
    tax: 0
  },
  {
    from: 18201,
    to: 45000,
    taxRate: 0.19,
    tax: 0
  },
  {
    from: 45001,
    to: 120000,
    taxRate: 0.325,
    tax: 0
  },
  {
    from: 120001,
    to: 180000,
    taxRate: 0.37,
    tax: 0
  },
  {
    from: 180001,
    to: Infinity,
    taxRate: 0.45,
    tax: 0
  },
];

const taxCalculator = function(taxBrackets, income) {
  let totalTax = 0;

  taxBrackets.map((bracket, index) => {

    if (income >= bracket.from) {
      console.log(bracket.from, bracket.to);

      // choose the value to calculate
      const valueToCalculate = income >= bracket.to ? bracket.to : income;
      taxBrackets[index].tax = (valueToCalculate - bracket.from + 1) * bracket.taxRate;
      totalTax += taxBrackets[index].tax;
      console.log(taxBrackets[index].tax);
    }
  })
  console.log(taxBrackets);
  return taxBrackets;
};

export default function CalculatorForm() {
  let [country, setCountry] = useState('Australia');
  let [year, setYear] = useState('2020 - 2021');
  let [income, setIncome] = useState('70000');
  let [taxDetails, setTaxDetails] = useState(taxBrackets2021);
  let [totalTax, setTotalTax] = useState(0);

  function _onChangeCountry(value) {
    setCountry(value);
  }

  function _onChangeYear(value) {
    setYear(value);
  }
  function _onChangeIncome(value) {
    setIncome(value);
  }

  function _onSubmit(e) {
    e.preventDefault();
    const taxObj = taxCalculator(taxBrackets2021, income)
    setTaxDetails(taxObj);
    let total = 0;
    taxObj.map(bracket => {
      console.log(bracket.tax);
      total += bracket.tax;
    })
    setTotalTax(total)
  }

  function breakdown () {
    return taxDetails.map((bracket, index) => {
      return <TaxBracket from={bracket.from} to={bracket.to} tax={bracket.tax} key={index}/>
    })
  };

  return (
    <div>
      <div className="background">
        <h1>Tax-o-tron</h1>
        <p>The free and simple online tax calculator.</p>
      </div>
      <div className="calculator">
        <form onSubmit={_onSubmit} action="/result">
          <h2>Calculate your tax</h2>
          <InfoBox />

          <FormContent 
            _onChangeCountry={_onChangeCountry}
            _onChangeYear={_onChangeYear}
            _onChangeIncome={_onChangeIncome}
            country={country}
            year={year}
            income={income}
            disabled={false}
          />
          
          <button>Calculate</button>
        </form>
      </div>

      <div>
        <h2>Calculate your tax</h2> 
        <FormContent 
          _onChangeCountry={_onChangeCountry}
          _onChangeYear={_onChangeYear}
          _onChangeIncome={_onChangeIncome}
          country={country}
          year={year}
          income={income}
          disabled={true}
        />
      </div>
      <div className="background">
        <p>Your estimated taxable income is:</p>
        <p>${totalTax}</p>
        <p>Breakdown</p>

        {breakdown()}
      
      </div>
    </div>
  )
}