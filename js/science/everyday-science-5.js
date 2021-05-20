export default {
  id: 'everyday-science-5',
  label: 'Everyday Science',
  pdf: 'everyday-science-5.pdf',
  list: [
    {
      label: 'Reversible Changes - Passage',
      type: 'passage',
      id: '100',
      data: {
        title: 'Reversible Changes',
        text: `Change is the transition of a substance from one form to another. We see many changes around us. We see changes like day and night, summer and winter and so on. We also see changes in objects. Growth of a tree, ripening of fruits, falling of leaves are some of the changes taking place around us. You can observe changes in you also. Your height and weight increase, hair and nail grow and you have grown up as a whole compared to last year. These changes can be classified as reversible and irreversible changes.
# Reversible Changes
Changes which can be reversed are called reversible changes. If you keep water in the freezer for some time, it is tranformed into ice. If it is taken out, it becomes water again. This is a reversible change.
# Irreversible Changes
Changes which cannot be reversed are called irreversible changes. If you burn a piece of paper it burns and turns into ash. It cannot become paper again. This is an irreversible change.
Irreversible changes are also known as permanent changes. Processes like burning, cooking, rusting of iron cause permanent changes.
The chemical properties of the substance do not change in reversible changes. On the other hand, the chemical properties of the substance will change in irreversible change.
# Wastes Generated in our Environment
Waste is any substance which is discarded after primary use. It is worthless, defective and of no use. They are unwanted and undesirable materials.
Wastes from home is known as household waste and they are classified as below
#Organic wastes: 
Kitchen wastes, Vegetables, Flowers, Leaves, Fruits
#Toxic wastes:
Old medicines, Paints, Chemicals, Bulbs, Spray cans, Fertilizers, Pesticide, containers, Batteries, Shoe polish.
#Recyclable wastes:
Paper, Glass, Metals, Plastics.
#e-wastes:
Computer parts, Electronic materials, Cell phone parts, CFL bulbs.
Waste management is needed for the following reasons.
# To control pollution
Various pollutions like water pollution, air pollution and soil pollution can be avoided.
# To conserve natural resources
Waste disposal is important for the conservation of our environmental resources like forest, minerals and water.
# To control spread of diseases
Spread of infectious diseases can be controlled.
# Recycle for further use
Wastes can be recycled to get products for further use.
We need to learn how to reduce, reuse and recycle wastes. The following practices will be helpful to reduce wastes in our home and school environment.
1. Use reusable and recyclable bags and containers.
2. Avoid one time use items and use items which can be used repeatedly.
3. Segregate wastes into bio-degradable and nonbiodegradable items.
4. Do not throw away your wastes every where. Put them in dustbins and dispose them properly.
5. Don’t waste food. Waste food in schools can be collected and used to feed cattles.
6. Organic wastes can be converted into manures.`
      }
    },
    {
      type: 'rightOne',
      id: '200',
      label: 'Odd one out',
      data: {
        title: 'Pick the odd one out',
        fontSize: '1.3rem',
        noCaps: true,
        text: `Cooking, Melting, Freezing, Boiling
Boiling, Burning, Cooking, Rusting of iron
Chemicals, Vegetables, Flowers, Fruits
Paints, Paper, Glass, Metals`
      }
    },
    {
      label: 'Reversible vs Irreversible',
      type: 'classifySentence',
      id: '300',
      data: {
        title: 'Classify the below, as reversible or irreversible process.',
        types: [
          {
            name: 'Reversible',
            text: `Stretching a rubber band.
Blowing air into a balloon.
Freezing water in a fridge.`
          },
          {
            name: 'Irreversible',
            text: `Cutting a rubber band into pieces.
Bursting a balloon.
Burning of papers`
          }
        ]
      }
    },
    {
      id: '400',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Used Mobile, e-waste
Vegetable waste , organic
Paper, recycleable
Rusting, irreversible
Freezing, reversible`,
        fontSize: '1rem',
        title: 'Match the following'
      }
    },
    {
      label: 'Multiple Choice Questions',
      id: '500',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'An example for reversible change is ________.',
            options:
              'melting of ice, burst of balloon, burning paper, change of milk into curd'
          },
          {
            qText: 'Chemical reactions are example for',
            options:
              'reversible change, * irreversible change, both of them, none of them'
          },
          {
            qText: 'Which of the following is not an organic waste?',
            options: 'Battery, Flowers, Vegetables, Fruits'
          },
          {
            qText: '________ wastes can be converted into manures.',
            options: 'organic, toxic, recyclable e-waste'
          },
          {
            qText: 'Which of the following help to reduce waste?',
            options:
              "* Use reusable bags, * Don't waste food, * Segregate wastes into bio-degradable and nonbiodegradable items"
          }
        ]
      }
    },
    {
      label: 'Fill up ',
      type: 'matchByDragDrop',
      id: '600',
      data: {
        isPractice: false,
        title: 'Drag and drop to complete the below sentences.',
        styles: {
          fontSize: '1rem',
          dashWidth: 60
        },
        text: `Most of the physical changes are *reversible* changes.
Most of the chemical changes are *irreversible* changes.
Wastes from house and apartments are called *household* wastes.
News paper is a *recyclable* waste.
Kitchen wastes are *organic* waste.`
      }
    }
  ]
};
