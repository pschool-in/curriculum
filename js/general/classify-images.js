export default {
  id: 'classify-images',
  label: 'Classify Images',
  list: [
    {
      label: 'Domestic vs Wild Animals',
      type: 'group',
      id: 'domestic-wild-animals',
      data: {
        title: 'Drag and drop the animals in the right boxes.',
        imageType: 'animals',
        types: [
          {
            name: 'Domestic',
            text: `cat, dog, goat, horse, pig, sheep`
          },
          {
            name: 'Wild Animals',
            text: `elephant, lion, monkey, rhino, tiger, zebra`
          }
        ]
      }
    },
    {
      label: 'Living vs Non Living',
      type: 'group',
      id: 'living',
      data: {
        title: 'Classify the living and non-living things',
        imageType: 'general',
        types: [
          {
            name: 'Living',
            text: `ant, fly, fish, hen, fox, boy, woman`
          },
          {
            name: 'Non-Living',
            text: `candle, ball, table, boat, cycle, pencil`
          }
        ]
      }
    },
    {
      label: 'Eatable vs Not Eatable',
      type: 'group',
      id: 'eatable',
      data: {
        title: 'Classify the eatable and not-eatable things',
        imageType: 'general',
        types: [
          {
            name: 'Eatable',
            text: `mango, papaya, watermelon, carrot, cucumber, corn, milk`
          },
          {
            name: 'Not Eatable',
            text: `sunflower, candle, knife, spoon, pendrive`
          }
        ]
      }
    },
    {
      label: 'Can Fly vs Cannot Fly',
      type: 'group',
      id: 'fly',
      data: {
        title: 'Classify the below based on whether they can fly.',
        imageType: 'general',
        types: [
          {
            name: 'Can Fly',
            text: `dragonfly, fly, kite, helicoptor, peacock, sparrow`
          },
          {
            name: 'Cannot Fly',
            text: `ant, penguin, squirrel, pencil`
          }
        ]
      }
    },
    {
      label: 'Vegetables vs Fruits',
      type: 'group',
      id: 'fruits',
      data: {
        title: 'Classify the below as vegetables or fruits',
        imageType: 'general',
        types: [
          {
            name: 'Fruits',
            text: `cherry, watermelon, mango, pineapple, orange`
          },
          {
            name: 'Vegetables',
            text: `cabbage, corn, cucumber, carrot, onion`
          }
        ]
      }
    },
    {
      label: 'Wood or not wood',
      type: 'group',
      id: 'wood',
      data: {
        title: 'Classify the below as made up of wood or not',
        imageType: 'general',
        types: [
          {
            name: 'Wood',
            text: `table, bed, chair, shelf, ruler, wheel`
          },
          {
            name: 'Not Wood',
            text: `pot, stove, schoolbag, waterbottle, smartphone`
          }
        ]
      }
    },
    {
      label: 'Gadgets or Not',
      type: 'group',
      id: 'gadgets',
      data: {
        title: 'Classify the below as gadgets or not',
        imageType: 'general',
        types: [
          {
            name: 'Gadget',
            text: `camera, headphone, torch, smartphone, pendrive`
          },
          {
            name: 'Not a Gadget',
            text: `stove, pan, ring, whistle, drums`
          }
        ]
      }
    },
    {
      label: 'Nature or Man-made',
      type: 'group',
      id: 'nature',
      data: {
        title: 'Classify the below as natural or man-made',
        imageType: 'general',
        types: [
          {
            name: 'Nature',
            text: `leaf, rain, sun, rose, tomato `
          },
          {
            name: 'Man Made',
            text: `ring, brush, kite, whistle, torch`
          }
        ]
      }
    },
    {
      label: 'Land transport vs Others',
      type: 'group',
      id: 'land-transport',
      data: {
        title: 'Classify the below as land transport or not',
        imageType: 'general',
        types: [
          {
            name: 'Land Transport',
            text: `bus, car, cycle, motorbike, tractor, train`
          },
          {
            name: 'Not a Land Transport',
            text: `aeroplane, boat, helicoptor, ship`
          }
        ]
      }
    },
    {
      label: 'Water vs Land Animal',
      type: 'group',
      id: 'water-animal',
      data: {
        title: 'Classify the below as land transport or not',
        imageType: 'general',
        types: [
          {
            name: 'Land Animal',
            text: `monkey, horse, rat, tiger, pig`
          },
          {
            name: 'Water Animal',
            text: `shark, whale, dolphin, fish, crocodile`
          }
        ]
      }
    }
  ]
};
