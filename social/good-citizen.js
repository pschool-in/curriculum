export default {
  label: 'Good Citizen',
  id: 'good-citizen',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Good Citizen - Passage',
      data: {
        title: 'Good Citizen',
        text: `Man is a social animal. Human beings are bestowed with senses. Human beings think and act using their senses. They are born free but bound in the social web. They cannot live alone. They need social and emotional support. To live in the society they need to develop some good values.
          We are born with few values and rights. These values are further polished in educational institutions. The aim of education is to change a person into a valuable person.
          Good values are the qualities of a person that keep society running. These qualities can be developed by all. The term ‘civic’ relates to people or civilian or citizen of a country. People should live together in unity.
          Living together in harmony despite all the disparities is a significant value. Helping others is also an important value. There should be no disparity among people and all are one. Today’s children are tomorrow’s citizens of the nation. Moral and good values have to be grown among children so that they may become valuable citizens.
          # Personal values
          Personal value is the basic value for every individual. We must bring out the hidden values of a person that they acquire from their experiences. This leads to their overall development.
          # Cultural values
          To become well mannered or cultured is an essence of the society. Irrespective of language and religion people live together in harmony. This help to maintain cultural values.
          # Social values
          We can maintain good values in public places by following the points given below.
          1. Maintain good relations with people
          2. Respect elders
          3. Respect nature
          4. Be tolerant
          5. Maintain friendship
          # Disciplinary values
          Punctuality, involvement, treating everyone as equal, doing work on time, holding your morals, doing duties without fail, etc. are disciplinary values.
          # Constitutional values:
        1. Safeguard the public properties
        2. Maintain the unity and integrity of the nation
        3. Develop scientific attitude
        4. Protect the natural resources
        5. Care for the environment
        6. Honour the national symbols
        7. Respect martyrs and their sacrifices
        8. Preserve our culture and heritage
        9. Develop patriotism
        A citizen is a person who is a member of a particular country and enjoys various rights and executes his duties. A sovereign state provides Citizenship to its people. Right to live, right to vote, right to work and reside anywhere in the country are the other rights enjoyed by the citizens.
        There are some negative factors that affect our values:
        1. Extreme faith in religion leads to communalism.
        2. Don’t break the queue / rules.
        3. Spitting and dumping garbage anywhere.
        4. Polluting land and water.
        Factors that enriches good values are:
        1. Literacy
        2. Creating awareness and interests
        3. Trying hard till success
        4. One’s own evaluation
        5. Acceptance
        6. Self confidence
        One main feature of good value is to preserve hygiene. Each person should be taught to be hygienic and follow the routine below.
1. Wakeup early
2. Brush your teeth
3. Have a bath
4. Wear clean clothes
5. Wear slippers / shoes
6. Trim hair and cut the nails
7. Wash hands before and after meals.`
      }
      /*
         Sambhar Salt Lake in Rajasthan is one of the important inland salt water lake in India.*/
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
            qText: 'Man is a ______ animal.',
            options: 'social, mathematical, scientific'
          },
          {
            qText: `The love for one's country is known as _____.`,
            options: 'patriotism, criticism, communism'
          },
          {
            qText: 'Which of the following are considered as bad values?',
            options:
              '* Polluting land and water, Self Confidence, Trying hard till success, * Breaking the queue'
          },
          {
            qText: 'Which of the following helps in protecting nature?',
            options:
              'Reducing the use of plastic paper, Respecting elders, Treating everyone as equal'
          },
          {
            qText:
              'What should we do while living with people from different cultural background? ',
            options: `Showing respect to different religions and languages.
              Have different types of foods from various cultural background.
              Learn atleast four different languages.`
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
            text: `We are born with values and rights.
            Honouring national symbol is a constitutional value.`
          },
          {
            name: 'False',
            text: `Human beings can live alone in this world.
            Being punctual is a social value.
            We are born with values, and it cannot be modified.`
          }
        ]
      }
    },
    {
      label: 'Personal vs Social Values',
      type: 'group',
      id: 'group',
      data: {
        title: 'Classify the below as Personal or Social Values.',
        types: [
          {
            name: 'Social Value',
            text: 'respect elders, respect nature, tolerance'
          },
          {
            name: 'Personal Value',
            text: 'punctuality, hardwork, hygiene'
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Match ',
      id: 'match',
      data: {
        title: 'Match the related words.',
        text: `Literacy, Education
        Punctuality, Time
        Plastic, Pollution
        Country, Citizen
        Elders, Respect
        Cultural, Tolerance`
      }
    },
    {
      label: 'Fill Up',
      id: 'fillup',
      type: 'matchByDragDrop',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper places.',
        styles: {
          dashWidth: 80
        },
        text: `We show *love* to all living beings. Help the poor with *generosity*. *honesty* is the best policy. The best relationship is *friendship*. 
        We show *hospitality* to our guests. We show *mercy* to those who suffer. Always speak the *truth*. We must maintain *peace* in public.`
      }
    },
    {
      type: 'rightOne',
      id: 'spell',
      label: 'Right Spelling',
      data: {
        title: 'Pick the word with the right spelling',
        noCaps: true,
        text: `pollution, pollusion, pollucion
        education, etucation, edukation
        society, socaity, sosaity
        cultural, caltural, culturel
        tolerance, toleranse, tolarance
        hygiene, hygene, hygine
        hospitality, haspitality, haspitelity
        generosity, generocity, ganerosity
        significant, significent, signeficant`
      }
    },
    {
      type: 'match',
      label: 'Match - 2 ',
      id: 'match-2',
      data: {
        title: 'Match the related words.',
        text: `Public Property, Bus
        National Symbol, Tricolor Flag
        Environment, Tree
        Different Languages, Harmony
        Education, Empowerment`
      }
    },
    {
      type: 'match',
      label: 'Match - 3',
      id: 'match-3',
      data: {
        title: 'Match the related words.',
        text: `Personal character,Punctuality
        Culture, Language
        Society,Tolerance
        Duty,Good value
        Unemployment, Affecting factor`
      }
    }
  ]
};
