export default {
  label: 'Divisibility Test',
  id: 'divisibility-test',
  list: [
    {
      id: 'notes',
      type: 'passage',
      label: 'Divisibility Test - Notes',
      data: {
        title: 'Divisible By',
        text: `We say a number is "divisible by" another number, if we divide, there won't be any remainder.
For example: 9 is divisible by 3. 10 is not divisible by 3
# Divisibility Rules
Divisibility rules are used to check whether a particular number is divisible by another. All numbers are divisible by 1 and the same number.
# Divisible by 2:
A number is divisible by 2, if the last digit is even. (2, 4, 6, 8, 0)
# Divisible by 3:
A number is divisible by 3 if the sum of the digits is divisible by 3. 381 is divisible by 3 because 3+8+1=12 and 12 is divisible by 3.
# Divisible by 4:
A number is divisible by 4, if the last 2 digits are divisible by 4. For example 99948 is divisible by 4, because the last 2 digits (48) is divisible by 4.
# Divisible by 5:
A number is divisible by 5, if the last number is 0 or 5.
# Divisible by 6:
A number is divisible by 6, if the number is divisible by both 2 and 3.
# Divisible by 10:
A number is divisible by 10, if the number ends with zero.
          `
      }
    },
    {
      label: 'Divisible by 2',
      type: 'group',
      id: 'divisible-2',
      data: {
        title: 'Classify the below as divisible by 2 or not.',
        fontSize: '1.5rem',
        types: [
          {
            name: 'Divisible by 2',
            text: '30, 142, 286, 712, 998, 528, 700, 888'
          },
          {
            name: 'Not divisible',
            text: '71, 133, 147, 717, 999, 495'
          }
        ]
      }
    },
    {
      label: 'Divisible by 3',
      type: 'group',
      id: 'divisible-3',
      data: {
        title: 'Classify the below as divisible by 3 or not.',
        types: [
          {
            name: 'Divisible by 3',
            text: '30, 132, 285, 702, 999, 567, 366'
          },
          {
            name: 'Not divisible',
            text: '71, 133, 146, 717, 901, 554, 644'
          }
        ]
      }
    },
    {
      label: 'True or False',
      id: 'truefalse',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as True or False.',
        types: [
          {
            name: 'True',
            text: `40 is divisible by 10.
                15 is divisible by 5.
                18 is divisible by 2.
                18 is divisible by 3.
                  30 is divisible by 3.`
          },
          {
            name: 'False',
            text: `18 is divisible by 4.
                15 is divisible by 2.
                10 is divisible by 3.
                14 is divisible by 4.
                11 is divisible by 3.`
          }
        ]
      }
    },
    {
      label: 'Divisible by 4',
      type: 'group',
      id: 'divisible-4',
      data: {
        title: 'Classify the below as divisible by 4 or not.',
        types: [
          {
            name: 'Divisible by 4',
            text: '80, 132, 232, 504, 220, 712, 336'
          },
          {
            name: 'Not divisible',
            text: '58, 138, 114, 710, 754'
          }
        ]
      }
    },
    {
      label: 'Divisible by 5',
      type: 'group',
      id: 'divisible-5',
      data: {
        title: 'Classify the below as divisible by 5 or not.',
        types: [
          {
            name: 'Divisible by 5',
            text: '80, 130, 95, 195, 220, 745, 335'
          },
          {
            name: 'Not divisible',
            text: '58, 138, 114, 711, 754'
          }
        ]
      }
    },
    {
      label: 'Divisible by 6',
      type: 'group',
      id: 'divisible-6',
      data: {
        title: 'Classify the below as divisible by 6 or not.',
        types: [
          {
            name: 'Divisible by 6',
            text: '132, 654, 336, 612, 222, 390, 474'
          },
          {
            name: 'Not divisible',
            text: '58, 135, 113, 711, 754'
          }
        ]
      }
    },
    {
      label: 'True or False - 2',
      id: 'truefalse-2',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as True or False.',
        types: [
          {
            name: 'True',
            text: `30 is divisible by 6.
                  5 is divisible by 5.
                  13 is divisible by 1.
                  12 is divisible by 6.
                  10 is divisible by 5.`
          },
          {
            name: 'False',
            text: `32 is divisible by 6.
                51 is divisible by 5.
                13 is divisible by 6.
                30 is divisible by 4.
                5 is divisible by 10.`
          }
        ]
      }
    },
    {
      label: 'Divisible by 10',
      type: 'group',
      id: 'divisible-10',
      data: {
        title: 'Classify the below as divisible by 10 or not.',
        types: [
          {
            name: 'Divisible by 10',
            text: '130, 650, 330, 610, 220, 390, 470'
          },
          {
            name: 'Not divisible',
            text: '58, 135, 113, 711, 754'
          }
        ]
      }
    },
    {
      label: 'True or False - 3',
      id: 'truefalse-3',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as True or False.',
        types: [
          {
            name: 'True',
            text: `360 is divisible by 6.
                  545 is divisible by 5.
                  913 is divisible by 1.
                  912 is divisible by 6.
                  180 is divisible by 5. `
          },
          {
            name: 'False',
            text: `232 is divisible by 6.
                519 is divisible by 5.
                813 is divisible by 6.
                630 is divisible by 4.
                665 is divisible by 10.`
          }
        ]
      }
    }
  ]
};
