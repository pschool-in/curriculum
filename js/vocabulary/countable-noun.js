export default {
  label: 'Countable Noun',
  id: 'countable-noun',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Countable vs Uncountable Noun',
      data: {
        title: 'Countable vs Uncountable Noun',
        text: [
          `Nouns can be countable or uncountable.`,
          `Countable nouns are easy to recognize. They are the things we can count. For eg, pencils. We can count pencils. We can have one, two, three or more pencils.`,
          {
            type: 'hilight',
            text: 'eg: pen, house, dog'
          },
          `Uncountable nouns are substances, concepts etc that we cannot divide into separate elements. We cannot 'count' them. For example, we cannot count 'water'. We can count 'bottles of water' or 'litres of water', but we cannot count water itself.`,
          `Uncountable nouns cannot be counted.`,
          { type: 'hilight', text: 'eg: water, air, sand' },
          `# Plural nouns`,
          `Plural nouns are used to represent more than one item. Most plural nouns are formed by adding an 's' to the singular nouns.`,
          { type: 'hilight', text: 'eg: dogs, cats,  trees' },
          `If the singular noun ends with -s, -ss, -sh, -ch, -x or -z, then add '-es' to make it plural.`,
          {
            type: 'sitewords',
            text: 'buses, glasses, dresses,dishes, branches, taxes',
            width: 100
          },
          `If the noun ends with ‑f or ‑fe, the f is often changed to ‑ve before adding the -s to form the plural version.`,
          { type: 'hilight', text: 'eg: wife – wives, wolf – wolves' },
          `# Exceptions`,
          { type: 'hilight', text: 'roofs, beliefs, chefs, chiefs' }
        ]
      }
    },
    {
      label: 'Classify Nouns',
      type: 'group',
      id: 'group',
      data: {
        title:
          'Classify the below words as countable and uncountable nouns. Drag and drop the words at the appropriate boxes.',
        printTitle:
          'Classify the below words as countable and uncountable nouns.',
        types: [
          {
            name: 'Countable',
            text: 'apple, car, television, umbrella, friend, book, shoe, cup'
          },
          {
            name: 'Uncountable',
            text: 'cheese, sugar, oil, butter, water, time, jam'
          }
        ]
      }
    },
    {
      label: 'Match the correct plural form',
      id: 'complete',
      type: 'completePuzzle',
      data: {
        type: 'rightOpen',
        title: 'Match the plural form of the given noun.',
        printTitle: 'Write the plural form',
        printNoOptions: true,
        questions: [
          {
            text: 'dog',
            options: 'dogs, doges'
          },
          {
            text: 'cat',
            options: 'cats, cates'
          },
          {
            text: 'branch',
            options: 'branches, branchs'
          },
          {
            text: 'church',
            options: 'churches, churchs'
          },
          {
            text: 'boat',
            options: 'boats, boates'
          },
          {
            text: 'bus',
            options: 'buses, buss'
          },
          {
            text: 'wish',
            options: 'wishes, wishs'
          },
          {
            text: 'box',
            options: 'boxes, boxs'
          },
          {
            text: 'river',
            options: 'rivers, riveres'
          },
          {
            text: 'house',
            options: 'houses, housees'
          }
        ]
      }
    },
    {
      label: 'Irregular Plural Noun',
      id: 'complete-2',
      type: 'completePuzzle',
      data: {
        type: 'rightOpen',
        title: 'Match the plural form of the given noun.',
        questions: [
          {
            text: 'child',
            options: 'children, childs'
          },
          {
            text: 'goose',
            options: 'geese, gooses'
          },
          {
            text: 'man',
            options: 'men, mans'
          },
          {
            text: 'woman',
            options: 'women, womans'
          },
          {
            text: 'tooth ',
            options: 'teeth , tooths'
          },
          {
            text: 'foot',
            options: 'feet, foots'
          },
          {
            text: 'mouse',
            options: 'mice, mouses'
          },
          {
            text: 'person',
            options: 'people, persons'
          }
        ]
      }
    },
    {
      type: 'completeWord',
      label: 'Complete the plural',
      id: 'complete-3',
      data: {
        lang: 'en',
        title: 'Complete the plural form of the given noun.',
        questions: [
          {
            word: 'people',
            display: 'p_____',
            hint: 'person'
          },
          {
            word: 'geese',
            display: 'g___e',
            hint: 'goose'
          },
          {
            word: 'feet',
            display: 'f___',
            hint: 'foot'
          },
          {
            word: 'mice',
            display: 'm___',
            hint: 'mouse'
          },
          {
            word: 'teeth',
            display: 't___h',
            hint: 'tooth'
          }
        ]
      }
    },
    {
      label: 'Match the correct plural form',
      id: 'complete-ending-f',
      type: 'completePuzzle',
      data: {
        type: 'rightOpen',
        title: 'Match the plural form of the given noun.',
        questions: [
          {
            text: 'wife',
            options: 'wives, wifes'
          },
          {
            text: 'wolf',
            options: 'wolves, wolfs'
          },
          {
            text: 'roof',
            options: 'roofs, rooves'
          },
          {
            text: 'belief',
            options: 'beliefs, believes'
          },
          {
            text: 'chef',
            options: 'chefs, cheves'
          },
          {
            text: 'chief',
            options: 'chiefs, chieves'
          }
        ]
      }
    },
    {
      type: 'completeWord',
      label: 'Complete the plural - 2',
      id: 'complete-4',
      data: {
        lang: 'en',
        title: 'Complete the plural form of the given noun.',
        questions: [
          {
            word: 'children',
            display: 'child___',
            hint: 'child'
          },
          {
            word: 'toys',
            display: 'to__',
            hint: 'toy'
          },
          {
            word: 'bones',
            display: 'bon__',
            hint: 'bone'
          },
          {
            word: 'leaves',
            display: 'lea___',
            hint: 'leaf'
          },
          {
            word: 'jars',
            display: 'ja__',
            hint: 'jar'
          }
        ]
      }
    },
    {
      id: 'fillup-cats',
      label: 'Cat or Cats',
      type: 'fillupOptions',
      data: {
        editable: true,
        title: 'Click on the blanks and pick the write word. (cat or cats).',
        text:
          'I saw a *cat* on the window. Suddenly, few more *cats* came from the street. One of the *cats*, was black in color. The oldest *cat* was slow in moving. Two *cats* were fighting. There was too much of noise. A gray colored *cat* was scratching the window. I suddenly woke up and it was a bad dream. It was full of *cats*.',
        options: 'cat, cats'
      }
    }
  ]
};
