export default {
  label: 'Sentence',
  id: 'sentence',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Reading ',
      data: {
        title: 'Sentence',
        text: [
          `A sentence is usually a group of words connected to form a meaningful idea. Any written text is made up of a collection of sentences. Sentences can be classified into 4 types.`,
          `# Declarative`,
          `A declarative sentence simply makes a statement or expresses an opinion. It other words, it just declares something. This is the most common and frequently used type of sentence. eg: `,
          `I am reading a book.`,
          `# Imperative`,
          `An  imperative sentence gives a command or makes a request. Usually in imperative sentences, the subject is hidden and understood. eg:`,
          `Please sit down.`,
          `# Interrogative`,
          `An interrogative sentence asks a question. eg: `,
          `What is your name?`,
          `# Exclamatory`,
          `An exclamatory sentence is a sentence that expresses great emotion such as excitement, surprise, happiness and anger, and ends with an exclamation point. eg: `,
          `Wow! I really like it!`
        ]
      }
    },
    {
      type: 'classifySentence',
      label: 'Classify Sentence Type',
      id: 'sentence-type',
      commonData: {
        title: 'Classify the below sentences.',
        types: ['Declarative', 'Imperative', 'Interrogative']
      },
      data: [
        [
          `I like coffee.
Two plus two makes four.
London is the capital of England.`,
          `Pass the salt.
Move out of my way!
Get out of here!
Wake up now!`,
          `What is your name?
Why is the sky blue?
How are you today?`
        ],
        [
          `I want to know where he is.
Snow is white.
Ashok was working at night.`,
          `Please join us for dinner.
Complete the homework by tomorrow.
Make sure you come in clean clothes.`,
          `Which is the fastest route to the zoo?
Why did Ramya leave so early?
Is your house ready for visitors?
Have you brushed your teeth today?`
        ],
        [
          `I don't think anyone has met an alien.
        There is no life in any other planets.
        The teacher asked us to form a circle.
She is a very clever girl.`,
          `Stop feeding the dog from the table.
Go straight ahead and take the second left.
Don't eat too much of junk foods.`,
          `Is this your jacket?
Where is your house?
Why are you not interested?`
        ],
        //new adds
        [
          `I am a student
Sun rises in the east.
My favourite colour is yellow
Leaves are green in color.`,
          `Please, come in.
Get out of my sight.
Give me some water.`,
          `Do you play carrom?
Have you gone to the park?
Shall we climb on the tree?`
        ],

        [
          `The Principal knows every student in our school.
Julie is a really smart girl.
New Delhi is the capital of India`,
          `Close the window
Kindly, have your food on time.
Have some coffee.
Do the work right now.`,
          `Will they come tomorrow?
Does he dance western?
Does she paint with pastels?`
        ],

        [
          `Flowers in the garden are well maintained.
Mother had gone to office.
Teacher is so strict and won't excuse even small mistakes.`,
          `Show me your marks.
Don’t play in the rain.
Wipe your hands properly`,
          `Does the dog bite?
Did you read the article ?
Did they lose the match?
Did he laugh at me ?`
        ],

        [
          `Daniel is a lawyer.
She is a humble girl and never wear costly dresses.
The gift was sent by her brother.
I came first in the running race.`,
          `Find my eraser.
Please be quiet.
Pass the bag.`,
          `Am i speaking to Anu?
Are you an Indian?
Was it late yesterday to home?`
        ],

        [
          `Today is a holiday.
Fathima lost her water bottle.
Wild animals live in the forest.`,
          `Go now!
Don’t sit there
Don’t forget your homework
Please remember your belongings.`,
          `Were they on leave for a week?
Was he writing an email?
Is she a classic dancer?`
        ],

        [
          `Fruits and vegetables are good for health.
Father came to school yesterday.
John got a new watch as his birthday gift.`,
          `Let the dance begin.
Wake up early in the morning
Don't touch without washing your hands.`,
          `Have you completed your homework?
Has he submitted the assignment?
Had they reached home on time?
Who will raise the flag on important occasions?`
        ],

        [
          `These grapes are sour.
Taylor is punctual everyday.
My pet parrot is sleeping on the couch.
Books are kept on the table.`,
          `Please consider my opinion. 
Nobody can stop the time.
Stop biting your fingernails`,
          `Does she have difficulties in maths?
Do you want to come for the tour?
What is the time now?`
        ],

        [
          `I watched TV and forgot the homework.
John brushes his teeth twice a day.
Hen lays eggs.`,
          `Stop blabbering in front of people.
Have grit to solve the problems.
Wait for me.
Hand me the file.`,
          `When is the English hour?
Why have you scored less marks?
Where have you gone?`
        ],

        [
          `Children are playing in the garden.
India won the match.
Ram is a brave fighter.`,
          `Be there at 8’0 clock
Laugh louder for the joke
Enjoy your burger.`,
          `Which is your place in the classroom?
Who is in charge of your class? 
How do you come to school?
Whose pen is this?`
        ],

        [
          `God is love.
Papers are torn by the child.
We have planned to go for a picnic.
Table lamp was on all day.`,
          `Join us for the dinner.
Stay strong always. 
Wash your clothes.`,
          `Whom do they want to meet?
Can you help the old man?
Will you call your friend?`
        ],

        [
          `Food was spoiled because it was kept open all day.
The boy crossed the road safely.
Priya likes the diamond ring.`,
          `Sanitise your hands. 
Be careful while crossing the road.
Help each other. 
Everybody look at him.`,
          `May I come in?
Shall I take some rest?
Could he throw away the waste materials?`
        ],
        [
          `He is a popular singer.
John wakes up early in the morning.
There was heavy rain in the morning.`,
          `You keep out of this.
Somebody answer the phone.
Do forgive me.`,
          `Would they participate in the football tournament?
Should we submit an assignment tomorrow?
Shall we change the prayer time?
Can you clean the classroom?`
        ]
      ]
    },
    {
      type: 'sequence',
      label: 'Order Sentence',
      id: 'find-sentence',
      commonData: {
        printTitle: 'Rewrite the words and form proper sentence.'
      },
      data: [
        `we are happy
it is dark
dog is hungry
they are coming
I am a boy
I live in Mumbai
please come in line
we are watching tv
they are playing cricket
I am reading poems`,

        `we have holiday tomorrow
I am drinking water
the dog is barking
the crow is thirsty
the bird is wounded
people are living happily
I have a beautiful pet
he lives in a big city
honesty is the best policy
I am going to Chennai`,

        `I am sitting in sofa
Siva is sleeping in bed
the cat is drinking milk
I am thinking of icecream
sun rises in the east
I am playing with my friends
I have not done my homework
I saw a very beautiful puppy
Ravi is very good in math
English is not my favorite subject`,

        `i play tennis
Ram wants to fly
birds are chirping
he was annoyed
Kim lost her favourite box
baby is drinking milk
she is able to read
towels are above the table
Rani is afraid of snakes
she fell down again`,

        `water is freezing
little girls are singing songs
roots absorb water
superheroes are famous
virus causes infection
kitten looks frighten
i am listening to you
birds fly as a flock
i prefer to drink coffee
lion protects its cubs`,

        `i haven’t learnt cycling
please look at the mirror
she is searching her ring
it started to rain suddenly
please stand opposite to me
clean your nails frequently
show respect to elders
cobbler mend the shoes
keep pencil inside the box
world is round in shape`,

        `exercise daily to stay healthy
she has a cute smile
purple is a royal colour
that was a stormy night
cleaning is an ordinary task
Angel vanished into thin air
my battery is finished
summer holidays are always special
the diagram is really nice
father made a wonderful cake`,

        `Priya learnt to ride horse
the video will be recorded
remind him to attend meetings
be attentive in math class
Lisa is jealous of her sister
sit comfortably on the chair
vehicle is parked near theater
her father is very kind
the road is very narrow
keep the pebbles safe`,

        `you hand writing is good
friends presented a lovely gift
measure the line using ruler
maintain silence in library
he delivered a confident speech
mother’s bike cannot be repaired
Ravi was exempted from punishment
pack only the necessary things
living room is arranged neatly
Lisa speaks proud of herself`,

        `the President's speech was humorous
students has become notorious 
poor farmer had little food
diamonds are precious stones
Roy dreamt of gigantic monster
police investigated the criminals
grandma had a worried look
we enjoyed the surprise party
principal took the suggestion seriously
Nick stomped on a tomato`,

        `smart people don't repeat their mistakes
the report was sent yesterday
do you understand my question
be happy with what you have
your performance will be observed
competition details will be notified
erase the drawing and draw again
beggars live on streets
good habits make great kids
list out the grocery items`,

        `John claimed the coconut tree
the teacher gave us homework
this pen belongs to Ruby
I'm happy with my family
your stage performance was wonderful
father lit the candle
dry leaves filled the ground
John helps the needy people
children are solving sudoku
some books are damaged`,

        `eskimos live in the igloos
i like to learn guitar
cats live longer than dogs
these mangoes are sweet
Fathima bought a torchlight
playing treasure game is interesting
Sam likes to read stories
the teacher gave easy problems`,

        `my pet parrot flew away
clean your hands with sanitizer
Geetha kicked the ball
the old man walks slowly
your handwriting is legible
climber plants needs support
students are waiting in the classroom
octopus has eight tentacles
mango has one big seed
John hid the chocolate`
      ]
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
            qText: 'The declarative sentence is usually used to ',
            options: 'make statements, issue commands, ask questions'
          },
          {
            qText: 'Statements usually end with  _____',
            options: 'a full-stop/period, a question mark, an exclamation mark'
          },
          {
            qText: 'An interrogative sentence usually ends with _______.',
            options: 'a question mark, a full-stop/period, an exclamation mark'
          },
          {
            qText:
              'The subject is usually understood and not mentioned in ________ sentence.',
            options: 'an imperative, an exclamatory, an interrogative '
          },
          {
            qText: 'The most frequent sentence type is',
            options: 'declarative, interrogative, imperative'
          }
        ]
      }
    },
    {
      type: 'fillupOptions',
      label: 'Choose Appropriate Word',
      id: 'fillup',
      data: [
        `John wanted to read *a (an, the)* comic book. *He (She, It) * went to the library. But *the (a, an)* library was closed.
        *I (He, We) * am eight years old. John *is (are, am) * my friend. *He (She, It)* is also eight years old. *We (Us, Me)* go to school together.
        Today, a group of dogs barked at *us (we, he)*. *We (He, She)* ran fast. 
        *They (Them, We)* chased us. *We (Me, Us)*  climbed a tree to escape from *them (us, him)*. `,

        `There *was (were)* a tree in the backyard. It was a mango *tree (plant)*. It had *many (lot)* fruits. They were *very (so)* high. We were not *able (can)* to reach them with *our (my)* hands. 
        We saw a monkey sitting on the tree. It was suprisingly looking *at (to)* us. We said 'hi' to *the (a, an)* monkey. It was impressed. It picked and *threw (throw)* a few mangoes to us. We collected *them (us, it)* happily and left the place.`,

        `Every week we *have (has, had)* Sunday as *our (my, they)* holiday.  Why Sunday is *so (to, do)* special for me?  My father takes *me (I, we)* along for his morning walk.  We walk briskly *to (do, so)* the sea shore. It is *just (first)* ten minutes *from (on, in)* my home.  I can hear the rolling waves of the *sea (see, say)*.  It is so good to watch the waves in the morning *sun (moon, star)* rays.`
      ]
    }
  ]
};
