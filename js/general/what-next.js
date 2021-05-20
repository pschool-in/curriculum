export default {
  label: 'What Comes Next',
  id: 'what-next',
  list: [
    {
      type: 'whatNext',
      id: 'letters',
      label: 'Letters',
      commonData: {
        type: 'letters'
      },
      data: [
        [
          ['A, B, C, D', 'E, F, G, C'],
          ['D, E, F, G', 'H, I, J, K'],
          ['S, T, U, V', 'W, R, Q, M'],
          ['G, H, I , J', 'K, E, F, L'],
          ['K, L, M, N', 'O, P, S, T'],
          ['A, E, I, O', 'U, T, B, C']
        ],
        [
          ['A, a, B, b, C', 'c, C, b, B'],
          ['D, d, E', 'e, f, g, E'],
          ['K, k, L', 'l, m, M, n'],
          ['S, s, T', 't, r, R, s'],
          ['W, w, X', 'x, y, Y, z']
        ],
        [
          ['A, B, A, B, A', 'B, A, C, D'],
          ['U, V, U, V, U', 'V, U, W, w'],
          ['c, d, c, d, c', 'd, c, e, f'],
          ['g, h, g, h, g', 'h, g, i, j'],
          ['X, Y, X, Y, X', 'Y, X, W, Z']
        ],
        [
          ['A, C, E', 'G, H, D, F'],
          ['H, J, L', 'N, M, O, P'],
          ['D, F, H', 'J, I, K, M'],
          ['K, M, O', 'Q, R, P, N'],
          ['R, T, V', 'X, W, S, Q']
        ],
        [
          ['G, F, E', 'D, H, E, C'],
          ['D, C, B', 'A, E, F, X'],
          ['H, G, F', 'E, I, A, U'],
          ['X, W, V', 'U, S, T, R'],
          ['M, L, K', 'J, I, N, O']
        ]
      ]
    },
    {
      type: 'whatNext',
      id: 'color',
      label: 'Color Based',
      commonData: {
        type: 'colorBased'
      },
      data: [
        [
          {
            list: [
              {
                d: 'M 34 4 C 84 5 82 112 34 111 C 2 110 -10 5 34 4 ',
                fill: 'variable'
              },
              {
                d: 'M 59 199 C 35 181 53 126 34 111 L 24 117'
              }
            ],
            width: 75,
            height: 200,
            scale: 0.6,
            colors: ['#FFA858', '#21B0DF', '#FFA858', '#21B0DF'],
            options: ['#FFA858', '#21B0DF', '#B84BE5']
          },
          {
            list: [
              {
                d: 'M 72 32 L 16 121 L 69 157 L 135 64 C 164 13 103 -19 67 39 ',
                fill: 'variable'
              },
              {
                d: 'M 37 134 L 3 184 L 15 193 L 49 145 ',
                fill: 'brown'
              }
            ],
            width: 150,
            height: 200,
            scale: 0.3,
            colors: ['#2a9d8f', '#e76f51', '#2a9d8f', '#e76f51'],
            options: ['#2a9d8f', '#e76f51', '#e9c46a']
          },
          {
            list: [
              {
                d:
                  'M 39 113 C 36 128 71 137 67 113 C 91 81 27 74 37 112 M 133 112 C 130 127 165 136 161 112 C 185 80 121 73 131 111',
                fill: 'black',
                stroke: 'none'
              },
              {
                d:
                  'M 11 120 L 39 121 C 29 88 76 84 69 122 L 129 122 C 123 85 168 85 165 124 L 197 123 C 201 75 180 52 155 56 C 169 27 150 11 103 8 C 59 6 33 24 45 58 C 8 61 13 85 11 120 ',
                fill: 'variable'
              },
              {
                d:
                  'M 106 19 L 106 55 L 145 56 C 153 39 156 16 105 21 M 96 53 L 55 56 C 43 15 79 20 95 17 L 96 52 ',
                fill: 'white'
              }
            ],
            scale: 0.3,
            width: 200,
            height: 130,
            colors: ['#DCBF4D', '#D01C16', '#DCBF4D', '#D01C16'],
            options: ['#DCBF4D', '#D01C16', 'pink']
          },
          {
            list: [
              {
                d: 'M 60 30 A 30 30 0 1 1 20 2 A 15 15 0  0 0 60 30',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 60,
            height: 60,
            colors: ['#9843F0', '#FF64DB', '#9843F0', '#FF64DB'],
            options: ['#9843F0', '#FF64DB', '#FFA858']
          },
          {
            list: [
              {
                d:
                  'M 42 0 L 51 28 L 80 28 L 56 45 L 66 72 L 42 55 L 18 72 L 28 45 L 4 28 L 33 28 L 42 0 Z',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 75,
            height: 75,
            colors: ['#fe6d73', '#17c3b2', '#fe6d73', '#17c3b2'],
            options: ['#fe6d73', '#17c3b2', '#227c9d']
          }
        ],
        [
          {
            list: [
              {
                d: 'M 36 16 C 69 -12 93 32 33 82 C -16 45 -1 -27 37 16',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 80,
            height: 80,
            colors: ['#01A100', '#4762DC', '#01A100', '#4762DC'],
            options: ['#01A100', '#4762DC', '#DCBF4D']
          },
          {
            list: [
              {
                d: 'M 1 57 L 53 57 L 22 5 L 1 57',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 55,
            height: 70,
            colors: ['#C367DD', '#ED569B', '#C367DD', '#ED569B'],
            options: ['#C367DD', '#ED569B', '#F56200']
          },
          {
            list: [
              {
                d: 'M 30 30 L 30 60 A 30 30 90 1 1 60 30 Z',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 65,
            height: 65,
            colors: ['#FF00FF', '#9400F5', '#FF00FF', '#9400F5'],
            options: ['#FF00FF', '#9400F5', '#00007C']
          },
          {
            list: [
              {
                d: 'M 60 50 A 25 50  0 1 1 60 49',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 60,
            height: 100,
            colors: ['#DCBF4D', '#686868', '#DCBF4D', '#686868'],
            options: ['#DCBF4D', '#686868', '#01A100']
          },
          {
            list: [
              {
                d:
                  'M 33 3 L 41 15 L 54 12 L 51 25 L 63 33 L 51 41 L 54 54 L 41 51 L 33 63 L 25 51 L 12 54 L 15 41 L 3 33 L 15 25 L 12 12 L 25 15 Z',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 60,
            height: 60,
            colors: ['#623000', '#ED569B', '#623000', '#ED569B'],
            options: ['#623000', '#ED569B', '#F56200']
          }
        ],
        [
          {
            list: [
              {
                d: 'M 34 4 C 84 5 82 112 34 111 C 2 110 -10 5 34 4 ',
                fill: 'variable'
              },
              {
                d: 'M 59 199 C 35 181 53 126 34 111 L 24 117'
              }
            ],
            width: 75,
            height: 200,
            scale: 0.6,
            colors: ['#FFA858', '#21B0DF', '#2a9d8f', '#FFA858', '#21B0DF'],
            options: ['#2a9d8f', '#FFA858', '#21B0DF']
          },
          {
            list: [
              {
                d: 'M 72 32 L 16 121 L 69 157 L 135 64 C 164 13 103 -19 67 39 ',
                fill: 'variable'
              },
              {
                d: 'M 37 134 L 3 184 L 15 193 L 49 145 ',
                fill: 'brown'
              }
            ],
            width: 150,
            height: 200,
            scale: 0.3,
            colors: ['#2a9d8f', '#e76f51', '#e9c46a', '#2a9d8f', '#e76f51'],
            options: ['#e9c46a', '#2a9d8f', '#e76f51']
          },
          {
            list: [
              {
                d:
                  'M 39 113 C 36 128 71 137 67 113 C 91 81 27 74 37 112 M 133 112 C 130 127 165 136 161 112 C 185 80 121 73 131 111',
                fill: 'black',
                stroke: 'none'
              },
              {
                d:
                  'M 11 120 L 39 121 C 29 88 76 84 69 122 L 129 122 C 123 85 168 85 165 124 L 197 123 C 201 75 180 52 155 56 C 169 27 150 11 103 8 C 59 6 33 24 45 58 C 8 61 13 85 11 120 ',
                fill: 'variable'
              },
              {
                d:
                  'M 106 19 L 106 55 L 145 56 C 153 39 156 16 105 21 M 96 53 L 55 56 C 43 15 79 20 95 17 L 96 52 ',
                fill: 'white'
              }
            ],
            scale: 0.3,
            width: 200,
            height: 130,
            colors: ['#DCBF4D', '#D01C16', 'pink', '#DCBF4D', '#D01C16'],
            options: ['pink', '#DCBF4D', '#D01C16']
          },
          {
            list: [
              {
                d: 'M 60 30 A 30 30 0 1 1 20 2 A 15 15 0  0 0 60 30',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 60,
            height: 60,
            colors: ['#9843F0', '#FF64DB', '#FFA858', '#9843F0', '#FF64DB'],
            options: ['#FFA858', '#9843F0', '#FF64DB']
          },
          {
            list: [
              {
                d:
                  'M 42 0 L 51 28 L 80 28 L 56 45 L 66 72 L 42 55 L 18 72 L 28 45 L 4 28 L 33 28 L 42 0 Z',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 75,
            height: 75,
            colors: ['#fe6d73', '#17c3b2', '#227c9d', '#fe6d73', '#17c3b2'],
            options: ['#227c9d', '#fe6d73', '#17c3b2']
          }
        ],
        [
          {
            list: [
              {
                d: 'M 36 16 C 69 -12 93 32 33 82 C -16 45 -1 -27 37 16',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 80,
            height: 80,
            colors: ['#01A100', '#4762DC', '#DCBF4D', '#01A100', '#4762DC'],
            options: ['#DCBF4D', '#01A100', '#4762DC']
          },
          {
            list: [
              {
                d: 'M 1 57 L 53 57 L 22 5 L 1 57',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 55,
            height: 70,
            colors: ['#C367DD', '#ED569B', '#F56200', '#C367DD', '#ED569B'],
            options: ['#F56200', '#C367DD', '#ED569B']
          },
          {
            list: [
              {
                d: 'M 30 30 L 30 60 A 30 30 90 1 1 60 30 Z',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 65,
            height: 65,
            colors: ['#FF00FF', '#9400F5', '#00007C', '#FF00FF', '#9400F5'],
            options: ['#00007C', '#FF00FF', '#9400F5']
          },
          {
            list: [
              {
                d: 'M 60 50 A 25 50  0 1 1 60 49',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 60,
            height: 100,
            colors: ['#DCBF4D', '#686868', '#01A100', '#DCBF4D', '#686868'],
            options: ['#01A100', '#DCBF4D', '#686868']
          },
          {
            list: [
              {
                d:
                  'M 33 3 L 41 15 L 54 12 L 51 25 L 63 33 L 51 41 L 54 54 L 41 51 L 33 63 L 25 51 L 12 54 L 15 41 L 3 33 L 15 25 L 12 12 L 25 15 Z',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 60,
            height: 60,
            colors: ['#623000', '#ED569B', '#F56200', '#623000', '#ED569B'],
            options: ['#F56200', '#623000', '#ED569B']
          }
        ],
        [
          {
            list: [
              {
                d: 'M 34 4 C 84 5 82 112 34 111 C 2 110 -10 5 34 4 ',
                fill: 'variable'
              },
              {
                d: 'M 59 199 C 35 181 53 126 34 111 L 24 117'
              }
            ],
            width: 75,
            height: 200,
            scale: 0.6,
            colors: [
              '#FFA858',
              '#FFA858',
              '#21B0DF',
              '#FFA858',
              '#FFA858',
              '#21B0DF',
              '#FFA858',
              '#FFA858'
            ],
            options: ['#21B0DF', '#FFA858', '#B84BE5']
          },
          {
            list: [
              {
                d: 'M 72 32 L 16 121 L 69 157 L 135 64 C 164 13 103 -19 67 39 ',
                fill: 'variable'
              },
              {
                d: 'M 37 134 L 3 184 L 15 193 L 49 145 ',
                fill: 'brown'
              }
            ],
            width: 150,
            height: 200,
            scale: 0.3,
            colors: [
              '#2a9d8f',
              '#2a9d8f',
              '#e76f51',
              '#2a9d8f',
              '#2a9d8f',
              '#e76f51',
              '#2a9d8f'
            ],
            options: ['#2a9d8f', '#e76f51', '#e9c46a']
          },
          {
            list: [
              {
                d:
                  'M 39 113 C 36 128 71 137 67 113 C 91 81 27 74 37 112 M 133 112 C 130 127 165 136 161 112 C 185 80 121 73 131 111',
                fill: 'black',
                stroke: 'none'
              },
              {
                d:
                  'M 11 120 L 39 121 C 29 88 76 84 69 122 L 129 122 C 123 85 168 85 165 124 L 197 123 C 201 75 180 52 155 56 C 169 27 150 11 103 8 C 59 6 33 24 45 58 C 8 61 13 85 11 120 ',
                fill: 'variable'
              },
              {
                d:
                  'M 106 19 L 106 55 L 145 56 C 153 39 156 16 105 21 M 96 53 L 55 56 C 43 15 79 20 95 17 L 96 52 ',
                fill: 'white'
              }
            ],
            scale: 0.3,
            width: 200,
            height: 130,
            colors: [
              '#DCBF4D',
              '#D01C16',
              '#D01C16',
              '#DCBF4D',
              '#D01C16',
              '#D01C16'
            ],
            options: ['#DCBF4D', '#D01C16', 'pink']
          },
          {
            list: [
              {
                d: 'M 60 30 A 30 30 0 1 1 20 2 A 15 15 0  0 0 60 30',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 60,
            height: 60,
            colors: [
              '#9843F0',
              '#9843F0',
              '#FF64DB',
              '#9843F0',
              '#9843F0',
              '#FF64DB',
              '#9843F0',
              '#9843F0'
            ],
            options: ['#FF64DB', '#9843F0', 'FFA858']
          },
          {
            list: [
              {
                d:
                  'M 42 0 L 51 28 L 80 28 L 56 45 L 66 72 L 42 55 L 18 72 L 28 45 L 4 28 L 33 28 L 42 0 Z',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 75,
            height: 75,
            colors: [
              '#fe6d73',
              '#fe6d73',
              '#17c3b2',
              '#fe6d73',
              '#fe6d73',
              '#17c3b2'
            ],
            options: ['#fe6d73', '#17c3b2', '#227c9d']
          }
        ],
        [
          {
            list: [
              {
                d: 'M 36 16 C 69 -12 93 32 33 82 C -16 45 -1 -27 37 16',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 80,
            height: 80,
            colors: [
              '#01A100',
              '#01A100',
              '#4762DC',
              '#01A100',
              '#01A100',
              '#4762DC',
              '#01A100',
              '#01A100'
            ],
            options: ['#4762DC', '#01A100', '#DCBF4D']
          },
          {
            list: [
              {
                d: 'M 1 57 L 53 57 L 22 5 L 1 57',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 55,
            height: 70,
            colors: [
              '#C367DD',
              '#ED569B',
              '#ED569B',
              '#C367DD',
              '#ED569B',
              '#ED569B',
              '#C367DD'
            ],
            options: ['#ED569B', '#C367DD', '#F56200']
          },
          {
            list: [
              {
                d: 'M 30 30 L 30 60 A 30 30 90 1 1 60 30 Z',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 65,
            height: 65,
            colors: [
              '#FF00FF',
              '#9400F5',
              '#9400F5',
              '#FF00FF',
              '#9400F5',
              '#9400F5'
            ],
            options: ['#FF00FF', '#9400F5', '#00007C']
          },
          {
            list: [
              {
                d: 'M 60 50 A 25 50  0 1 1 60 49',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 60,
            height: 100,
            colors: [
              '#DCBF4D',
              '#DCBF4D',
              '#686868',
              '#DCBF4D',
              '#DCBF4D',
              '#686868',
              '#DCBF4D'
            ],
            options: ['#DCBF4D', '#686868', '#01A100']
          },
          {
            list: [
              {
                d:
                  'M 33 3 L 41 15 L 54 12 L 51 25 L 63 33 L 51 41 L 54 54 L 41 51 L 33 63 L 25 51 L 12 54 L 15 41 L 3 33 L 15 25 L 12 12 L 25 15 Z',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 60,
            height: 60,
            colors: [
              '#623000',
              '#ED569B',
              '#ED569B',
              '#623000',
              '#ED569B',
              '#ED569B'
            ],
            options: ['#623000', '#ED569B', '#F56200']
          }
        ]
      ]
    },
    {
      type: 'whatNext',
      id: 'rotation',
      label: 'Rotation',
      commonData: {
        title: 'What comes next ? (based on rotation)',
        type: 'rotationBased'
      },
      data: [
        [
          {
            d: 'M 50 10 A 40 40 0 1 0 90 50 L 50 50 Z',
            angles: [0, 90, 180],
            options: [270, 0, 90]
          },
          {
            d: 'M 80 20 L 20 80 L 20 60 M 20 80 L 40 80',
            angles: [0, 90, 180],
            options: [270, 0, 90]
          },
          {
            d:
              'M 30 19 C 60 -20 126 22 83 65 L 64 45 L 13 98 L 3 86 L 55 37 L 31 18 ',
            angles: [0, 90, 180],
            options: [270, 0, 90]
          },
          {
            d: 'M 21 43 C 0 -9 98 -15 68 44 L 48 93 L 19 42 L 72 34 ',
            angles: [0, 90, 180],
            options: [270, 0, 90]
          },
          {
            d:
              'M 5 5 L 95 4 L 95 33 L 61 32 L 63 97 L 33 95 L 31 33 L 3 32 L 3 3 ',
            angles: [0, 90, 180],
            options: [270, 0, 90]
          }
        ],
        [
          {
            d: 'M 5 5 L 95 5 L 55 50 L 95 95 L 5 95 L 45 50 L 5 5 ',
            angles: [0, 45, 90],
            options: [135, 180, 270]
          },
          {
            d: 'M 5 95 L 95 95 L 95 40 L 50 5 L 5 40 L 5 95 ',
            angles: [0, 90, 180],
            options: [270, 0, 90]
          },
          {
            d: 'M 100 50 A 50 25 0 1 1 100 49',
            angles: [0, 45, 90],
            options: [135, 180, 270]
          },
          {
            d: 'M 50 20 A 30 30 270 0 1 50 80 L 20 80 L 20 20 Z',
            angles: [0, 90, 180],
            options: [270, 0, 90]
          },
          {
            d: 'M 5 5 V 95 H 95 Z',
            angles: [0, 90, 180],
            options: [270, 360, 90]
          }
        ],
        [
          {
            d: 'M 50 10 A 40 40 0 1 0 90 50 L 50 50 Z',
            angles: [270, 180, 90],
            options: [0, 90, 270]
          },
          {
            d: 'M 80 20 L 20 80 L 20 60 M 20 80 L 40 80',
            angles: [270, 180, 90],
            options: [0, 90, 270]
          },
          {
            d:
              'M 30 19 C 60 -20 126 22 83 65 L 64 45 L 13 98 L 3 86 L 55 37 L 31 18 ',
            angles: [270, 180, 90],
            options: [0, 90, 270]
          },
          {
            d: 'M 21 43 C 0 -9 98 -15 68 44 L 48 93 L 19 42 L 72 34 ',
            angles: [270, 180, 90],
            options: [0, 90, 270]
          },
          {
            d:
              'M 5 5 L 95 4 L 95 33 L 61 32 L 63 97 L 33 95 L 31 33 L 3 32 L 3 3 ',
            angles: [270, 180, 90],
            options: [0, 90, 270]
          }
        ],
        [
          {
            d: 'M 5 5 L 95 5 L 55 50 L 95 95 L 5 95 L 45 50 L 5 5 ',
            angles: [135, 90, 45],
            options: [0, 135, 270]
          },
          {
            d: 'M 5 95 L 95 95 L 95 40 L 50 5 L 5 40 L 5 95 ',
            angles: [270, 180, 90],
            options: [0, 90, 270]
          },
          {
            d: 'M 100 50 A 50 25 0 1 1 100 49',
            angles: [135, 90, 45],
            options: [0, 135, 270]
          },
          {
            d: 'M 50 20 A 30 30 270 0 1 50 80 L 20 80 L 20 20 Z',
            angles: [270, 180, 90],
            options: [0, 90, 270]
          },
          {
            d: 'M 5 5 V 95 H 95 Z',
            angles: [270, 180, 90],
            options: [0, 90, 270]
          }
        ]
      ]
    }
  ]
};
