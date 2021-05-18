export default {
  label: 'Simple Reading',
  id: 'simple-reading',
  list: [
    {
      id: 'sandwich',
      type: 'passage',
      label: 'Sanwich',
      data: {
        title: 'Sanwich',
        text: `First, keep all the ingredients ready. Now, begin by arranging two slices of bread on a plate. Spread butter on both the slices. Then, add cheese, tomatoes, cucumbers, salt and pepper. Next, cover the arrangement with the other slice of bread. Lastly, toast the sandwich on medium flame until it is slightly brown.`
      }
    },
    {
      label: 'Recipe fillup',
      type: 'matchByDragDrop',
      slug: 'drag-and-drop-blanks-template',
      id: 'sandwich-fillup',
      data: {
        title: 'Drag and drop the words at proper places.',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        },
        text:
          'First, keep all the *ingredients* ready. Now, begin by arranging two slices of *bread* on a plate. Spread *butter* on both the slices. Then, add *cheese*, tomatoes, cucumbers, salt and pepper. Next, *cover* the arrangement with the other slice of bread. Lastly, toast the *sandwich* on medium flame until it is slightly brown.'
      }
    },
    {
      label: 'Recipe - Sorting',
      type: 'sorting',
      slug: 'sort',
      data: {
        title: 'Sort the sentences in the right order.',
        text:
          'First, keep all the ingredients ready. \nNow, begin by arranging two slices of bread on a plate.\nSpread butter on both the slices. \nThen, add cheese, tomatoes, cucumbers, salt and pepper. \nNext, cover the arrangement with the other slice of bread. \nLastly, toast the sandwich on medium flame until it is slightly brown.'
      },
      id: 'sandwich-sort'
    },
    {
      id: 'elephants',
      type: 'passage',
      label: 'Elephants',
      data: {
        title: 'Elephants',
        text: [
          { type: 'img', src: 'image2/animals/elephant.jpg' },
          `Elephants are the largest animal that lives in land. They are usually found in the forest of Africa and Asia. They have a long trunk. It is used to gather food, drink water and bathe. To cool down, they flap their large ears. They love to eat leaves, grass and bark. They are really big so they need to eat a lot of food. They can strike with huge force, which can topple even a truck.`
        ]
      }
    },
    {
      id: 'zebras',
      type: 'passage',
      label: 'Zebras',
      data: {
        title: 'Zebras',
        text: [
          { type: 'img', src: 'image2/animals/zebra.jpg' },
          `Zebras are animals that have black and white stripes. Their stripes help to hide them and keep them safe from other animals. No two zebras have the same stripes - they are all different.
Zebras move quickly and can run faster than lions. If they are being chased by another animal, they run from side to side. Zebras also sleep standing up and they mostly eat grass.
A baby zebra is called a foal and it can run within 1 hour of being born.`
        ]
      }
    },
    {
      id: 'giraffes',
      type: 'passage',
      label: 'Giraffes',
      data: {
        title: 'Giraffes',
        text: [
          { type: 'img', src: 'image2/animals/giraffe.jpg' },
          `Giraffes are the tallest animals on land. Their long necks help them to eat leaves from tall trees. Giraffes also have small horns on the top of their head. These horns help to protect their head in a fight.`
        ]
      }
    },
    {
      id: 'camels',
      type: 'passage',
      label: 'Camels',
      data: {
        title: 'Camels',
        text: [
          { type: 'img', src: 'image2/animals/camel.png' },
          `Camels live in the deserts of Africa and Asia. All camels have one or two humps. Camels' hump consist of stored fat. Camels are herbivores, which means they do not eat meat. They eat a lot of leaves, thorns and bushes. Camels can go without water for a long time. They like to stay together in groups called herds.  `
        ]
      }
    }
  ]
};
