import React, {useState, useEffect} from 'react';

import InfoBox from '../InfoBox';
import FormContent from '../FormContent';
import Detail from '../Detail';
import SubmitButton from '../SubmitButton'
import TaxFormula from '../../helpers/TaxFormula';
import TaxBrackets from '../../helpers/TaxBrackets';
import currencyFormatter from '../../helpers/CurrencyFormatter';

import '../../index.css';

export default function CalculatorForm() {
  // set default value of 'au' and 'fy21'
  let [country, setCountry] = useState('au');
  let [year, setYear] = useState('fy21');
  let [income, setIncome] = useState(0);
  let [taxDetails, setTaxDetails] = useState(TaxFormula['fy21']);
  let [totalTax, setTotalTax] = useState(0);
  // state of showing Form screen
  let [isFormOn, setIsFromOn] = useState(true);

  function breakdown () {
    return taxDetails.map((bracket, index) => 
      <Detail from={bracket.from} to={bracket.to} tax={bracket.tax} key={index}/>
    )
  };

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

  function countTotalTax(taxObj) {
    let total = 0;
    taxObj.forEach(bracket => {
      total += bracket.tax;
    })
    return total; 
  }

  useEffect(() => {
    // get Tax Object by country, year and income
    const taxObj = TaxFormula.calculator(TaxBrackets[country][year], income)
    setTaxDetails(taxObj);
    setTotalTax(countTotalTax(taxObj));
  }, [country, year, income])

  if (isFormOn) {
    return (
      <div className="form">
        <div className="background background-padding">
          <h1>Tax-o-tron</h1>
          <p>The free and simple online tax calculator.</p>
          <div className="planetoid"></div>
          <div className="moon"></div>
        </div>
        <div className="calculator">
          <form onSubmit={_onSubmit}>
            <h2>Calculate your tax</h2>
            <InfoBox text="Fields marked with * are mandatory"/>

            <FormContent 
              _onChangeCountry={_onChangeCountry}
              _onChangeYear={_onChangeYear}
              _onChangeIncome={_onChangeIncome}
              country={country}
              year={year}
              income={income}
              disabled={false}
            />
        
            <SubmitButton text="Calculate" />
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
            <button onClick={redirect}>Go back to previous screen</button>
          </div>
          <div className="background">
            <div className="planetoid"></div>
            <div className="moon"></div>
            <h3>Your estimated tax is:</h3>
            <p className="result-total">{currencyFormatter(totalTax, 2)}</p>
            <h3>Breakdown</h3>
  
            {breakdown()}
          
          </div>
        </div>
    )
  }
  
}