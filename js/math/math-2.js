export default {
  label: 'Math - 2',
  id: 'math-2',
  list: [
    {
      label: 'Arrange Number Names',
      type: 'sorting',
      id: 'sort',
      commonData: {
        title:
          'Drag and drop and arrange the numbers. The smallest should come on top.'
      },
      data: [
        'one, three, five, seven, eight, nine, ten',
        'fifty five, fifty nine, sixty one, sixty five, sixty seven, sixty nine',
        'eleven, twelve, thirteen, fifteen, sixteen, eighteen, nineteen',
        'twenty two, twenty five, twenty six, thirty two,  thirty five,  thirty six',
        'twenty, forty, sixty, seventy, ninety, hundred'
      ]
    },
    {
      label: 'Odd vs Even Numbers',
      type: 'group',
      id: 'group',
      commonData: {
        title:
          'Classify the below numbers as Odd and Even. Drag and drop them in the right boxes',
        types: ['Even', 'Odd']
      },
      data: [
        ['12, 14, 16, 18, 20', '11, 13, 15, 17, 19'],
        ['44, 66, 88, 98, 22', '33,11, 55, 77, 99'],
        ['48, 52, 56, 68, 64', '49, 51, 57, 59, 61'],
        ['20, 40, 60, 80, 50', '25, 45, 65, 75, 85'],
        ['18, 28, 12, 32, 38', '91, 83, 75, 67, 59']
      ]
    },
    {
      type: 'match',
      label: 'Match Multiply',
      id: 'match-multiply',
      editable: true,
      commonData: {
        title: 'Match Multiply'
      },
      data: [
        `7 × 7, 49
6 × 9, 54
5 × 9, 45
8 × 6, 48
6 × 6, 36
7 × 6, 42
8 × 7, 56`,

        `8 × 8, 64
7 × 7, 49
6 × 6, 36
9 × 9, 81
4 × 4, 16
10 × 10, 100
5 × 5, 25`,

        `9 × 8, 72
7 × 6, 42
8 × 6, 48
6 × 9, 54
9 × 4, 36
9 × 7, 63
5 × 9, 45`,

        `8 × 8, 64
9 × 9, 81
7 × 7, 49
6 × 6, 36
5 × 5, 25
4 × 4, 16
3 × 3, 9`,

        `8 × 6, 48
9 × 7, 63
7 × 7, 49
6 × 9, 54
5 × 8, 40
6 × 4, 24
9 × 8, 72`
      ]
    },
    {
      type: 'match',
      label: 'Match Division',
      id: 'match-divide',
      commonData: {
        title: 'Match Division'
      },
      data: [
        `49 ÷ 7, 7
54 ÷ 9, 6
45 ÷ 9, 5
48 ÷ 6, 8
36 ÷ 4, 9
32 ÷ 8, 4`,

        `36 ÷ 6, 6
56 ÷ 7, 8
81 ÷ 9, 9
66 ÷ 6, 11
70 ÷ 7, 10
49 ÷ 7, 7`,

        `64 ÷ 8, 8
81 ÷ 9, 9
49 ÷ 7, 7
36 ÷ 6, 6
25 ÷ 5, 5
16 ÷ 4, 4
9  ÷ 3, 3`,

        `48 ÷ 8, 6
63 ÷ 9, 7
45 ÷ 9, 5
54 ÷ 6, 9
40 ÷ 5, 8
24 ÷ 6, 4
99  ÷ 9, 11`,

        `72 ÷ 8, 9
42 ÷ 6, 7
48 ÷ 6, 8
54 ÷ 9, 6
36 ÷ 9, 4
45 ÷ 9, 5
66  ÷ 6, 11`
      ]
    },
    {
      label: 'Number Sequence',
      type: 'matchByDragDrop',
      id: 'complete',
      commonData: {
        title:
          'Fill the sequence by moving the numbers to the respective boxes',
        styles: { fontSize: '1.5rem', dashWidth: 40 }
      },
      data: [
        `5, 10, 15, *20*, *25*, *30*
7, 14, 21, *28*, *35*, *42*
9, 18, 27, *36*, *45*, *54*, *63*`,

        `20, 22, 24, *26*, *28*, *30*
12, 15, 18, *21*, *24*, *27*
20, 25, 30, *35*, *40*, *45*, *50*`,

        `28, 32, 36, *40*, *44*, *48*
6, 12, 18, *24*, *30*, *36*, *42*
6, 9, 12, *15*, *18*, *21*`
      ]
    },
    {
      label: 'Fill Up',
      type: 'fillupOptions',
      id: 'fillup',
      commonData: {
        title: 'Click on the blanks and fill it with right option'
      },
      data: [
        {
          text: `5 × 5 = *25*
2 × 11 = *22*
35 - 10 = *25*
12 + 10 = *22*
*25* ÷ 5 = 5
4 × 6 = *24*
18 + 6 = *24*
*24* ÷ 6 = 4
15 + 10 = *25*
11 + 11 = *22*`,
          options: '25, 24, 22'
        },
        {
          text: `9 × 5 = *45*
7 × 6 = *42*
35 + 10 = *45*
38 + 10 = *48*
*45* ÷ 5 = 9
8 × 6 = *48*
52 - 10 = *42*
*48* ÷ 6 = 8
58 - 10 = *48*
*42* ÷ 6 = 7`,
          options: '45, 48, 42'
        },
        {
          text: `10 × 5 = *50*
30 + 30 = *60*
35 + 35 = *70*
100 - 30 = *70*
100 - 40 = *60*
70 - 20 = *50*
50 - 0 = *50*
10 × 7 = *70*
58 + 12 = *70*
10 × 6 = *60*`,
          options: '50, 60, 70'
        }
      ]
    }
  ]
};
