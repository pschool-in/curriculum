export default {
  label: 'Math Workouts',
  id: 'math-workout',
  list: [
    {
      type: 'workouts',
      id: 'decimal-to-binary',
      label: 'Decimal To Binary',
      data: {
        type: 'decimalToBinary',
        label: 'Decimal To Binary',
        samples: [
          '100',
          '1000',
          '1024',
          '1111',
          '1038',
          '1126',
          '484',
          '786',
          '2020',
          '2048'
        ]
      }
    },
    {
      type: 'workouts',
      id: 'decimal-To-hex',
      label: 'Decimal To Hexadecimal',
      data: {
        type: 'decimalToHex',
        label: 'Decimal To Hexadecimal',
        samples: [
          '90003169',
          '146',
          '482',
          '1784',
          '984',
          '2048',
          '2030',
          '2842',
          '3000',
          '3212'
        ]
      }
    },
    {
      type: 'workouts',
      id: 'binary-to-decimal',
      label: 'Binary To Decimal',
      data: {
        type: 'binaryToDecimal',
        label: 'Binary To Decimal',
        samples: [
          '100',
          '111111',
          '1111100',
          '101010',
          '11001100',
          '00110011',
          '10001110',
          '00011',
          '11100011',
          '00001111'
        ]
      }
    },
    {
      type: 'workouts',
      id: 'hex-to-decimal',
      label: 'Hexadecimal To Decimal',
      data: {
        type: 'hexToDecimal',
        label: 'Hexadecimal To Decimal',
        samples: [
          '100',
          'ff',
          'ff00',
          '7dea',
          'abcdedf',
          'abf200',
          '1ed2',
          'ff111ab',
          '111adca',
          'ffff'
        ]
      }
    },
    {
      type: 'workouts',
      id: 'multiply',
      label: 'Multiplication',
      data: {
        type: 'multiply',
        label: 'Multiplication',
        samples: [
          '55*65',
          '70*45',
          '111*122',
          '248*125',
          '333*333',
          '121*134',
          '2048*1048',
          '245*242',
          '1234*1234',
          '43*1234'
        ]
      }
    },
    {
      type: 'workouts',
      id: 'divide',
      label: 'Divide',
      data: {
        type: 'divide',
        label: 'Divide',
        samples: [
          '1096/12',
          '1298/12',
          '2432/143',
          '4321/24',
          '6543/25',
          '1525/15',
          '1020/10',
          '1850/18',
          '2342/35',
          '1234/11'
        ]
      }
    },
    {
      type: 'workouts',
      id: 'square-root',
      label: 'Square Root',
      data: {
        type: 'squareRoot',
        label: 'Square Root',
        samples: [
          '100',
          '256',
          '552049',
          '14400',
          '5625',
          '3025',
          '2048',
          '65536',
          '117649',
          '49284'
        ]
      }
    },
    {
      type: 'workouts',
      id: 'lcm',
      label: 'LCM',
      data: {
        type: 'lcm',
        label: 'LCM',
        samples: [
          '100,50,80',
          '30,40,80',
          '100,250,500',
          '120,35,86',
          '135,25,120',
          '25,35,45',
          '20,30,50',
          '240,345,560',
          '100,200,300',
          '800,560,780'
        ]
      }
    },
    {
      type: 'workouts',
      id: 'hcf',
      label: 'HCF',
      data: {
        type: 'hcf',
        label: 'HCF',
        samples: [
          '100,50,80',
          '30,40,80',
          '100,250,500',
          '120,35,86',
          '135,25,120',
          '25,35,45',
          '20,30,50',
          '100,200,300',
          '240,345,560',
          '120,230,450'
        ]
      }
    }
  ]
};
