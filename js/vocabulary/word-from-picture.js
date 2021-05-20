export default {
  label: 'Picture Words',
  id: 'word-from-picture',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Reading',
      data: {
        title: 'Words from Picture',
        text: `# Fruits
            {"type": "sitewords", "text": "apple, grapes, banana, cherry, avocado, strawberry, guava, jackfruit, mango, orange, papaya, pineapple, pomegranate, watermelon", "width": 120 }
            # Vegetables
            {"type": "sitewords", "text": "carrot, beetroot, onion, tomato, potato, cabbage, cauliflower, corn, cucumber, garlic, ginger", "width": 120 }
            # Flowers
            {"type": "sitewords", "text": "rose, lotus, sunflower, marigold, hibiscus, jasmine", "width": 120 }
            # Vehicles
            {"type": "sitewords", "text": "aeroplane, boat, bus, car, cycle, helicoptor, motorbike, ship, tractor, train", "width": 120 }
            # House
            {"type": "sitewords", "text": "house, table, bed, candle, chair, shelf, boy, girl, man, woman, ball, coat, glasses", "width": 120 }
            # School
            {"type": "sitewords", "text": "eraser, pen, pencil, ruler, schoolbag, scissors, sharpener, waterbottle", "width": 120 }
            # Kitchen
            {"type": "sitewords", "text": "stove, fork, knife, pan, spoon, pot, butter", "width": 120 }
            # Gadgets
            {"type": "sitewords", "text": "camera, headphone, pendrive, remote, smartphone, speaker, tablet, torch", "width": 120 }
            # Animals
            {"type": "sitewords", "text": "cat, dog, goat, sheep, horse, pig, camel, lion, monkey, tiger, hippo, rhino, fox, elephant, crocodile, zebra, bear,  shark, whale, dolphin, dragonfly, fish, frog, crab, snake, squirrel, tortoise, rat,ant,house fly", "width": 120 }
            # Birds
            {"type": "sitewords", "text": "crow, dove, duck, hen, parrot, peacock, penquin, sparrow", "width": 120 }
            # Body Parts
            {"type": "sitewords", "text": "ear, eye, foot, hair, hand, mouth, nose, tooth", "width": 120 }
            # Nature
            {"type": "sitewords", "text": "sun, rain, star, milk, bird, fruits, leaf,  world", "width": 120 }
            # Objects
            {"type": "sitewords", "text": "bell, drums, food, king, kite, ladder, ring, brush, bone, wheel, whistle", "width": 120 }
            `
      }
    },
    {
      type: 'completeWord',
      id: 'fruits',
      label: 'Complete Word - Fruits',
      data: {
        lang: 'en',
        images: 'fruits',
        questions: [
          {
            word: 'APPLE',
            display: '____E',
            hint: 'apple'
          },
          {
            word: 'GRAPES',
            display: '_____S',
            hint: 'grapes'
          },
          {
            word: 'BANANA',
            display: '_____A',
            hint: 'banana'
          },
          {
            word: 'CHERRY',
            display: '_____Y',
            hint: 'cherry'
          },
          {
            word: 'AVOCADO',
            display: '_VO____',
            hint: 'avocado'
          },
          {
            word: 'STRAWBERRY',
            display: '____W____Y',
            hint: 'strawberry'
          },
          {
            word: 'GUAVA',
            display: '_UA__',
            hint: 'guava'
          },
          {
            word: 'JACKFRUIT',
            display: '___K____T',
            hint: 'jackfruit'
          },
          {
            word: 'MANGO',
            display: '____O',
            hint: 'mango'
          },
          {
            word: 'ORANGE',
            display: '_____E',
            hint: 'orange'
          },
          {
            word: 'PAPAYA',
            display: '_____A',
            hint: 'papaya'
          },
          {
            word: 'PINEAPPLE',
            display: '___E____E',
            hint: 'pineapple'
          },
          {
            word: 'WATERMELON',
            display: '____R____N',
            hint: 'watermelon'
          }
        ]
      }
    },
    {
      type: 'completeWord',
      id: 'vehicles',
      label: 'Complete Word - Vehicles',
      data: {
        lang: 'en',
        images: 'vehicles',
        questions: [
          {
            word: 'AEROPLANE',
            display: 'A___P____',
            hint: 'aeroplane'
          },
          {
            word: 'BOAT',
            display: '___T',
            hint: 'boat'
          },
          {
            word: 'BUS',
            display: '__S',
            hint: 'bus'
          },
          {
            word: 'CAR',
            display: '__R',
            hint: 'car'
          },
          {
            word: 'CYCLE',
            display: '____E',
            hint: 'cycle'
          },
          {
            word: 'HELICOPTOR',
            display: '____C____R',
            hint: 'helicoptor'
          },
          {
            word: 'MOTORBIKE',
            display: 'M____B___',
            hint: 'motorbike'
          },
          {
            word: 'SHIP',
            display: '___P',
            hint: 'ship'
          },
          {
            word: 'TRACTOR',
            display: '____T_R',
            hint: 'tractor'
          },
          {
            word: 'TRAIN',
            display: '____N',
            hint: 'train'
          }
        ]
      }
    },
    {
      type: 'completeWord',
      id: 'flowers',
      label: 'Complete Word - Flowers',
      data: {
        lang: 'en',
        images: 'flowers',
        questions: [
          {
            word: 'ROSE',
            display: '___E',
            hint: 'rose'
          },
          {
            word: 'LOTUS',
            display: '____S',
            hint: 'lotus'
          },
          {
            word: 'SUNFLOWER',
            display: '___F____R',
            hint: 'sunflower'
          },
          {
            word: 'MARIGOLD',
            display: '____G___',
            hint: 'marigold'
          },
          {
            word: 'HIBISCUS',
            display: '____S__S',
            hint: 'hibiscus'
          },
          {
            word: 'JASMINE',
            display: '______E',
            hint: 'jasmine'
          }
        ]
      }
    },
    {
      type: 'completeWord',
      id: 'vegetables',
      label: 'Complete Word - Vegetables',
      data: {
        lang: 'en',
        images: 'vegetables',
        questions: [
          {
            word: 'CARROT',
            display: '_____T',
            hint: 'carrot'
          },
          {
            word: 'BEETROOT',
            display: '___T___T',
            hint: 'beetroot'
          },
          {
            word: 'ONION',
            display: '____N',
            hint: 'onion'
          },
          {
            word: 'TOMATO',
            display: '_____O',
            hint: 'tomato'
          },
          {
            word: 'POTATO',
            display: '_____O',
            hint: 'potato'
          },
          {
            word: 'CABBAGE',
            display: '______E',
            hint: 'cabbage'
          },
          {
            word: 'CORN',
            display: '___N',
            hint: 'corn'
          },
          {
            word: 'CUCUMBER',
            display: '____M__R',
            hint: 'cucumber'
          },
          {
            word: 'GARLIC',
            display: '_____C',
            hint: 'garlic'
          },
          {
            word: 'GINGER',
            display: '_____R',
            hint: 'ginger'
          }
        ]
      }
    },
    {
      type: 'completeWord',
      id: 'house',
      label: 'Complete Word - House',
      data: {
        lang: 'en',
        images: 'house',
        questions: [
          {
            word: 'MAN',
            display: '__N',
            hint: 'man'
          },
          {
            word: 'WOMAN',
            display: '____N',
            hint: 'woman'
          },
          {
            word: 'BOY',
            display: '__Y',
            hint: 'boy'
          },
          {
            word: 'GIRL',
            display: '___L',
            hint: 'girl'
          },
          {
            word: 'HOUSE',
            display: '____E',
            hint: 'house'
          },
          {
            word: 'TABLE',
            display: '____E',
            hint: 'table'
          },
          {
            word: 'BED',
            display: '__D',
            hint: 'bed'
          },
          {
            word: 'CANDLE',
            display: '_____E',
            hint: 'candle'
          },
          {
            word: 'CHAIR',
            display: '____R',
            hint: 'chair'
          },
          {
            word: 'SHELF',
            display: '____F',
            hint: 'shelf'
          },

          {
            word: 'BALL',
            display: '___L',
            hint: 'ball'
          },
          {
            word: 'COAT',
            display: '___T',
            hint: 'coat'
          },
          {
            word: 'GLASSES',
            display: '______S',
            hint: 'glasses'
          }
        ]
      }
    },
    {
      type: 'completeWord',
      id: 'kitchen',
      label: 'Complete Word - Kitchen',
      data: {
        lang: 'en',
        images: 'kitchen',
        questions: [
          {
            word: 'STOVE',
            display: '____E',
            hint: 'stove'
          },
          {
            word: 'FORK',
            display: '___K',
            hint: 'fork'
          },
          {
            word: 'KNIFE',
            display: '____E',
            hint: 'knife'
          },
          {
            word: 'PAN',
            display: '__N',
            hint: 'pan'
          },
          {
            word: 'SPOON',
            display: '____N',
            hint: 'spoon'
          },
          {
            word: 'POT',
            display: '__T',
            hint: 'pot'
          },
          {
            word: 'BUTTER',
            display: '_____R',
            hint: 'butter'
          }
        ]
      }
    },
    {
      type: 'completeWord',
      id: 'birds',
      label: 'Complete Word - Birds',
      data: {
        lang: 'en',
        images: 'birds',
        questions: [
          {
            word: 'CROW',
            display: '___W',
            hint: 'crow'
          },
          {
            word: 'DOVE',
            display: '___E',
            hint: 'dove'
          },
          {
            word: 'DUCK',
            display: '___K',
            hint: 'duck'
          },
          {
            word: 'HEN',
            display: '__N',
            hint: 'hen'
          },
          {
            word: 'PARROT',
            display: '_____T',
            hint: 'parrot'
          },
          {
            word: 'PEACOCK',
            display: '______K',
            hint: 'peacock'
          },
          {
            word: 'PENGUIN',
            display: '______N',
            hint: 'penguin'
          },
          {
            word: 'SPARROW',
            display: '______W',
            hint: 'sparrow'
          }
        ]
      }
    },
    {
      type: 'completeWord',
      id: 'parts-body',
      label: 'Complete Word - Body Parts',
      data: {
        lang: 'en',
        images: 'bodyParts',
        questions: [
          {
            word: 'EAR',
            display: '__R',
            hint: 'ear'
          },
          {
            word: 'EYE',
            display: '___',
            hint: 'eye'
          },
          {
            word: 'FOOT',
            display: '__OT',
            hint: 'foot'
          },
          {
            word: 'HAIR',
            display: '___R',
            hint: 'hair'
          },
          {
            word: 'HAND',
            display: '___D',
            hint: 'hand'
          },
          {
            word: 'MOUTH',
            display: 'M____',
            hint: 'mouth'
          },
          {
            word: 'NOSE',
            display: '___E',
            hint: 'nose'
          },
          {
            word: 'TOOTH',
            display: 'TO___',
            hint: 'tooth'
          }
        ]
      }
    },
    {
      type: 'completeWord',
      id: 'nature',
      label: 'Complete Word - Nature',
      data: {
        lang: 'en',
        images: 'others',
        questions: [
          {
            word: 'SUN',
            display: '___',
            hint: 'sun'
          },
          {
            word: 'RAIN',
            display: '____',
            hint: 'rain'
          },
          {
            word: 'STAR',
            display: '____',
            hint: 'star'
          },
          {
            word: 'MILK',
            display: '___K',
            hint: 'milk'
          },
          {
            word: 'BIRD',
            display: '___D',
            hint: 'bird'
          },
          {
            word: 'FRUITS',
            display: '____TS',
            hint: 'fruits'
          },
          {
            word: 'LEAF',
            display: '___F',
            hint: 'leaf'
          },
          {
            word: 'WORLD',
            display: '____D',
            hint: 'world'
          }
        ]
      }
    },
    {
      type: 'completeWord',
      id: 'objects',
      label: 'Complete Word - Objects',
      data: {
        lang: 'en',
        images: 'custom',
        questions: [
          {
            word: 'PEN',
            display: '__N',
            hint: 'pen'
          },
          {
            word: 'PENCIL',
            display: '_____L',
            hint: 'pencil'
          },
          {
            word: 'RULER',
            display: '____R',
            hint: 'ruler'
          },
          {
            word: 'ERASER',
            display: '_____R',
            hint: 'eraser'
          },
          {
            word: 'SCISSORS',
            display: '______RS',
            hint: 'scissors'
          },
          {
            word: 'SHARPENER',
            display: '____P___R',
            hint: 'sharpener'
          },
          {
            word: 'BELL',
            display: '___L',
            hint: 'bell'
          },
          {
            word: 'WHISTLE',
            display: '_____LE',
            hint: 'whistle'
          }
        ]
      }
    },
    {
      type: 'completeWord',
      id: 'objects-2',
      label: 'Complete Word - Objects - 2',
      data: {
        lang: 'en',
        images: 'others',
        questions: [
          {
            word: 'RING',
            display: '___G',
            hint: 'ring'
          },
          {
            word: 'BRUSH',
            display: '____H',
            hint: 'brush'
          },
          {
            word: 'BONE',
            display: '___E',
            hint: 'bone'
          },

          {
            word: 'DRUMS',
            display: '___MS',
            hint: 'drums'
          },
          {
            word: 'FOOD',
            display: '___D',
            hint: 'food'
          },
          {
            word: 'KING',
            display: '___G',
            hint: 'king'
          },
          {
            word: 'KITE',
            display: '___E',
            hint: 'kite'
          },
          {
            word: 'LADDER',
            display: '_____R',
            hint: 'ladder'
          },
          {
            word: 'WHEEL',
            display: '____L',
            hint: 'wheel'
          }
        ]
      }
    },

    {
      type: 'completeWord',
      id: 'animals',
      label: 'Complete Word - Domestic Animals',
      data: {
        lang: 'en',
        images: 'animals',
        questions: [
          {
            word: 'CAT',
            display: '___',
            hint: 'cat'
          },
          {
            word: 'DOG',
            display: '___',
            hint: 'dog'
          },
          {
            word: 'GOAT',
            display: '___T',
            hint: 'goat'
          },
          {
            word: 'SHEEP',
            display: '____P',
            hint: 'sheep'
          },
          {
            word: 'HORSE',
            display: '____E',
            hint: 'horse'
          },
          {
            word: 'PIG',
            display: '___',
            hint: 'pig'
          },
          {
            word: 'CAMEL',
            display: '____L',
            hint: 'camel'
          }
        ]
      }
    },
    {
      type: 'completeWord',
      id: 'animals-2',
      label: 'Complete Word - Wild Animals',
      data: {
        lang: 'en',
        images: 'animals',
        questions: [
          {
            word: 'LION',
            display: '___N',
            hint: 'lion'
          },
          {
            word: 'MONKEY',
            display: '_____Y',
            hint: 'monkey'
          },
          {
            word: 'TIGER',
            display: '____R',
            hint: 'tiger'
          },
          {
            word: 'HIPPO',
            display: '____O',
            hint: 'hippo'
          },
          {
            word: 'RHINO',
            display: '____O',
            hint: 'rhino'
          },
          {
            word: 'FOX',
            display: '___',
            hint: 'fox'
          },
          {
            word: 'ELEPHANT',
            display: '____H__T',
            hint: 'elephant'
          },
          {
            word: 'CROCODILE',
            display: '___C____E',
            hint: 'crocodile'
          },
          {
            word: 'ZEBRA',
            display: '____A',
            hint: 'zebra'
          },
          {
            word: 'BEAR',
            display: '___R',
            hint: 'bear'
          },
          {
            word: 'SHARK',
            display: '____K',
            hint: 'shark'
          },
          {
            word: 'WHALE',
            display: '____E',
            hint: 'whale'
          },
          {
            word: 'DOLPHIN',
            display: '______N',
            hint: 'dolphin'
          }
        ]
      }
    },
    {
      type: 'completeWord',
      id: 'animals-3',
      label: 'Complete Word - Small Animals',
      data: {
        lang: 'en',
        images: 'animals',
        questions: [
          {
            word: 'DRAGONFLY',
            display: '_____N__Y',
            hint: 'dragonfly'
          },
          {
            word: 'FISH',
            display: '___H',
            hint: 'fish'
          },
          {
            word: 'FROG',
            display: '___G',
            hint: 'frog'
          },
          {
            word: 'CRAB',
            display: '___B',
            hint: 'crab'
          },
          {
            word: 'SNAKE',
            display: '____E',
            hint: 'snake'
          },
          {
            word: 'SQUIRREL',
            display: '_______L',
            hint: 'squirrel'
          },
          {
            word: 'TORTOISE',
            display: '___T___E',
            hint: 'tortoise'
          },
          {
            word: 'RAT',
            display: '___',
            hint: 'rat'
          },
          {
            word: 'ANT',
            display: '___',
            hint: 'ant'
          },
          {
            word: 'HOUSEFLY',
            display: '____E__Y',
            hint: 'fly'
          }
        ]
      }
    },
    {
      type: 'completeWord',
      id: 'gadgets',
      label: 'Complete Word - Gadgets',
      data: {
        lang: 'en',
        images: 'gadgets',
        questions: [
          {
            word: 'CAMERA',
            display: '_____A',
            hint: 'camera'
          },
          {
            word: 'HEADPHONE',
            display: '___D____E',
            hint: 'headphone'
          },
          {
            word: 'PENDRIVE',
            display: '__N____E',
            hint: 'pendrive'
          },
          {
            word: 'REMOTE',
            display: '_____E',
            hint: 'remote'
          },
          {
            word: 'SMARTPHONE',
            display: '____T____E',
            hint: 'smartphone'
          },
          {
            word: 'SPEAKER',
            display: '______R',
            hint: 'speaker'
          },
          {
            word: 'TABLET',
            display: '_____T',
            hint: 'tablet'
          },
          {
            word: 'TORCH',
            display: '____H',
            hint: 'torch'
          }
        ]
      }
    }
  ]
};
