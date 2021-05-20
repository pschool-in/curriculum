export default {
  label: 'Fraction',
  id: 'fraction',
  list: [
    {
      type: 'fraction',
      id: 'fraction',
      label: 'Fraction',
      data: [
        {
          type: 'circle'
        },
        {
          type: 'rect'
        },
        {
          type: 'hexogon'
        },
        {
          type: 'petals'
        }
      ]
    },
    {
      type: 'fraction',
      id: 'fraction-read',
      label: 'Read Fraction',
      commonData: { probType: 'read' },
      data: [
        {
          type: 'circle'
        },
        {
          type: 'rect'
        },
        {
          type: 'hexogon'
        },
        {
          type: 'petals'
        }
      ]
    },
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
        `1 = 1/2
1 = 2/2
1/2 = 1/4
1/4 = 3/4
1 = 3/3
1 = 2/3
3/4 = 3/3
2/4 = 1/2
4/4 = 1
1/2 = 2/3`,

        `2/5 = 3/5
3/6 = 4/6
7/9 = 5/9
4/6 = 5/6
3/7 = 4/7
2/5 = 4/5
2/9 = 5/9
4/6 = 2/6
6/7 = 4/7
3/5 = 4/5`,

        `3/4 = 1/2
7/9 = 1/2
3/6 = 1/2
2/9 = 1/2
4/6 = 1/2
6/7 = 1/2
3/7 = 1/2
2/10 = 1/2
2/5 = 1/2
3/6 = 1/2`,

        `2/5 = 3/10
3/4 = 4/6
7/9 = 5/10
3/6 = 5/6
3/7 = 4/8
2/10 = 4/5
2/9 = 5/10
4/6 = 2/4
6/7 = 4/8
3/6 = 4/5`
      ]
    },
    {
      type: 'match',
      id: 'match',
      label: 'Match Equals',
      commonData: {
        title: 'Match Equals',
        allowFrac: true
      },
      data: [
        `0.7, 7/10
0.5, 1/2
0.2, 1/5
0.4, 2/5
0.9, 9/10`,

        `0.7, 3/10 + 4/10
0.5, 1/4 + 1/4
0.2, 1/10 + 1/10
0.4, 2/10 + 2/10
0.9, 5/10 + 4/10`,

        `2/4, 1/2
2/8, 1/4
2/6, 1/3
2/10, 1/5
6/8, 3/4`,

        `1 1/2 , 3/2
2 1/2, 5/2
3 1/2, 7/2
4 1/2, 9/2
5 1/2, 11/2`
      ]
    },
    {
      label: 'Ascending Order',
      type: 'sorting',
      id: 'sort',
      commonData: {
        title:
          'Drag and drop and arrange the numbers. The smallest should come on top.',
        allowFrac: true
      },
      data: [
        '1/10, 3/10, 5/10, 8/10, 9/10',
        '1/8, 3/8, 5/8, 7/8, 8/8',
        '1/5, 1/4,1/2,3/4,4/5',
        '0.02, 0.04, 0.2, 0.4, 2',
        `1/8, 1/5, 0.5, 0.7, 8/10`
      ]
    },
    {
      type: 'rightOne',
      label: 'Pick the Biggest',
      id: 'odd-one-out',
      commonData: {
        title: `Pick the biggest Number`,
        noCaps: true
      },
      data: [
        `1/2, 1/3, 1/4, 1/5
        5/9, 4/9, 3/9, 2/9
        10/11, 4/11, 7/11, 9/11
        5/7, 2/7, 3/7, 4/7
        11/13, 2/13, 10/13, 4/13`,

        ` 4/7, 4/13, 4/11, 4/9
        13/15, 13/20, 13/18, 13/25
        7/10, 7/20, 7/15, 7/11
        5/6, 5/7, 5/8, 5/9
        11/15, 11/20, 11/30, 11/23`,

        `10/4, 2 1/4, 2.3, 2.03
        3 1/3, 3, 8/3, 3.2
        4, 15/4, 3.9, 12/4
        7/8, 0.6, 0.75, 1/4
        5 1/2, 10/2, 5.02, 5.2`,

        `1/10 + 5/10, 2/10 + 2/10, 2/10 + 3/10, 1/10 + 4/10
        5/10 - 1/10, 2/10 - 2/10, 3/10 - 2/10, 4/10 - 1/10
        2/3 + 1/3, 1/4 + 1/4, 2/5 + 1/5, 3/7 + 2/7
        3/5 + 5, 2/5 + 4, 1/5 + 5, 2/5 + 5
        3 + 2/3, 2 + 4/5, 3 + 2/5, 3 + 1/3`
      ]
    }
  ]
};
