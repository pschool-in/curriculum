export default {
  label: 'Fraction',
  id: 'fraction-2',
  list: [
    {
      type: 'numberInput',
      id: 'improper-mixed',
      label: 'Improper to Mixed',
      commonData: {
        title: 'Convert the below improper fraction to mixed fraction.',
        type: 'improperToMixed'
      },
      data: [
        `3/2, 5/4, 9/2, 7/3, 4/3, 7/2, 11/5, 7/5, 8/3, 10/3`,
        `17/10, 9/5, 21/5, 15/7, 6/5, 22/7, 33/5, 43/5, 17/3, 22/3`,
        `143/100, 101/100, 173/100, 167/100, 137/100, 347/100, 457/100, 661/100, 907/100, 941/100`
      ]
    },
    {
      type: 'numberInput',
      id: 'mixed-improper',
      label: 'Mixed to Improper',
      commonData: {
        title: 'Convert the below mixed fraction into improper fraction.',
        type: 'mixedToImproper'
      },
      data: [
        `3 1/2, 2 1/5, 1 2/5, 2 2/3, 3 1/3, 1 1/2, 1 1/4, 4 1/2, 2 1/3, 1 1/3`,
        `4 4/5, 6 1/5, 3 3/7, 2 2/7, 6 6/7, 5 3/10, 4 8/10, 6 9/10, 8 3/5, 3 4/5`,
        `6 1/100, 5 34/100, 1 43/100, 1 73/100, 1 67/100, 3 47/100, 4 57/100, 6 61/100, 9 7/100, 9 41/100`
      ]
    },
    {
      type: 'numberInput',
      id: 'simple-fraction',
      label: 'Simple Fraction',
      commonData: {
        title: 'Write the fraction in the lowest term.',
        type: 'simpleFraction'
      },
      data: [
        `2/6, 3/9, 2/4, 20/30, 4/8, 5/15, 11/44, 5/10, 15/20, 6/12`,
        `2/8, 5/25, 8/88, 7/35, 14/35, 28/35, 63/70, 42/70, 16/40, 32/40`,
        `10/20, 90/100, 100/300, 40/50, 30/1000, 70/100, 10/1000, 400/500, 110/1000, 10/700`
      ]
    },
    {
      type: 'numberInput',
      id: 'equal-fraction',
      label: 'Equal Fractions',
      commonData: {
        title: 'Fill in the empty boxes to form equal fractions.'
      },
      data: [
        {
          type: 'equalFraction',
          text: `1/2 3, 1/2 4, 1/2 2, 2/3 2, 3/4 2, 1/3 3, 1/3 2, 1/5 10, 2/5 5, 3/4 2`
        },
        {
          type: 'equalFraction2',
          text: `1/2 2, 1/2 3, 1/2 4, 2/3 2, 1/5 10, 2/5 5, 3/4 2, 3/4 2, 1/3 3, 1/3 2`
        },
        {
          type: 'equalFraction3',
          text: `1/2, 2/3, 5/6, 1/3, 1/8, 1/4, 3/5, 3/4, 1/3, 1/3`
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'frac-decimal',
      label: 'Fraction to Decimal',
      commonData: {
        title: 'Write the decimal equivalet of the faction.',
        type: 'fracToDeci'
      },
      data: [
        `1/2, 1/4, 1/5, 3/5, 7/10, 2/5, 3/4, 1/10, 3/10, 9/10`,
        `7/100, 3/1000, 99/100, 43/100, 432/1000, 43/1000, 2/100, 91/1000,43/100, 500/1000`,
        `20/25, 10/25, 40/50, 10/40, 100/1000, 25/100, 75/100, 30/100, 5/20, 36/60`,
        `3/2, 5/4, 16/10, 5/2, 7/5, 10/4, 9/3, 7/4, 10/4, 9/2`
      ]
    },
    {
      type: 'numberInput',
      id: 'decimal-frac',
      label: 'Decimal to Fraction',
      commonData: {
        title: 'Write the fraction equivalent of the decimal number.',
        type: 'deciToFrac'
      },
      data: [
        `0.5, 0.25, 0.2, 0.7, 0.75, 0.8, 0.4, 0.9, 0.1, 0.3`,
        `1.5, 1.25, 2.5, 1.2, 3.5, 1.7, 1.3, 4.5, 1.75, 2.25`,
        `0.01, 0.34, 0.001, 0.11, 0.034, 0.105, 0.789, 0.99, 0.43, 0.555`
      ]
    }
  ]
};
