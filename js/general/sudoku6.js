export default {
  label: 'More Sudoku 6 x 6',
  id: 'sudoku6',
  defs: {
    data1: [
      `034000
000024
053000
400105
601200
000041`,

      `024006
060034
500600
601503
203000
000010`,

      `300010
020500
046000
050460
004002
500003`,

      `003600
010052
020500
360000
502010
100030`,

      `300000
000205
450600
060041
002450
040002`,

      `503000
000020
306002
001605
000206
012000`,

      `000005
061040
100250
206010
040001
000620`,

      `050002
000004
004100
103200
200060
041520`,

      `002400
040306
500240
030005
000014
450000`,

      `004600
030000
340200
502060
250030
000001`
    ],

    data2: [
      `000060
300000
020030
600400
010304
000005`,

      `000200
060000
003100
406500
020001
000040`,

      `040000
000520
030005
000060
510040
600000`,

      `005000
200006
010000
004000
000005
030014`,

      `030010
600002
003400
000000
000650
004000`,

      `000002
000600
031040
000000
040300
050006`,

      `106000
000004
000003
560000
000000
004200`,

      `000060
002050
013004
006000
000000
400005`,

      `050001
004600
400050
100004
043000
060240`,

      `504000
600035
120000
000600
001003
403062`
    ]
  },
  list: [
    {
      type: 'sudoku',
      id: 'collection-1',
      label: 'Collection - 1',
      commonData: { type: '6x6-numbers', title: 'Sudoku (6 x 6)' },
      data: [
        {
          refs: 'data1~0'
        },
        {
          refs: 'data1~1'
        },
        {
          refs: 'data1~2'
        },
        {
          refs: 'data1~3'
        },
        {
          refs: 'data1~4'
        },
        {
          refs: 'data1~5'
        },
        {
          refs: 'data1~6'
        },
        {
          refs: 'data1~7'
        },
        {
          refs: 'data1~8'
        },
        {
          refs: 'data1~9'
        }
      ]
    },
    {
      type: 'sudoku',
      id: 'collection-2',
      label: 'Collection - 2',
      commonData: { type: '6x6-numbers', title: 'Sudoku (6 x 6)' },
      data: [
        {
          refs: 'data2~0'
        },
        {
          refs: 'data2~1'
        },
        {
          refs: 'data2~2'
        },
        {
          refs: 'data2~3'
        },
        {
          refs: 'data2~4'
        },
        {
          refs: 'data2~5'
        },
        {
          refs: 'data2~6'
        },
        {
          refs: 'data2~7'
        },
        {
          refs: 'data2~8'
        },
        {
          refs: 'data2~9'
        }
      ]
    },
    {
      type: 'sudoku',
      id: 'fruits-collection-1',
      label: 'Fruits Collection - 1',
      commonData: { type: '6x6-images', title: 'Sudoku (6 x 6)' },
      data: [
        {
          refs: 'data1~0'
        },
        {
          refs: 'data1~1'
        },
        {
          refs: 'data1~2'
        },
        {
          refs: 'data1~3'
        },
        {
          refs: 'data1~4'
        },
        {
          refs: 'data1~5'
        },
        {
          refs: 'data1~6'
        },
        {
          refs: 'data1~7'
        },
        {
          refs: 'data1~8'
        },
        {
          refs: 'data1~9'
        }
      ]
    },
    {
      type: 'sudoku',
      id: 'fruits-collection-2',
      label: 'Fruits Collection - 2',
      commonData: { type: '6x6-images', title: 'Sudoku (6 x 6)' },
      data: [
        {
          refs: 'data2~0'
        },
        {
          refs: 'data2~1'
        },
        {
          refs: 'data2~2'
        },
        {
          refs: 'data2~3'
        },
        {
          refs: 'data2~4'
        },
        {
          refs: 'data2~5'
        },
        {
          refs: 'data2~6'
        },
        {
          refs: 'data2~7'
        },
        {
          refs: 'data2~8'
        },
        {
          refs: 'data2~9'
        }
      ]
    }
  ]
};
