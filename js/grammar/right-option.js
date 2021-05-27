export default {
  label: 'Confusing Words',
  id: 'confusing-words',
  pageBreaks: '',
  pdf: 'confusing-words.pdf',
  list: [
    {
      id: `your-you're`,
      label: "your vs you're",
      type: 'fillupOptions',
      data: {
        title: "Fill in the blanks with the right word: your, you're",
        text: `Did you tell *your* parents where *you're* going?
  Did you brush *your* teeth?
  When *you're*  finished with the dishes, you can watch TV.
  Where did you put *your* lunchbox?
  If *you're* going to be late, please let me know.
  I like *your* red bike.
  Let's go play when *you're* ready.`,
        options: "your, you're"
      }
    },
    {
      id: 'there-their',
      label: "there, their vs they're",
      type: 'fillupOptions',
      data: {
        title: "Fill in the blanks with the right word: there, their, they're",
        text: `The kids went to visit *their* grandparents.
  *They're* all eating cake together.
  What do you see over *there* ?
  Tomorrow, *they're* having a party.
  The library book is over *there*.
  The students handed in *their* homework.`,
        options: "there, their, they're"
      }
    },
    {
      id: `its-it's`,
      label: "its vs it's",
      type: 'fillupOptions',
      data: {
        title: "Fill in the blanks with the right word: its, it's",
        text: `The cat licked *its* paw.
  The hamster is so cute. What is *its* name?
  *It's* going to rain tomorrow.
  My toy is not in *its* box. Where could it be?
  *It's* time to give the dog its dinner.
  *It's* a  good idea to put on your helmet when you ride your bike.
  The spacecraft fired *its* rockets.`,
        options: "its, it's"
      }
    },
    {
      id: `who's-whose`,
      label: "who's vs whose",
      type: 'fillupOptions',
      data: {
        title: "Fill in the blanks with who's and whose.",
        text: `He is an artist *whose* work I really admire.
  *Who's* that man in the white shirt?
  *Who's* the prime minister of India?
  *Whose* keys are on the table?
  I want someone *who's* loyal to me.`,
        options: "who's, whose"
      }
    },
    {
      id: 'to-two-too',
      label: 'to, two, vs too',
      type: 'fillupOptions',
      data: {
        title: 'To, Two, and Too',
        text: `It is never *too* late to learn.
  I am going *to* read a story.
  Suresh ran *two* kilometers.
  This gift is *too* expensive.
  Can I have *two* tickets?
  Sita started *to* laugh.`,
        options: 'to, two, too'
      }
    },
    {
      id: 'by-bye-buy',
      label: 'by, bye vs buy',
      type: 'fillupOptions',
      data: {
        title: 'By, Buy, and Bye',
        text: `*Bye* for now! I will catch you later.
  Where can I *buy* a ticket?
  This book is written *by* an Indian author.
  Should I *buy* a black car or a white car?
  The bike was driven *by* Smith.
  *Bye*, see you tomorrow.`,
        options: 'by, buy, bye'
      }
    },
    {
      id: 'here-hear',
      label: 'here vs hear',
      type: 'fillupOptions',
      data: {
        title: 'Here vs Hear',
        text: `There is no one *here*.
  Can you *hear* the dog barking?
  When your uncle gets *here*, tell him to wait.
  The bears won't *hear* us if we're quiet.
  Kids, where are you? We're *here*.
  Who put the keys *here* ?
  I can't *hear* you. You're mumbling.`,
        options: 'here, hear'
      }
    },
    {
      id: 'than-then',
      label: 'than vs then',
      type: 'fillupOptions',
      data: {
        title: 'Fill in the blanks with either than or then.',
        text: `He can run faster *than* I can.
  First buy bread and butter *then* eat them.
  Nothing worse *than* a familiar enemy.
  First think, and *then* speak.
  Peter is smarter *than* Mathew.`,
        options: 'than, then'
      }
    },
    {
      id: 'past-passed',
      label: 'past vs passed',
      type: 'fillupOptions',
      data: {
        title: 'Fill in the blanks with either past or passed.',
        text: `We read about the *past* in history books.
  Have you *passed* the examination?
  Ten years have *passed* away since he met.
  You walked *past* the hospital.
  A bus *passed* by just a moment ago.`,
        options: 'past, passed'
      }
    }
  ]
};
