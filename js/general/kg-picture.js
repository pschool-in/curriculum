export default {
  id: 'kg-picture',
  label: 'Picture Activities',
  list: [
    {
      type: 'compareImage',
      id: 'big-image',
      label: 'Biggest Image',
      data: {
        probType: 'size',
        type: 'big',
        title: 'BIG one is ...'
      }
    },
    {
      type: 'compareImage',
      id: 'small-image',
      label: 'Smallest Image',
      data: {
        probType: 'size',
        type: 'small',
        title: 'SMALL one is ...'
      }
    },
    {
      type: 'compareImage',
      id: 'more-image',
      label: 'Find More',
      data: {
        probType: 'count',
        type: 'big',
        title: 'MORE number is ...'
      }
    },
    {
      type: 'compareImage',
      id: 'less-image',
      label: 'Find Less',
      data: {
        probType: 'count',
        type: 'small',
        title: 'LESS number is ...'
      }
    },
    {
      type: 'compareImage',
      id: 'odd-image',
      label: 'Odd One Out',
      commonData: {
        probType: 'oddOne',
        title: 'The ODD one is ...'
      },
      data: [
        `crocodile, lion, tiger, fox
snake, shark, whale, dolphin
squirrel, parrot, peacock, penguin
corn, rose, sunflower, hibiscus
mango, carrot, beetroot, onion
cabbage, papaya, pineapple, orange
watermelon, sunflower, hibiscus, marigold
rat, crow, dove, duck
parrot, squirrel, ant, fly
ball, pen, pencil, ruler`,

        `fish, frog, crab, tortoise
foot, nose, eye, ear
fox, sheep, goat, cat
horse, tiger, lion, rhino
ant, dragonfly, winged-termites, fly
stove, smartphone, tablet, camera
pan, spoon, knife, fork
drums, headphone, pendrive, remote
torch, eraser, sharpener, pencil
penguin, boy, girl, man`,

        `cycle, motorbike, car, tractor
boat, train, bus, car
aeroplane, motorbike, train, tractor
kite, hen, parrot, dove
wheel, bell, whistle, drums
candle, table, bed, chair
leaf, ladoo, fruits, food
milk, world, sun, rain
glasses, hair, tooth, ear
butter, waterbottle, pan, pot`
      ]
    },
    {
      type: 'compareImage',
      id: 'odd-shape',
      label: 'The Different One',
      commonData: {
        probType: 'oddOneSvg',
        title: 'The ODD one is ...'
      },
      data: [
        {
          first: [
            'M 50 65 L 74 82 L 64 55 L 88 38 L 59 38 L 50 10 L 41 38 L 12 38 L 36 55 L 26 82 L 50 65',
            'M 50 70 L 70 85 L 67 60 L 90 50 L 67 40 L 70 15 L 50 30 L 30 15 L 33 40 L 10 50 L 33 60 L 30 85 z',
            'M 60 30 A 30 30 0 1 1 20 2 A 15 15 0  0 0 60 30',
            'M 93 75 L 50 100 L 7 75 L 7 25 L 50 0 L 93 25 Z',
            'M 95 72 L 61 99 L 19 89 L 0 50 L 18 11 L 61 1 L 95 28 Z'
          ],
          second: [
            'M 50 70 L 74 82 L 69 56 L 88 38 L 62 34 L 50 10 L 38 34 L 12 38 L 31 56 L 26 82 L 50 70',
            'M 50 70 L 74 82 L 69 56 L 88 38 L 62 34 L 50 10 L 38 34 L 12 38 L 31 56 L 26 82 L 50 70',
            'M 60 30 A 30 30 0 1 1 20 2 A 25 25 0  0 0 60 30',
            'M 95 72 L 61 99 L 19 89 L 0 50 L 18 11 L 61 1 L 95 28 Z',
            'M 96 69 L 69 96 L 31 96 L 4 69 L 4 31 L 31 4 L 69 4 L 96 31 Z'
          ]
        },
        {
          first: [
            'M 0 0 H 100 V 100 H 0 Z',
            'M 0 10 H 100 V 90 H 0 Z',
            'M 50 0 L 100 50 L 50 100 L 0 50 Z',
            'M 0 0 L 100 100 L 0 100 Z',
            'M 50 100 A 50 50 90 1 1 100 50 L 50 50 Z'
          ],
          second: [
            'M 10 0 H 90 Q 100 0 100 10 V 90 Q 100 100 90 100 H 10 Q 0 100 0 90 V 10 Q 0 0 10 0',
            'M 0 0 H 100 V 100 H 0 Z',
            'M 50 0 L 90 50 L 50 100 L 10 50 Z',
            'M 10 0 L 100 100 L 10 100 Z',
            'M 50 100 A 50 50 90 1 1 98 65 L 50 50 Z'
          ]
        },
        {
          first: [
            'M 50 93 A 43 50 90 1 1 100 50 L 50 50 Z',
            'M 10 0 H 90 L 100 100 H 0 Z',
            'M 10 0 H 100 L 90 100 H 0 Z',
            'M 40 40 V 0 H 60 V 40 H 100 V 60 H 60 V 100 H 40 V 60 H 0 V 40 Z ',
            'M 50 0 L 100 100 L 0 100 Z'
          ],
          second: [
            'M 50 100 A 50 50 90 1 1 100 50 L 50 50 Z',
            'M 18 0 H 82 L 100 100 H 0 Z',
            'M 20 0 H 100 L 80 100 H 0 Z',
            'M 40 30 V 0 H 60 V 30 H 100 V 50 H 60 V 100 H 40 V 50 H 0 V 30 Z ',
            'M 50 20 L 100 100 L 0 100 Z'
          ]
        }
      ]
    }
  ]
};
