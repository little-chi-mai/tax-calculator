const TaxFormula = {
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