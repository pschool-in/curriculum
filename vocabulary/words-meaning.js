export default {
  label: 'Words and meaning',
  id: 'words-meaning',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Words Collection',
      data: {
        title: 'Words Collection',
        text: [
          {
            type: 'html',
            text: `<b>frowning</b> : showing worry, anger or disapproval<br>
<b>grinning</b> : showing happiness or approval<br>
<b>pouting</b>: showing disappointment or unhappiness<br>
<b>shrugging</b>: showing that we do not know or do not care about something<hr>`
          },
          {
            type: 'html',
            text: `<b>witty</b> - makes jokes easily<br>
<b>career</b> - the work a person does for a long time<br>
<b>criticised</b> - find mistakes<br>
<b>pancake</b> - a flat cake fried on both sides like a dosa<br>
<b>batter</b> - semi liquid mix of flour, egg and milk<br>
<b>monk</b> - a member of a religious group of men<br>
<b>stalwart</b> - a hard working member of a company<hr>`
          },
          {
            type: 'html',
            text: `<b>reformer</b> - a person who makes changes to make something better<br>
<b>lecture</b> - educational speech to a group of people<br>
<b>journey</b> - travel somewhere<br>
<b>preach</b> - publicly teach<br>
<b>cobbler</b> - a person who fixes shoes<br>
<b>boast</b> - talk proudly about yourself<br>
<b>humanity</b> - being kind to everyone<hr>`
          },
          {
            type: 'html',
            text: `<b>liberator</b> - a person who sets another person free<br>
<b>slavery</b> - taking control of another person<br>
<b>property</b> - to have a right over something<br>
<b>civil rights</b> - rights that each person has in a society<br>
<b>illegal</b> - not allowed by the law of a country<br>
<b>proclamation</b> - public announcement of an important matter<br>
<b>visionary</b> - a person having future vision<hr>`
          }
        ]
      }
    },

    {
      label: 'Gesture Definition',
      type: 'matchByDragDrop',
      id: 'gesture-1',
      data: {
        title: 'Drag and drop the words at appropriate places',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        },
        text: `*frowning* : showing worry, anger or disapproval
*grinning* : showing happiness or approval
*pouting*: showing disappointment or unhappiness
*shrugging*: showing that we do not know or do not care about something`
      }
    },
    {
      label: 'Fillup - Gesture',
      type: 'fillupOptions',
      id: 'gesture-2',
      data: {
        title: 'Fill up with suitable gesture',
        text: `Bhaskar is opening his birthday presents. He is *grinning (pouting)* widely.
When I asked Ramit about the broken vase, he just *shrugged(grinned)*. He did not know anything about it.
When little Anne lost her toy, she *pouted (grinned)* the entire afternoon.
"Why is Raj not picking up his phone? I hope he is alright", *frowned (shrugged)* Father.`
      }
    },
    {
      label: 'Match word and meaning',
      type: 'matchByDragDrop',
      id: 'match-meaning',
      commonData: {
        title: 'Drag and drop the words at appropriate places',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        }
      },
      data: [
        `*witty* - makes jokes easily, 
*career* - the work a person does for a long time
*criticised* - find mistakes
*pancake* - a flat cake fried on both sides like a dosa
*batter* - semi liquid mix of flour, egg and milk
*monk* - a member of a religious group of men
*stalwart* - a hard working member of a company`,

        `*reformer* - a person who makes changes to make something better
*lecture* - educational speech to a group of people
*journey* - travel somewhere
*preach* - publicly teach
*cobbler* - a person who fixes shoes
*boast* - talk proudly about yourself
*humanity* - being kind to everyone`,

        `*liberator* - a person who sets another person free
*slavery* - taking control of another person
*property* - to have a right over something
*civil rights* - rights that each person has in a society.
*illegal* - not allowed by the law of a country
*proclamation* - public announcement of an important matter
*visionary* - a person having future vision.`
      ]
    },
    {
      label: 'Fillup from options',
      type: 'matchByDragDrop',
      id: 'fillup',
      commonData: {
        title: 'Drag and drop the words at appropriate places',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        }
      },
      data: [
        `To make pancakes, we first need the *batter*.
Rohit believed in God and wanted to become a *monk*.
The teacher never *criticised* her students.
*pancakes* are tasty to eat.
Teachers are the *stalwarts* of a school.
Dr. Radhakrishnan was known for being *witty*.
Manu wanted a *career* as a lawyer.`,

        ` Swamiji *preached* the message of peace.
I need a *cobbler* to repair my shoes.
Karthik *boasts* about the competitions he has won.
B. R. Ambedkar was a great social *reformer*.
Swamiji delivered many *lectures* across India.
Raj went on a *journey* to Amritsar.
Simran showed great *humanity* when she gave food to a beggar.`,

        `It is *illegal* to steal.
Abraham Lincoln is called the *liberator*.
He was sold abroad for *slavery*.
Right to education is every Indian's *civil right*.
The Prime Minister made a *proclamation* to clean India.
My principal is a *visionary* as she has great plans for our school.
Rita has a two flat *property* in Pune.`
      ]
    }
  ]
};
