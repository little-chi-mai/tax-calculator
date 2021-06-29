import React, {useState, useEffect} from 'react';

import InfoBox from '../InfoBox';
import FormContent from '../FormContent';
import TaxBracket from '../TaxBracket';
import SubmitButton from '../SubmitButton'

import '../../index.css';
import { Redirect } from 'react-router';

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
      // choose the value to calculate
      const valueToCalculate = income >= bracket.to ? bracket.to : income;
      taxBrackets[index].tax = (valueToCalculate - bracket.from + 1) * bracket.taxRate;
      totalTax += taxBrackets[index].tax;
    } else {
      taxBrackets[index].tax = 0;
    }
  })
  return taxBrackets;
};

export default function CalculatorForm() {
  let [country, setCountry] = useState('Australia');
  let [year, setYear] = useState('2020 - 2021');
  let [income, setIncome] = useState('70000');
  let [taxDetails, setTaxDetails] = useState(taxBrackets2021);
  let [totalTax, setTotalTax] = useState(0);
  let [isFormOn, setIsFromOn] = useState(true)

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
    setIsFromOn(false);
  }

  function redirect() {
    setIsFromOn(true);
  }

  function breakdown () {
    return taxDetails.map((bracket, index) => {
      return <TaxBracket from={bracket.from} to={bracket.to} tax={bracket.tax} key={index}/>
    })
  };

  useEffect(() => {
    const taxObj = taxCalculator(taxBrackets2021, income)
    setTaxDetails(taxObj);
    let total = 0;
    taxObj.map(bracket => {
      total += bracket.tax;
    })
    setTotalTax(total)
  })

  if (isFormOn) {
    return (
      <div className="form">
        <div className="background background-padding">
          <h1>Tax-o-tron</h1>
          <p>The free and simple online tax calculator.</p>
          <div class="planetoid"></div>
          <div class="moon"></div>
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
        
            <SubmitButton />
          </form>
        </div>

      </div>
    )
  } else {
    return (
        <div className="result">
          <div className="calculator">
            <h2>Your tax results</h2> 
            <FormContent 
              _onChangeCountry={_onChangeCountry}
              _onChangeYear={_onChangeYear}
              _onChangeIncome={_onChangeIncome}
              country={country}
              year={year}
              income={income}
              disabled={true}
            />
            <a onClick={redirect}>Go back to previous screen</a>
          </div>
          <div className="background">
            <div class="planetoid"></div>
            <div class="moon"></div>
            <h3>Your estimated taxable income is:</h3>
            <p className="result-total">${totalTax}</p>
            <h3>Breakdown</h3>
  
            {breakdown()}
          
          </div>
        </div>
    )
  }
  
}