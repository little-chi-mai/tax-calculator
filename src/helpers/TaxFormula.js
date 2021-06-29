const TaxFormula = {
  brackets2021: [
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
  ],

  calculator: function(taxBrackets, income) {
    taxBrackets.forEach((bracket, index) => {
  
      if (income >= bracket.from) {
        // choose the value to calculate
        const valueToCalculate = income >= bracket.to ? bracket.to : income;
        taxBrackets[index].tax = (valueToCalculate - bracket.from + 1) * bracket.taxRate;
      } else {
        taxBrackets[index].tax = 0;
      }
    })
    return taxBrackets;
  }
}

export default TaxFormula;