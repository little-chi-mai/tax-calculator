// tax documentations with different countries and different financial year
// "fy21": equal to 2020 - 2021 bracket
const TaxBrackets = {
  au: {
    fy21: [
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
    fy20: [
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
    ]
  },
  us: {
    fy21: [
      {
        from: 0,
        to: 9875,
        taxRate: 0.1,
        tax: 0
      },
      {
        from: 9876,
        to: 40125,
        taxRate: 0.12,
        tax: 0
      },
      {
        from: 40126,
        to: 85525,
        taxRate: 0.22,
        tax: 0
      },
      {
        from: 85526,
        to: 163300,
        taxRate: 0.24,
        tax: 0
      },
      {
        from: 163301,
        to: 207350,
        taxRate: 0.32,
        tax: 0
      },
      {
        from: 207351,
        to: 518400,
        taxRate: 0.35,
        tax: 0
      },
      {
        from: 518401,
        to: Infinity,
        taxRate: 0.37,
        tax: 0
      },
    ], 
    fy20: [
      {
        from: 0,
        to: 9875,
        taxRate: 0.1,
        tax: 0
      },
      {
        from: 9876,
        to: 40125,
        taxRate: 0.12,
        tax: 0
      },
      {
        from: 40126,
        to: 85525,
        taxRate: 0.22,
        tax: 0
      },
      {
        from: 85526,
        to: 163300,
        taxRate: 0.24,
        tax: 0
      },
      {
        from: 163301,
        to: 207350,
        taxRate: 0.32,
        tax: 0
      },
      {
        from: 207351,
        to: 518400,
        taxRate: 0.35,
        tax: 0
      },
      {
        from: 518401,
        to: Infinity,
        taxRate: 0.37,
        tax: 0
      },
    ], 
  }
  
}

export default TaxBrackets;