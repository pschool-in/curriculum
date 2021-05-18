export default {
  label: 'Antonyms Collection - 2',
  id: 'antonyms-2',
  defs: {
    data: [
      `foolish, wise
forget, remember
glad, sad
angel, devil
battle, peace
beautiful, ugly`,

      `behind, ahead
best, worst
common, rare
complex, simple
difficult, easy
dream, reality`,

      `accept, refuse
awake, asleep
bless, curse
downwards, upwards
fresh, stale
hinder, help`,

      `admit, deny
bent, straight
clever, stupid
enter, exit
float, sink
harsh, mild`,

      `alive, dead
better, worse
dangerous, safe
even, odd
gentle, rough
inside, outside`,

      `arrive, depart
bitter, sweet
decrease, increase
famous, unknown
guest, host
interesting, boring`,

      `ascend, descend
blame, praise
deep, shallow
find, lose
heavy, light
inner, outer`,

      `frequent, seldom
leader, follower
intentional, accidental
junior, senior
inhale, exhale
lenient, strict`,

      `major, minor
melt, freeze
opposite, similar
on, off
polite, rude
powerful, weak`,

      `sow, reap
success, failure
sunny, cloudy
sour, sweet
tame, wild
victory, defeat`
    ]
  },
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Words List',
      data: {
        title: 'Antonyms',
        text: [
          `Two words are said to be antonyms, if they have opposite meaning.`,
          {
            type: 'hilight',
            text: `foolish × wise
forget × remember
glad × sad
angel × devil
battle × peace
beautiful × ugly`
          },
          {
            type: 'hilight',
            text: `behind × ahead
best × worst
common × rare
complex × simple
difficult × easy
dream × reality`
          },
          {
            type: 'hilight',
            text: `accept × refuse
awake × asleep
bless × curse
downwards × upwards
fresh × stale
hinder × help`
          },
          {
            type: 'hilight',
            text: `admit × deny
bent × straight
clever × stupid
enter × exit
float × sink
harsh × mild`
          },
          {
            type: 'hilight',
            text: `alive × dead
better × worse
dangerous × safe
even × odd
gentle × rough
inside × outside`
          },
          {
            type: 'hilight',
            text: `arrive × depart
bitter × sweet
decrease × increase
famous × unknown
guest × host
interesting × boring`
          },
          {
            type: 'hilight',
            text: `ascend × descend
blame × praise
deep × shallow
find × lose
heavy × light
inner × outer`
          },
          {
            type: 'hilight',
            text: `frequent × seldom
leader × follower
intentional × accidental
junior × senior
inhale × exhale
lenient × strict`
          },
          {
            type: 'hilight',
            text: `major × minor
melt × freeze
opposite × similar
on × off
polite × rude
powerful × weak`
          },
          {
            type: 'hilight',
            text: `sow × reap
success × failure
sunny × cloudy
sour × sweet
tame × wild
victory × defeat`
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Match Antonyms',
      id: 'match',
      commonData: {
        title: 'Match Antonyms'
      },
      data: [
        {
          refs: 'data~0'
        },
        {
          refs: 'data~1'
        },
        {
          refs: 'data~2'
        },
        {
          refs: 'data~3'
        },
        {
          refs: 'data~4'
        },
        {
          refs: 'data~5'
        },
        {
          refs: 'data~6'
        },
        {
          refs: 'data~7'
        },
        {
          refs: 'data~8'
        },
        {
          refs: 'data~9'
        }
      ]
    },
    {
      type: 'completeWord',
      label: 'Write the Antonym',
      id: 'complete-word',
      commonData: {
        lang: 'en',
        title: 'Type the antonym of the given word.'
      },
      data: [
        {
          refs: 'data~0'
        },
        {
          refs: 'data~1'
        },
        {
          refs: 'data~2'
        },
        {
          refs: 'data~3'
        },
        {
          refs: 'data~4'
        },
        {
          refs: 'data~5'
        },
        {
          refs: 'data~6'
        },
        {
          refs: 'data~7'
        },
        {
          refs: 'data~8'
        },
        {
          refs: 'data~9'
        }
      ]
    },
    {
      type: 'connectLetters',
      label: 'Pick the word',
      id: 'connect-letters',
      commonData: {
        title:
          'Connect the letters from left to right to form the antonym for the below word.',
        clueFont: 'big'
      },
      data: [
        {
          refs: 'data~0'
        },
        {
          refs: 'data~1'
        },
        {
          refs: 'data~2'
        },
        {
          refs: 'data~3'
        },
        {
          refs: 'data~4'
        },
        {
          refs: 'data~5'
        },
        {
          refs: 'data~6'
        },
        {
          refs: 'data~7'
        },
        {
          refs: 'data~8'
        },
        {
          refs: 'data~9'
        }
      ]
    }
  ]
};
