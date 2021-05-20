export default {
  label: 'Math - 1',
  id: 'math-1',
  list: [
    {
      type: 'sequence',
      label: 'Number Order',
      id: 'connect',
      commonData: {
        title: 'Connect the numbers in order',
        text: '2345, 6789, 5678, 4567, 45678, 12345, 23456, 56789, 34567'
      },
      data: [
        `2345, 6789, 5678, 4567, 45678, 12345, 23456, 56789, 34567`,

        `6 7 8 9 10
        9 10 11 12 13
        11 12 13 14 15
        7 8 9 10 11
        10 11 12 13 14
        8 9 10 11 12
        14 15 16 17 18 
        12 13 14 15 16
        16 17 18 19 20
        13 14 15 16 17
        `,
        `45 46 47 48 49
67 68 69 70 71
38 39 40 41 42
49 50 51 52 53
89 90 91 92 93
17 18 19 20 21
60 61 62 63 64
82 83 84 85 86
22 23 24 25 26
95 96 97 98 99`,

        `13 14 15 16 17
  26 27 28 29 30
  32 33 34 35 36
  44 45 46 47 48
  54 55 56 57 58
  62 63 64 65 66
  79 80 81 82 83
  49 50 51 52 53
  68 69 70 71 72
  75 76 77 78 79`,

        `32 33 34 35 36
 44 45 46 47 48
 54 55 56 57 58
 68 69 70 71 72
 75 76 77 78 79
 62 63 64 65 66
 79 80 81 82 83
 49 50 51 52 53
 13 14 15 16 17
 26 27 28 29 30`,

        `89 90 91 92 93
 17 18 19 20 21
 60 61 62 63 64
 82 83 84 85 86
 67 68 69 70 71
 38 39 40 41 42
 49 50 51 52 53
 22 23 24 25 26
 95 96 97 98 99
 45 46 47 48 49`
      ]
    },
    {
      type: 'match',
      label: 'Match Addition',
      id: 'match',
      commonData: {
        title: 'Match Addition'
      },
      data: [
        `5 + 5, 10
6 + 6, 12
4 + 4, 8
3 + 3, 6
7 + 7, 14
10 + 10, 20`,

        `6 + 7, 13
4 + 6, 10
10 + 4, 14
5 + 3, 8
7 + 5, 12
7 + 4, 11`,

        `7 + 7, 14
6 + 6, 12
10 + 3, 13
5 + 3, 8
5 + 5, 10
7 + 4, 11`,

        `15 + 4, 19
14 + 6, 20
17 + 4, 21
11 + 7, 18
9 + 7, 16
12 + 3, 15`,

        `20 + 4, 24
12 + 10, 22
17 + 8, 25
21 + 5, 26
15 + 8, 23
21 + 8, 29`
      ]
    },
    {
      type: 'match',
      label: 'Match Subtraction',
      id: 'match-2',
      commonData: {
        title: 'Match Subtraction'
      },
      data: [
        `8 - 2, 6
9 - 4, 5
5 - 4, 1
8 - 1, 7
8 - 4, 4
7 - 5, 2`,

        `11 - 2, 9
10 - 4, 6
10 - 5, 5
11 - 1, 10
13 - 2, 11
15 - 3, 12`,

        `19 - 7, 12
17 - 2, 15
19 - 6, 13
15 - 4, 11
18 - 2, 16
18 - 4, 14`,

        `25 - 4, 21
28 - 2, 26
29 - 7, 22
27 - 2, 25
29 - 6, 23
28 - 4, 24`,

        `35 - 3, 32
38 - 8, 30
39 - 6, 33
37 - 6, 31
38 - 4, 34
40 - 5, 35`
      ]
    },
    {
      type: 'match',
      label: 'Match Multiply',
      id: 'match-3',
      commonData: {
        title: 'Match Multiply'
      },
      data: [
        `3 × 7, 21
5 × 5, 25
2 × 9, 18
7 × 2, 14
4 × 6, 24
6 × 5, 30`,
        `4 × 7, 28
5 × 4, 20
2 × 5, 10
3 × 3, 9
2 × 3, 6
4 × 4, 16`,
        `2 × 7, 14
5 × 3, 15
2 × 8, 16
3 × 4, 12
6 × 3, 18
4 × 5, 20`,
        `2 × 9, 18
7 × 3, 21
4 × 8, 32
5 × 6, 30
5 × 5, 25
4 × 7, 28`,
        `3 × 9, 27
7 × 4, 28
4 × 6, 24
6 × 6, 36
10 × 3, 30
3 × 6, 18`
      ]
    },
    {
      type: 'match',
      label: 'Match Numbers',
      id: 'match-4',

      commonData: {
        title: 'Match Numbers'
      },
      data: [
        `seven, 7
five, 5
nine, 9
three, 3
eight, 8
six, 6`,

        `thirteen, 13
fifteen, 15
twelve, 12
seventeen, 17
eleven, 11
nineteen, 19`,

        `seventy, 70
fifty, 50
twenty, 20
forty, 40
ninety, 90,
sixty, 60`,

        `twenty-five, 25
thirty-two, 32
seventy-seven, 77
fifty-five, 55
sixty-four, 64
forty-six, 46`,

        `seventeen, 17
seventy, 70
fifty, 50
fifteen, 15
twenty, 20
twelve, 12`
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
          text: `3 + 3 = *6*
          3 + 2 = *5*
          2 x 3 = *6*
          2 x 2 = *4*
          10 - 5 = *5*
          14 - 10 = *4*
          8 - 2 = *6*
          5 + 1 = *6*
          9 - 5 = *4*
          6 - 2 = *4*`,
          options: '4, 5, 6'
        },
        {
          text: `5 + 5 = *10*
          3 + 3 = *6*
          4 x 2 = *8*
          10 - 4 = *6*
          4 + 4 = *8*
          11 - 1 = *10*
          13 - 5 = *8*
          5 x 2 = *10*
          2 x 3 = *6*
          6 + 2 = *8*`,
          options: '10, 6, 8'
        },
        {
          text: `5 + 4 = *9*
          3 + 6 = *9*
          4 x 3 = *12*
          15 - 4 = *11*
          4 + 7 = *11*
          11 - 2 = *9*
          13 - 1 = *12*
          5 + 6 = *11*
          3 x 3 = *9*
          6 x 2 = *12*`,
          options: '9, 11, 12'
        }
      ]
    },
    {
      label: 'Drag and drop numbers',
      type: 'matchByDragDrop',
      id: 'drag',
      commonData: {
        title: 'Fill the blanks by dragging the numbers.',
        styles: { fontSize: '1.5rem', dashWidth: 40 }
      },
      data: [
        `*2*, 3, 4, 5, 6
6, 7, 8, *9*, 10
*4*, 5, 6, 7, 8
1, 2, *3*, 4, 5
4, 5, 6, 7, *8*
*5*, *6*, 7, 8, 9`,

        `6, 7, 8, *9*, *10*
24, 25, *26*, *27*, *28*
18, 19, *20*, *21*, *22*
47, 48, *49*, *50*, *51*
54, 55, *56*, *57*, *58*`,

        `11, 12, *13*, 14, *15*
8, 9, *10*, *11*, *12*
95, 96, *97*, *98*, *99*
88, 89, *90*, *91*, *92*
91, 92, *93*, *94*, *95*`
      ]
    },
    {
      type: 'rightOne',
      label: 'Spelling',
      id: 'spell',

      data: {
        title: 'Pick the Correct Spelling',
        text: `eleven, elevan
fourteen, forteen
fifteen, fiveteen
seventeen, seveteen
nineteen, ninteen
thirteen, therteen
twenty, twonty
forty, fourty
fifty, fifity
hundred,  hundrad`
      }
    },
    {
      id: 'wordsearch',
      type: 'wordsearch',
      label: 'WordSearch: 1 - 10',
      data: {
        title: 'Find the words: one to ten',
        words: [
          { word: ['F', 'I', 'V', 'E'], marker: [5, 2, 5, 5] },
          { word: ['S', 'I', 'X'], marker: [4, 3, 6, 3] },
          { word: ['S', 'E', 'V', 'E', 'N'], marker: [2, 5, 6, 5] },
          { word: ['O', 'N', 'E'], marker: [6, 0, 6, 2] },
          { word: ['T', 'W', 'O'], marker: [4, 0, 6, 0] },
          { word: ['N', 'I', 'N', 'E'], marker: [3, 2, 3, 5] },
          { word: ['T', 'H', 'R', 'E', 'E'], marker: [1, 1, 5, 1] },
          { word: ['E', 'I', 'G', 'H', 'T'], marker: [0, 0, 4, 0] },
          { word: ['T', 'E', 'N'], marker: [1, 4, 3, 4] },
          { word: ['F', 'O', 'U', 'R'], marker: [0, 2, 0, 5] }
        ],
        table: [
          ['E', 'I', 'G', 'H', 'T', 'W', 'O'],
          ['S', 'T', 'H', 'R', 'E', 'E', 'N'],
          ['F', 'E', 'F', 'N', 'D', 'F', 'E'],
          ['O', 'V', 'T', 'I', 'S', 'I', 'X'],
          ['U', 'T', 'E', 'N', 'B', 'V', 'W'],
          ['R', 'X', 'S', 'E', 'V', 'E', 'N']
        ],
        lang: 'en',
        showWords: false
      }
    }
  ]
};
