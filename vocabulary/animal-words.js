export default {
  label: 'Animal Related Words',
  id: 'animal-words',
  list: [
    {
      id: 'match-sounds',
      type: 'match',
      label: 'Match Sounds ',
      data: {
        title: 'Match the animals with the sounds they make. ',
        text: `dog, bark
          cat,  meow
          donkey, bray
          cow,	moo
          hen, cluck
          crow, caw`
      }
    },
    {
      id: 'match-sounds-2',
      type: 'match',
      label: 'Match Sounds - 2',
      data: {
        title: 'Match the animals with the sounds they make. ',
        text: `horse,	neigh
          duck,	quack
          monkey, chatter
          goat, bleat
          snake, hiss
          pig, grunt`
      }
    },
    {
      id: 'match-sounds-3',
      type: 'match',
      label: 'Match Sounds - 3',
      data: {
        title: 'Match the animals with the sounds they make. ',
        text: `rat,  squeak
          wolf, howl
          owl, hoot
          elephant, trumpet
          lion, roar
          bee, buzz`
      }
    },
    {
      id: 'match-place',
      type: 'match',
      label: 'Match Animals and their home',
      data: {
        title: 'Match the animals with their home. ',
        text: `bees, hive
        birds, nest
        cow, shed
        dog, kennel
        horse, stable
        human beings, house`
      }
    },
    {
      id: 'match-place-2',
      type: 'match',
      label: 'Match Animals and their home - 2',
      data: {
        title: 'Match the animals with their home. ',
        text: `lion, den
        pig, sty
        rabbit, burrow
        sheep, pen
        spider, web
        fish, aquarium`
      }
    },
    {
      id: 'match-place-3',
      type: 'match',
      label: 'People and living place',
      data: {
        title: 'Match the people with their living place. ',
        text: `man, house
        hermit, hermitage
        king, palace
        nomad, tent
        peasant, cottage
        soldier, camp`
      }
    },
    {
      id: 'match-little-ones',
      type: 'match',
      label: 'Little Ones',
      data: {
        title: 'Match the Animals and their little ones. ',
        text: `cat, kitten
        lion, cub
        cow, calf
        pig, piglet
        deer, fawn
        human, child`
      }
    },
    {
      id: 'match-little-ones-2',
      type: 'match',
      label: 'Little Ones - 2',
      data: {
        title: 'Match the Animals and their little ones. ',
        text: `dog, pup
        goat, calf
        sheep, lamb
        horse, foal
        gorilla, infant
        bear, cub`
      }
    },
    {
      id: 'match-little-ones-3',
      type: 'match',
      label: 'Little Ones - 3',
      data: {
        title: 'Match the Animals and their little ones. ',
        text: `duck, duckling
        elephant, calf
        donkey, foal
        Hen, chick
        owl, owlet
        tiger, cub`
      }
    },
    {
      id: 'match-group',
      type: 'match',
      label: 'Animals and their group',
      data: {
        title: 'Match the Animals and their group. ',
        text: `bats, colony
        bees, swarm
        birds, flock
        buffalo, herd
        cattle, mob
        dogs, pack`
      }
    },
    {
      id: 'match-group-2',
      type: 'match',
      label: 'Animals and their group - 2',
      data: {
        title: 'Match the Animals and their group. ',
        text: `elephant, herd
        fish, school
        goats, flock
        hens, brood
        lions, pride
        wolf, pack`
      }
    },
    {
      label: 'Collective Nouns',
      type: 'matchByDragDrop',
      data: {
        isPractice: false,
        title: 'Drag and drop the collective nouns at proper places.',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        },
        text:
          'A *herd* of cattle \n A *flock* of birds \n  A *school* of fish \n  A *pack* of wolves \n A * swarm* of bees \n   A *choir* of singers \n   A *troupe* of dancers'
      },
      id: 'collective-noun'
    }
  ]
};
