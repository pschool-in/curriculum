const crossword = {
  label: 'குறுக்கெழுத்து',
  id: 'crossword',
  img: 'crossword',
  list: [
    {
      id: 'crossword',
      type: 'crossword',
      label: 'குறுக்கெழுத்து - 1',
      data: {
        type: 'குறுக்கெழுத்து - 1'
      }
    },
    {
      id: 'crossword2',
      type: 'crossword',
      label: 'குறுக்கெழுத்து - 2',
      data: {
        type: 'குறுக்கெழுத்து - 2'
      }
    },
    {
      id: 'opposites',
      type: 'crossword',
      label: 'எதிர்ச்சொல்',
      data: {
        title: 'எதிர்ச்சொல்',
        words: [
          {
            word: 'நன்மைகள்',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'தீமைகள்',
            direction: 'across'
          },
          {
            word: 'நட்பு',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'பகை',
            direction: 'down'
          },
          {
            word: 'புதுமை',
            marker: {
              x: 0,
              y: 2
            },
            hint: 'பழைமை',
            direction: 'across'
          },
          {
            word: 'கசப்பு',
            marker: {
              x: 3,
              y: 0
            },
            hint: 'இனிப்பு',
            direction: 'down'
          },
          {
            word: 'துன்பம்',
            marker: {
              x: 1,
              y: 2
            },
            hint: 'இன்பம்',
            direction: 'down'
          },
          {
            word: 'முடிவு',
            marker: {
              x: 4,
              y: 2
            },
            hint: 'தொடக்கம் ',
            direction: 'across'
          },
          {
            word: 'மறைவு',
            marker: {
              x: 6,
              y: 0
            },
            hint: 'தோற்றம்',
            direction: 'down'
          },
          {
            word: 'இயற்கை',
            marker: {
              x: 3,
              y: 4
            },
            hint: 'செயற்கை',
            direction: 'across'
          },
          {
            word: 'ஏற்றம்',
            marker: {
              x: 5,
              y: 3
            },
            hint: 'இறக்கம்',
            direction: 'down'
          },
          {
            word: 'இளமை',
            marker: {
              x: 0,
              y: 6
            },
            hint: 'முதுமை ',
            direction: 'across'
          },
          {
            word: 'உண்மை',
            marker: {
              x: 2,
              y: 4
            },
            hint: 'பொய்',
            direction: 'down'
          }
        ],
        table: [
          ['ந', 'ன்', 'மை', 'க', 'ள்', '', 'ம'],
          ['ட்', '', '', 'ச', '', '', 'றை'],
          ['பு', 'து', 'மை', 'ப்', 'மு', 'டி', 'வு'],
          ['', 'ன்', '', 'பு', '', 'ஏ', ''],
          ['', 'ப', 'உ', 'இ', 'ய', 'ற்', 'கை'],
          ['', 'ம்', 'ண்', '', '', 'ற', ''],
          ['இ', 'ள', 'மை', '', '', 'ம்', '']
        ],
        lang: 'ta'
      }
    },
    {
      id: 'animals',
      type: 'crossword',
      label: 'உயிரினம் ',
      data: {
        title: 'குறுக்கெழுத்து : உயிரினம் ',
        words: [
          {
            word: 'யானை',
            marker: {
              x: 0,
              y: 1
            },
            hint: 'காட்டில் வாழும் பெரிய விலங்கு ',
            direction: 'across'
          },
          {
            word: 'பூனை',
            marker: {
              x: 1,
              y: 0
            },
            hint: 'எலியின் எதிரி ',
            direction: 'down'
          },
          {
            word: 'ஒட்டகம்',
            marker: {
              x: 0,
              y: 3
            },
            hint: 'பாலைவன கப்பல் ',
            direction: 'across'
          },
          {
            word: 'சிங்கம்',
            marker: {
              x: 4,
              y: 0
            },
            hint: 'காட்டு ராஜா ',
            direction: 'down'
          },
          {
            word: 'குரங்கு',
            marker: {
              x: 2,
              y: 1
            },
            hint: 'மரத்தில் வாழும் விலங்கு ',
            direction: 'across'
          },
          {
            word: 'கரடி',
            marker: {
              x: 3,
              y: 3
            },
            hint: 'இரண்டு கால்களால் நடக்கும் விலங்கு ',
            direction: 'down'
          },
          {
            word: 'முதலை',
            marker: {
              x: 0,
              y: 5
            },
            hint: 'தரையில் மெதுவாகவும், நீரில் வேகமாகவும் செல்வான் ',
            direction: 'across'
          },
          {
            word: 'தவளை',
            marker: {
              x: 1,
              y: 5
            },
            hint: '_____  தன்வாயால் கெடும் - என்பது பழமொழி ',
            direction: 'down'
          },
          {
            word: 'வரிக்குதிரை',
            marker: {
              x: 1,
              y: 6
            },
            hint: 'சாலையை கடக்கும் போது நினைவில் இருக்கும் விலங்கு ',
            direction: 'across'
          },
          {
            word: 'சேவல்',
            marker: {
              x: 7,
              y: 0
            },
            hint: 'முருகனின் கொடி ',
            direction: 'down'
          },
          {
            word: 'மயில்',
            marker: {
              x: 5,
              y: 2
            },
            hint: 'தேசிய பறவை ',
            direction: 'across'
          },
          {
            word: 'குயில் ',
            marker: {
              x: 4,
              y: 5
            },
            hint: 'பாடும் பறவை ',
            direction: 'across'
          },
          {
            word: 'ஈசல்',
            marker: {
              x: 6,
              y: 3
            },
            hint: 'ஒரு நாள் மட்டும் வாழும் சிறு உயிரினம் ',
            direction: 'down'
          }
        ],
        table: [
          ['', 'பூ', '', '', 'சி', '', '', 'சே'],
          ['யா', 'னை', 'கு', 'ர', 'ங்', 'கு', '', 'வ'],
          ['', '', '', '', 'க', 'ம', 'யி', 'ல்'],
          ['ஒ', 'ட்', 'ட', 'க', 'ம்', '', 'ஈ', ''],
          ['', '', '', 'ர', '', '', 'ச', ''],
          ['மு', 'த', 'லை', 'டி', 'கு', 'யி', 'ல்', ''],
          ['', 'வ', 'ரி', 'க்', 'கு', 'தி', 'ரை', ''],
          ['', 'ளை', '', '', '', '', '', '']
        ],
        lang: 'ta'
      }
    },
    {
      id: 'fruits',
      type: 'crossword',
      label: 'காய் கனிகள் ',
      data: {
        title: 'காய் கனிகள் ',
        words: [
          {
            word: 'மாம்பழம்',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'வெயில் காலத்தில் மட்டும் கிடைக்கும் பழம் ',
            direction: 'across'
          },
          {
            word: 'மாதுளை',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'பழம் முழுக்க சிவப்பு முத்துக்கள் ',
            direction: 'down'
          },
          {
            word: 'பலாப்பழம்',
            marker: {
              x: 2,
              y: 0
            },
            hint: 'பழங்களிலே பெரிய பழம் ',
            direction: 'down'
          },
          {
            word: 'தக்காளி',
            marker: {
              x: 7,
              y: 0
            },
            hint: 'சமையலுக்கு பயன்படும் பழம் ',
            direction: 'down'
          },
          {
            word: 'பப்பாளி',
            marker: {
              x: 4,
              y: 3
            },
            hint: 'மிளகு போல் விதைகளை கொண்ட மஞ்சள் நிற பழம் ',
            direction: 'across'
          },
          {
            word: 'வெங்காயம் ',
            marker: {
              x: 3,
              y: 5
            },
            hint: 'கண் கலங்க வைக்கும் காய் ',
            direction: 'across'
          },
          {
            word: 'வெண்டை ',
            marker: {
              x: 3,
              y: 5
            },
            hint: 'பச்சை பெட்டிக்குள் வெள்ளை முத்துக்கள் ',
            direction: 'down'
          }
        ],
        table: [
          ['மா', 'ம்', 'ப', 'ழ', 'ம்', '', '', 'த'],
          ['து', '', 'லா', '', '', '', '', 'க்'],
          ['ளை', '', 'ப்', '', '', '', '', 'கா'],
          ['', '', 'ப', '', 'ப', 'ப்', 'பா', 'ளி'],
          ['', '', 'ழ', '', '', '', '', ''],
          ['', '', 'ம்', 'வெ', 'ங்', 'கா', 'ய', 'ம்'],
          ['', '', '', 'ண்', '', '', '', ''],
          ['', '', '', 'டை', '', '', '', '']
        ],
        lang: 'ta'
      }
    }
  ]
};

export default crossword;
