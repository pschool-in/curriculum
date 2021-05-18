export default {
  label: 'Numbers',
  id: 'numbers',
  list: [
    {
      type: 'compare',
      id: 'compare',
      label: 'Compare Numbers',
      commonData: {
        fontSize: '2.5rem',
        type: 'math',
        probType: 'compare'
      },
      data: [
        {
          pattern: 'x = x'
        },
        {
          pattern: 'sx = s0 + x'
        },
        {
          pattern: 'sx + x = sx + x'
        },
        {
          pattern: 'x0 = x0'
        },
        {
          pattern: 'xx = xx'
        },
        {
          pattern: 's0 + x = s0 + x'
        },
        {
          pattern: 'x + x = x + x'
        },
        {
          pattern: 'x00 = x00'
        },
        {
          pattern: 'st + x = st + x'
        },
        {
          pattern: 'st - x = st - x'
        },
        {
          pattern: 'x + x - x = x + x - x'
        }
      ]
    },
    {
      type: 'rightOne',
      id: 'biggest',
      label: 'Biggest Number',
      commonData: {
        title: 'Select the Biggest Number',
        fontSize: '2.5rem',
        noCaps: true,
        type: 'math',
        probType: 'biggest'
      },
      data: [
        {
          pattern: 'x'
        },
        {
          pattern: 'x0'
        },
        {
          pattern: 'xx'
        },
        {
          pattern: 'xx + 5'
        },
        {
          pattern: 'x0 + x'
        },
        {
          pattern: 'x + x'
        },
        {
          pattern: 'x00'
        }
      ]
    },
    {
      type: 'rightOne',
      id: 'smallest',
      label: 'Smallest Number',
      commonData: {
        title: 'Select the Smallest Number',
        fontSize: '2.5rem',
        noCaps: true,
        type: 'math',
        probType: 'smallest'
      },
      data: [
        {
          pattern: 'x'
        },
        {
          pattern: 'x0'
        },
        {
          pattern: 'xx'
        },
        {
          pattern: 'xx + 5'
        },
        {
          pattern: 'x0 + x'
        },
        {
          pattern: 'x + x'
        },
        {
          pattern: 'x00'
        }
      ]
    },
    {
      type: 'sorting',
      id: 'ascending',
      label: 'Ascending Order',
      commonData: {
        title: 'Rearrange the numbers in ascending order.',
        fontSize: '2rem',
        noCaps: true,
        type: 'math',
        probType: 'ascending'
      },
      data: [
        {
          pattern: 'x'
        },
        {
          pattern: 'x0'
        },
        {
          pattern: 'xx'
        },
        {
          pattern: 'xx + 5'
        },
        {
          pattern: 'x0 + x'
        },
        {
          pattern: 'x + x'
        },
        {
          pattern: 'x00'
        }
      ]
    },
    {
      type: 'sorting',
      id: 'descending',
      label: 'Descending Order',
      commonData: {
        title: 'Rearrange the numbers in descending order.',
        fontSize: '2rem',
        noCaps: true,
        type: 'math',
        probType: 'descending'
      },
      data: [
        {
          pattern: 'x'
        },
        {
          pattern: 'x0'
        },
        {
          pattern: 'xx'
        },
        {
          pattern: 'xx + 5'
        },
        {
          pattern: 'x0 + x'
        },
        {
          pattern: 'x + x'
        },
        {
          pattern: 'x00'
        }
      ]
    }
  ]
};
