export default {
  id: 'everyday-science-4',
  label: 'Everyday Science',
  pdf: 'everyday-science-4.pdf',
  list: [
    {
      label: 'Gadgets - Passage',
      type: 'passage',
      id: '100',
      data: {
        title: 'Gadgets',
        text: `A gadget is a small electronic machine or device which does something useful. Number of gadgets have changed our lives. They make our life enjoyable. Examples: Laptop, Phone, Camera, Pen drive, Speaker
# Smart Phones
Apart from communication, smart phones have the ability to access the internet and store files, take photos, track location and much more.
# Portable Music Player
It stores and plays thousands of songs. We can listen to songs anywhere, anytime.
# Tablets
People use tablets to read books, play games and watch videos.
# Pen Drive
It is a small gadget used for storing and transferring any type of file in / from a computer.
# Electric Torch
Portable hand-held electric light. Torch is used to provide light in the dark places when it is switched on.
There are many advantages in using gadgets. But too much of anything is not good. As responsible kids, we should put a time limit on using gadgets.
Watching the screen of mobile or TV for long hours will affect our eye sight. It also makes us lazy and we get diseases like obesity.
In the previous generation, there was no gadgets like smart phone and tablets. Children used to play outdoor games which involves lot of running and exercises. Keeping this in mind, kids should play lot of outdoor games, rather than playing video games.
#Internet
Internet allows us to connect with anyone in the world present in different places. Students can attend online classes only because of the internet.`
      }
    },
    {
      id: '200',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Music Player, Songs
Smart Phone, Communication
Electric Torch, Light
Pen drive, Stores Data
Tablet, Read books`,
        fontSize: '1rem',
        title: 'Match the following'
      }
    },
    {
      label: 'Multiple Choice Questions',
      id: '300',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' What is essential for the the working of gadgets?',
            options: 'Electricity, Sun light, Clean house'
          },
          {
            qText: 'What do we use while going to unfamiliar places?',
            options: 'Google Map, Facebook, Youtube'
          },
          {
            qText: 'What is the best habit to have for kids?',
            options:
              "Have a time limit for using gadgets, Avoid using gadgets, Watch videos but don't play games."
          },
          {
            qText:
              'What is the most important requirement for attending online class?',
            options: 'Internet, Mic, Camera'
          },
          {
            qText: 'Which is the best gadget for reading books?',
            options: 'Tablet, Pen drive, Music Player, Smart watch'
          }
        ]
      }
    },
    {
      type: 'completeWord',
      label: 'Complete the Word',
      data: {
        lang: 'en',
        images: 'custom',
        questions: [
          {
            word: 'camera',
            display: '_ame_a',
            hint: 'camera'
          },
          {
            word: 'headphone',
            display: '_ead_hone',
            hint: 'headphone'
          },
          {
            word: 'pendrive',
            display: '_en_rive',
            hint: 'pendrive'
          },
          {
            word: 'remote',
            display: '_emote',
            hint: 'remote'
          },
          {
            word: 'smartphone',
            display: '_mart_hone',
            hint: 'smartphone'
          },
          {
            word: 'speaker',
            display: '_peake_',
            hint: 'speaker'
          },
          {
            word: 'tablet',
            display: '_ab_et',
            hint: 'tablet'
          },
          {
            word: 'torch',
            display: '_orch',
            hint: 'torch'
          }
        ]
      }
    },
    {
      type: 'sequence',
      label: 'Jumbled Word',
      id: '400',
      data: {
        title: 'Find the word.',
        text: 'laptop, camera, smart, phone, speaker'
      }
    },
    {
      id: '500',
      label: 'Fill Up',
      type: 'fillupOptions',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `A gadget is a small *electronic (electric) * machine.
*Pen drive (Mouse) * is used to store files.
Watching the *screen (camera)* of mobile for a long hours will affect our eye-sight.
In the *previous (current) * generation, there was not many gadgets.
*Internet (Websites)* connects the world.`
      }
    }
  ]
};
