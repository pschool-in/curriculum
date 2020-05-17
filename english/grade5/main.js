const list = {
            type: "rightOne",
            label: "Pick Correct Spelling",
            data: {
              text: `absence abcense
              queue que
              column colum
              extreme extreem
              almost allmost
              beginning begining
              surprise suprise
              calendar calender
              vehicle vehical
              difference diffrence
              awesome ausom
              giraffe girafee
              meaning meening
              address adress`
            },
          },
          {
            label: "Subject-Verb Agreement",
            type: "fillupOptions",
            data: {
              text: `Mangoes and bananas ~are (is) ~ available in summer.
              Ravi ~helps (help) ~ his mother to fetch water every day.
              There ~are (is) ~ lot of dust on the roof. 
              The latest news ~is (are) ~ not encouraging. 
              Ramya ~wants (want) ~ to be a teacher.
              My cousins ~live (lives)~ in Chennai.
              Sarah ~listens (listen)~ to music all the time.
              One of the dogs ~barks (bark)~ all night long.
              Sarath and Raj ~are (is)~ the best players in the team.
              The quality of the candles ~is (are) ~ poor.
              One of the books ~has (have)~ been missing.
              Bread and butter ~is (are)~ his favorite breakfast.
              The horses ~gallop (gallops)~ across the field.
              Some of my luggage ~was (were)~ lost.`,
            },
          },
          {
            label: "Pronouns",
            type: "fillupOptions",
            data: {
              text: `Saranya likes to cook. Everyone likes ~her (his) ~ cooking. 
              Kumar and his brother enjoy watching action films. This movie is for ~them(they) ~. 
              Do you like movies? Please join ~us (them) ~ at the theatre. 
              I will meet Sangeetha tomorrow. I am meeting ~her (him)~ for the first time. 
              You left ~your (yours) ~ text books on the table. 
              I want to know ~who (whom)~ is going to play as villain.
              Please eat whatever you want. The choice is ~yours (your)~.
              Rekha told ~him (his)~ about the celebration next week.
              Rahul cannot come with ~us (them)~ today. 
              She grows Jasmine on her terrace. ~They (Them)~ smell sweet. 
              Peacock is our national bird. ~It (They)~ has beautiful feathers.
              Ram will visit ~his (her) ~ grandmother this week.
              Don't walk fast. ~We (Us)~ feel tired. 
              Every Sunday, we meet ~them (they)~ at the sea shore. `,
            },
          },
          {
            label: "Preposition",
            type: "selectWord",
            data: {
              title: `Click on the preposition in the below sentence.`,
              text: `Radha was sitting **under** a tree. 
              The school will start **at** nine o'clock.
              We will meet **during** the lunch time.
              I cooked dinner **for** my mother.
              Monday comes **after** Sunday.
              Tell me **about** the film you saw yesterday.
              Can I come **with** you to the beach?
              We must submit the assignment **by** Saturday.
              Can you please help me **with** my homework?
              The ball rolled **down** the stairs.
              Sam needs five pieces **of** chart paper.
              Will you please give me a glass **of** water?
              Mani bought a bag **of** rice yesterday.
              Who is that little girl **with** curling hair?
              We are living **in** Chennai.
              Please don't mix the juice **with** water.
              She will be going **for** a meeting now. 
              Some birds flew **over** the bridge.
              I must complete my work **before** dinner.`,
            },
          },
          {
            label: "Identify adjective and preposition",
            type: "group",
            data: {
              title: "Drag and drop: Adjective vs Preposition.",
              types: [
                {
                  name: "Adjective",
                  text: `important, every, hot, basic, old, strong, nice`,
                },
                {
                  name: "Preposition",
                  text: `under, during, after, outside, before, over, with`,
                },
              ],
            },
          },
          {
            type: "classifySentence",
          label: "Fact Vs Opinion",
          data: { type: "factsVsOpinions" },
        },
          {
            type: "matchByDragDrop",
            label: "Match Antonyms",
            data: { type: "antonyms", level: 4 },
          },
          {
            type: "matchByDragDrop",
            label: "Match Synonyms",
            data: { type: "synonyms", level: 4 },
          },
          {
            type: "matchByDragDrop",
            label: "Match Antonyms - 2",
            data: { type: "antonyms", level: 5 },
          },
          {
            type: "matchByDragDrop",
            label: "Match Synonyms - 2",
            data: { type: "synonyms", level: 5 },
          },
        ]
