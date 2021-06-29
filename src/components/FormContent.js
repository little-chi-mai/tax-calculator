import React from 'react';


export default function FormContent(props) {

  function _onChangeCountry(e) {
    props._onChangeCountry(e.target.value);
  }

  function _onChangeYear(e) {
    props._onChangeYear(e.target.value);
  }
  function _onChangeIncome(e) {
    props._onChangeIncome(e.target.value);
  }

  return (
    <>
      <label htmlFor="country">
        Select your country of residence *
      </label>
      <select className="form-input" value={props.country} disabled={props.disabled} name="country" id="country" onChange={_onChangeCountry}>
        <option value="australia">Australia</option>
      </select>

      <label htmlFor="year">Select an income year *</label>
      <select 
        className="form-input" 
        value={props.year} 
        disabled={props.disabled}  name="year" 
        id="year" 
        onChange={_onChangeYear}
      >
        <option>2020 - 2021</option>
      </select>

      <label>
        Enter your total taxable income for the income year *
        <div disabled={props.disabled}  className="input-wrapper">
          <p></p>
          <input 
            className="form-input"
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