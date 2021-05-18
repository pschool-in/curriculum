export default {
  label: 'Rhyming Words',
  id: 'rhyming-words',
  list: [
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        isPractice: false,
        title: 'Drag and drop the rhyming words at the right boxes',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 100
        },
        text: `boat, coat, *goat*
        park, dark, *shark*
        hand, band, *stand*
        bright, right, *light*
        gave, cave, *save*
        face, race, *place*`
      }
    },
    {
      label: 'Drag and Drop - 2',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      data: {
        isPractice: false,
        title: 'Drag and drop the rhyming words at the right boxes',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 100
        },
        text: `cub, club, *rub*
          cap, map, *tap*
          bun, run, *sun*
          but, nut, *hut*
          cook, look, *book*
          right, bright, *light*`
      }
    },
    {
      id: 'match',
      type: 'match',
      label: 'Match Rhyming Words ',
      data: {
        title: 'Match the rhyming words. ',
        text: `three, tree
          seven, heaven
          pen, men
          write, right
          cook, look
          ball, tall`
      }
    },
    {
      id: 'match-2',
      type: 'match',
      label: 'Match Rhyming Words - 2 ',
      data: {
        title: 'Match the rhyming words. ',
        text: `sing, wing
          cave, save
          seed, feed
          hot, not
          skip, lip
          kick, pick`
      }
    },
    {
      id: 'match-3',
      type: 'match',
      label: 'Match Rhyming Words - 3',
      data: {
        title: 'Match the rhyming words. ',
        text: `blew, blue
          days, daze
          one, won
          peace, piece
          hero, zero
          soon, moon`
      }
    },
    {
      type: 'rightOne',
      id: 'odd-one',
      label: 'Odd One Out',
      data: {
        title: "Pick the word that doesn't rhyme.",
        text: `call, make, cake, bake
          son, soon, moon, boon
          fine, five, hive, live
          bone, one, gun, fun
          ant, bat, fat, cat
          net, float, goat, boat`
      }
    },
    {
      type: 'rightOne',
      id: 'odd-one-2',
      label: 'Odd One Out - 2',
      data: {
        title: "Pick the word that doesn't rhyme.",
        text: `bin, will, bill, kill
        kin, kid, lid, did
        six, box, fox, ox
        fat, fan, pan, man
        plate, grade, blade, fade`
      }
    },
    {
      label: 'Pick the rhyming word',
      id: 'complete',
      type: 'completePuzzle',
      data: {
        type: 'rightOpen',
        title: 'Drag and drop the correct block to make the words rhyme.',
        questions: [
          {
            text: 'dog',
            options: 'fog, bag'
          },
          {
            text: 'sun',
            options: 'fun, van'
          },
          {
            text: 'big',
            options: 'fig, bin'
          },
          {
            text: 'hit',
            options: 'sit, hot'
          },
          {
            text: 'light',
            options: 'night, kite'
          },
          {
            text: 'ball',
            options: 'wall, girl'
          }
        ]
      }
    },
    {
      label: 'Pick the rhyming word - 2',
      id: 'complete-2',
      type: 'completePuzzle',
      data: {
        type: 'rightOpen',
        title: 'Drag and drop the correct block to make the words rhyme.',
        questions: [
          {
            text: 'display',
            options: 'replay, reply'
          },
          {
            text: 'place',
            options: 'grace, guess'
          },
          {
            text: 'purple',
            options: 'people, person'
          },
          {
            text: 'life',
            options: 'knife, live'
          },
          {
            text: 'bike',
            options: 'like, live'
          },
          {
            text: 'gold',
            options: 'bold, bone'
          }
        ]
      }
    }
  ]
};
