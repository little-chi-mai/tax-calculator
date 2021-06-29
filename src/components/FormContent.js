import React from 'react';

export default function FormContent(props) {

  function _onChangeCountry(e) {
    props._onChangeCountry(e.target.value);
  }

  function _onChangeYear(e) {
    props._onChangeYear(e.target.value);
  }
  function _onChangeIncome(e) {
    console.log("INCOME CHANGING");
    props._onChangeIncome(parseInt(e.target.value));
  }

  return (
    <>
      <label htmlFor="country">
        Select your country of residence *
      </label>
      <select className="form-input" value={props.country} disabled={props.disabled} name="country" id="country" onChange={_onChangeCountry}>
        <option value="australia">Australia</option>
        <option value="vietnam">Vietnam</option>
      </select>

      <label htmlFor="year">Select an income year *</label>
      <select 
        className="form-input" 
        value={props.year} 
        disabled={props.disabled}  name="year" 
        id="year" 
        onChange={_onChangeYear}
      >
        <option value="2020 - 2021">2020 - 2021</option>
        <option value="2019 - 2020">2019 - 2020</option>
      </select>

      <label>
        Enter your total taxable income for the income year *
        <div disabled={props.disabled}  class="input-wrapper form-input">
          <p>$</p>
          <input 
            value={props.income} 
            disabled={props.disabled}  type="number" 
            placeholder="Amount" 
            onChange={_onChangeIncome} 
            required
          />
        </div>
      </label>
    </>
  )
}