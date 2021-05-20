export default {
  label: 'Correct Spelling - 2',
  id: 'spelling-2',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Words List',
      data: {
        title: 'Words List',
        text: `It is important that we should write without spelling mistakes. There are words which are often misspelled. Here are a list of 100 such words.
            {"type": "sitewords", "text": "absence, acceptable, accidentally, accommodate, achieve, acknowledge , acquire, address, almost, argument, awesome, because, beginning, believe, business, calendar, category, chief, colleague, column, coming, committed, comparison, congratulate, controversy, deceive, definite, desperate, difference, dilemma, disappoint, equipment, exceed, experience, extreme, foreign, friend, giraffe, great, guidance, harass, humor, ignorance, imitate, immediately, independent, intelligence, knowledge, library, license, lightning, maintenance, meaning, misspell, necessary, niece, noticeable, occasion, occurrence, omission, original, parliament, pastime, presence, promise, pronunciation, proof, quarantine, queue, really, receive, recommend, reference, referred, relevant, religious, remember, repetition, restaurant, rhyme, rhythm, secretary, separate, similar, skilful, speech, successful, surprise, therefore, tomorrow, tongue, truly, twelfth, until, vacuum, vehicle, weather, weird, welfare, writing", "width": 120 }`
      }
    },
    {
      type: 'rightOne',
      label: 'Correct Spelling',
      id: 'spelling',
      commonData: {
        title: 'Pick the Correct Spelling',
        noCaps: true
      },
      data: [
        `absence, abcense, absense
queue, que
column, colum, colunm
extreme, extreem, exstream
almost, allmost
beginning, begining, begening
surprise, suprise, surprize
calendar, calender,calander
vehicle, vehical
difference, diffrence`,

        `friend, freind
great, grate
awesome, ausom
giraffe, girafee
meaning, meening
address, adress, addrass
acceptable, acceptible
accidentally, accidentaly, accidentelly
accommodate, accomodate, acommodate
achieve, acheive, acchive`,

        `buffaloes , bufaloes
bunch, banch
bouquet, bouquat
giant, gaint
sitting, siting
pride, prite
kitten, kiten
market, markat`,

        `acknowledge , acknowlege, aknowledge
acquire, aquire, acquaire
argument, arguement, arguemant
because, becuase, becase
believe, beleive, bilieve
business, buisness, bisness
category, catagory, cetagory
chief, cheif, cheef
colleague, collaegue, colligue
coming, comming, camming`,

        `congratulate, congradulate
rhyme, rime
rhythm, rythm, rythem
committed, commited
comparison, comparsion
controversy, contraversy
deceive, decieve
definite, definate
desperate, desparate
dilemma, dilema`,

        `disappoint, dissapoint
separate, seperate
similar, similer
skilful, skilfull
speech, speach
successful, succesful, successfull
tomorrow, tommorow, tommorrow
twelfth, twelth
until, untill
vacuum, vaccuum, vaccum`,

        `equipment, equiptment
exceed, excede
experience, experiance
foreign, foriegn
guidance, guidence
harass, harrass
humor, humer
ignorance, ignorence
imitate, immitate
immediately, imediately`,

        `independent, independant
intelligence, inteligence
library, libary
license, lisence
lightning, lightening
maintenance, maintainance, maintnance
misspell, mispell, misspel
necessary, neccessary, necessery
niece, neice
noticeable, noticable`,

        `occasion, occassion
omission, ommision, omision
original, orignal
parliament, parliment
pastime, passtime, pasttime
presence, presance
promise, promiss
pronunciation, pronounciation
proof, prufe
quarantine, quarentine`,

        `really, realy
receive, recieve
recommend, recomend, reccommend
referred, refered
reference, referance, refrence
relevant, relevent, revelant
religious, religous, religius
repetition, repeatition, repitition
restaurant, restarant, restaraunt
secretary, secratary, secretery`,

        `weather, wether, whether
weird, wierd
welfare, wellfare, welfair
writing, writting, writeing
tongue, tounge
truly, truely
therefore, therefour, therefor
remember, rember, remeber
occurrence, occurreance, occureance
knowledge, noledge, knowlege`
      ]
    }
  ]
};
