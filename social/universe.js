export default {
  label: 'Universe',
  id: 'universe',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Universe - Notes',
      data: {
        title: 'Universe',
        text: `The Universe is a vast expansion of space. The Universe consists of billions of galaxies, stars, planets, dwarf planets, comets, asteroids, meteoroids and natural satellites. The exact size of the universe is still unknown. Scientists believe that the universe is still expanding outward.
          A Galaxy is a huge cluster of stars. Our galaxy Milky way is one among the countless of galaxies in the Universe.
          Approximately 4.54 billion years ago, Solar System was a cloud of dust and gas known as Solar Nebula. Due to an explosion, these particles collapsed and began to spin having the sun at centre. The bigger particles which revolve around the sun are called planets. Thus the planet Earth formed.
          The Rocky-inner planets are Mercury, Venus, Earth and Mars. They are called Terrestrial planets. The outer planets are Gaseous planets. They are Jupiter, Saturn, Uranus and Neptune. The frozen planets are Uranus and Neptune.
          # Rotation
          The movement of the earth on its axis is called rotation of the earth. Day and night are caused due to the earth‛s rotation.
          # Revolution
          The movement of the Earth around the Sun on it‛s axis which is tilted about 23½° is called revolution of the earth. Seasons are caused by Earth‛s revolution.
          Life is possible only on the Earth because of the presence of land, air and water.
          Venus is called Earth‛s twin. Mars is described as the Red planet. Earth is called the Blue planet. Saturn is the Ringed planet.`
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        editable: true,
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'The shape of the Earth is ______.',
            options: 'sphere, circle, cube, oval'
          },
          {
            qText: 'We get day and night due to the ________ of Earth.',
            options: 'rotation, revolution, shape'
          },
          {
            qText: 'We get different seasons due to the _______ of Earth.',
            options: 'revolution, rotation, shape'
          },
          {
            qText: 'Which of the following is not a rocky planet?',
            options: 'Saturn, Earth, Mars, Venus'
          },
          {
            qText: 'Which of the following is not a gaseous planet?',
            options: 'Mars, Jupiter, Saturn'
          },
          {
            qText: 'Which of the following are frozen planets?',
            options: '* Uranus, Saturn, Jupiter, * Neptune'
          }
        ]
      }
    },
    {
      label: 'True or False',
      id: 'truefalse',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as True or False.',
        types: [
          {
            name: 'True',
            text: `Scientists believe that the universe is expanding.
            Uranus and Neptune are frozen planets because they are far away from the sun.`
          },
          {
            name: 'False',
            text: `Jupiter is the biggest planet in the whole universe.
            The size of the universe can be measured.
            We get day and night, due to the movement of Earth around the Sun.`
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Match ',
      id: 'match',
      data: {
        title: 'Match the Planets with its description',
        text: `Earth's twin, Venus
        Red Planet, Mars
        Blue Planet, Earth
        Ringed Planet, Saturn
        Farthest Planet, Neptune
        Biggest Planet, Jupiter`
      }
    },
    {
      label: 'Arrange By Size',
      type: 'sorting',
      data: {
        title: 'Rearrange based on the size (Largest at the top)',
        text: 'Universe, Galaxy, Solar System, Sun, Planet, Satellite'
      },
      id: 'sort'
    },
    {
      label: 'Fill up by drag and drop.',
      id: 'fillup',
      type: 'matchByDragDrop',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper places.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `Life is possible only on the *Earth* because of the presence of land, air and *water*.
        Solar System was a cloud of dust and gas known as Solar *Nebula*.
        A *galaxy* is a huge cluster of stars.
        Our galaxy *Milky* way is one among the countless of galaxies in the Universe.
        The outer planets are *gaseous* planets.`
      }
    }
  ]
};
