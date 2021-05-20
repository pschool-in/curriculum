const writing = {
  label: 'படம்',
  id: 'picture',
  img: 'image',
  list: [
    {
      type: 'completeWord',
      label: 'விடுபட்ட எழுத்தை நிரப்புக ',
      id: 'complete-word',
      commonData: {
        images: 'custom',
        lang: 'ta'
      },
      data: [
        `squirrel, அணில் , _ணில், அ, ஆ, இ, ஈ
tortoise,  ஆமை, _மை, அ, ஆ, இ, ஈ
leaf,  இலை, _லை, அ, ஆ, இ, ஈ
winged-termites,  ஈசல், _சல், அ, ஆ, இ, ஈ
world, உலகம், _லகம், உ, ஊ, எ, ஏ
whistle, ஊதல், _தல், உ, ஊ, எ, ஏ
ant, எறும்பு, _றும்பு, உ, ஊ, எ, ஏ
ladder, ஏணி, _ணி, உ, ஊ, எ, ஏ
five, ஐந்து, _ந்து, ஐ, ஒ, ஓ, ஔ
camel, ஒட்டகம், _ட்டகம், ஐ, ஒ, ஓ, ஔ
boat, ஓடம், _டம், ஐ, ஒ, ஓ, ஔ
auvai, ஔவை, _வை, ஐ, ஒ, ஓ, ஔ`,

        `grapes, திராட்சை , _ராட்சை , தி, பூ, பா, ழ
banana, வாழைப்பழம் , _ழைப்பழம், வா, பூ, பா, ழ
watermelon, தர்பூசணி , _ர்பூசணி, த, தி, பூ, வா
papaya, பப்பாளி , _ப்பாளி, ம, மா, பா, ப
mango, மாம்பழம் , _ம்பழம், ம, மா, பா, ப
jackfruit, பலாப்பழம் , _லாப்பழம், ப , பா, ழ, இ
guava, கொய்யாப்பழம் , _ய்யாப்பழம், கொ, தோ, தி, பூ
pineapple, அன்னாசிப்பழம் , _ன்னாசிப்பழம், அ, ஆ,  மா, வா
pomegranate, மாதுளை , _துளை, மா, வா, பா, ழ
apple, ஆப்பிள், _ப்பிள், ஆ,  தி, இ, வா
orange, ஆரஞ்சு, _ரஞ்சு, ஆ,  தி, இ, வா`,

        `lotus, தாமரை, _மரை, ரு, தா, த, தி
sunflower, சூரியகாந்தி , _ரியகாந்தி, சூ, தோ, தி , ஆ
marigold, சாமந்தி , _மந்தி , சா, ச, செ, சே
hibiscus, செம்பருத்தி , _ம்பருத்தி, செ, சே, பா, மா
jasmine, மல்லி, _ல்லி , ம, ப, பா, மா `,

        `aeroplane, விமானம் , _மானம், வி, வீ, வ, வா 
boat, படகு , _டகு , ம, ப, பா, மா
bus, பேருந்து , _ருந்து , பே, பா, மா, மெ 
car, மகிழுந்து , _கிழுந்து , ம, ப, பா, மா
cycle, மிதிவண்டி , _திவண்டி , மி, வி, வீ, மீ 
ship, கப்பல் , _ப்பல் , க, சா, ச, கா 
train, தொடர்வண்டி, _டர்வண்டி, தொ, தோ , து , தூ`,

        `ear, காது , _து, கா, த, தி, க 
eye, கண் , _ண், கா, த, தி, க  
foot, பாதம் , _தம்,  பா, ப, ம, மா
hair, முடி , _டி, மு, ம, மா, மெ 
hand, கை , _, கை, பை , சை , வை 
mouth, வாய் , _ய், வா, வி, வீ, வ
nose, மூக்கு , _க்கு , மூ,  மு, மா, மெ 
tooth, பல் , _ல், பா, ப, ம, மா`,

        `onion, வெங்காயம் , _ங்காயம், வெ,  வா, வே , வொ 
tomato, தக்காளி , _க்காளி, த, ந , ட , தா 
potato, உருளைக்கிழங்கு , _ருளைக்கிழங்கு, உ, ஊ , ஓ , ஒ 
cabbage, முட்டைகோசு , _ட்டைகோசு , மு,  மூ, மெ, வை 
corn, சோளம் , _ளம் , சோ, தோ , சே,  சொ
carrot, காரட் , _ரட் , கா, க, ப, ம
cucumber, வெள்ளரிக்காய் , _ள்ளரிக்காய் , வெ, வீ, வ, வா 
garlic, பூண்டு , _ண்டு , பூ, பு , ப , கு 
ginger, இஞ்சி , _ஞ்சி, இ, ஈ, பூ, பு`,

        `cat, பூனை , _னை , பூ, பு , ப , கு 
dog, நாய் , _ய் , நா, ன , னா , ண 
goat, ஆடு , _டு, ஆ, அ,  இ, ஈ
sheep, செம்மறி ஆடு , _ம்மறி ஆடு, செ, சை , ச , சே   
horse, குதிரை , _திரை , கு, கூ , கே,  கை  
pig, பன்றி , _ன்றி , பா, ப, ம, மா
elephant, யானை , _னை , யா, ய , ல, ழ 
lion, சிங்கம் , _ங்கம் , சி, சு , சீ , சூ  
monkey, குரங்கு , _ரங்கு, கு, கூ , கே, கெ 
tiger, புலி, _லி, பு, பி , பீ , பெ `,

        `fox, நரி , _ரி , ந, நா, ன , னா 
crocodile, முதலை , _தலை , மு, மூ , மீ , மே  
zebra, வரிக்குதிரை , _ரிக்குதிரை , வி, வீ, வ, வா 
bear, கரடி , _ரடி , க, ச , சே, கு
camel, ஒட்டகம் , _ட்டகம் , ஒ, ஊ , ஓ , வ
shark, சுறா, _றா, சு,கு, கூ , சூ  
whale, திமிங்கிலம் , _மிங்கிலம், தி, டி , டீ , தீ  
hippo, நீர்யானை, _ர்யானை , நீ, நி ,னி , னீ 
rhino, காண்டாமிருகம், _ண்டாமிருகம், கா, க , தோ , சே `,

        `fish, மீன் , _ன், மீ, னி , னீ , மி  
frog, தவளை , _வளை , த, ந , ட , தா 
crab, நண்டு , _ண்டு , ந , நா, ன , னா 
snake, பாம்பு , _ம்பு , பா,  பீ , பெ, ப 
rat, எலி , _லி , எ, ய , ய் , ஏ 
winged-termites, ஈசல் , _சல், ஈ, இ , ஐ , ய்  
ant, எறும்பு , _றும்பு, எ, ஏ , யே , ய 
dragonfly, தட்டான், _ட்டான், த, ந , ட , தா 
fly, ஈ, _ ,  ஈ, இ , ஐ , ய்  `,

        `crow, காகம் ,_கம்,  கா, க, ப, ம
dove, புறா , _றா , பு, பீ , பெ, ப  
duck, வாத்து , _த்து, வா, வ , ல , யா   
hen, கோழி , _ழி , கோ, கெ , கு , கை 
parrot, கிளி , _ளி, கி, கோ, கெ, கீ
peacock, மயில் , _யில் , ம, மு , மூ , மா  
sparrow, சிட்டுக்குருவி, _ட்டுக்குருவி, சி, சீ , தி , டி`
      ]
    },
    {
      id: 'match-animals',
      type: 'match',
      label: 'பொருத்துக',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `யா, elephant
சி, lion
கு, monkey
பு , tiger
வ, zebra`,

        `பூ, cat
நா, dog
ஆ, goat
ப, pig
கு, horse`,

        `தி, grapes
வா, banana
த, watermelon
ப, papaya
மா, mango`,

        `ப, jackfruit
கொ, guava
அ, pineapple
மா, pomegranate
ஆ, apple`,

        `தா, lotus
சூ, sunflower
சா, marigold
செ, hibiscus
ம, jasmine`,

        `வி, aeroplane
ப, boat
பே, bus
ம, car
மி, cycle
க, ship`,

        `கா, ear
க, eye
மு, hair
கை, hand
வா, mouth`,

        `வெ, onion
த, tomato
உ, potato
பூ, garlic
இ, ginger`,

        `கா, crow
பு, dove
வா, duck
கோ, hen
கி, parrot`,

        `மீ, fish
த, frog 
ந, crab
பா, snake
எ, rat`
      ]
    },
    {
      type: 'connectLetters',
      label: 'சொல் உருவாக்குக',
      id: 'connect-letters',
      commonData: {
        title: 'எழுத்துக்களை இணைத்து சொல் உருவாக்குக ',
        printTitle: 'Form the word using the letters.',
        type: 'image',
        lang: 'ta'
      },
      data: [
        `grapes, திராட்சை
banana, வாழைப்பழம்
watermelon, தர்பூசணி
papaya, பப்பாளி
mango, மாம்பழம்
jackfruit, பலாப்பழம்
guava, கொய்யாப்பழம்
pineapple, அன்னாசிப்பழம் 
pomegranate, மாதுளை
apple, ஆப்பிள்
orange, ஆரஞ்சு`,

        `squirrel, அணில்
tortoise,  ஆமை
leaf,  இலை
winged-termites,  ஈசல்
world, உலகம்
whistle, ஊதல்
ant, எறும்பு
ladder, ஏணி
five, ஐந்து
camel, ஒட்டகம்
boat, ஓடம்
auvai, ஔவை`,

        `lotus, தாமரை
sunflower, சூரியகாந்தி
marigold, சாமந்தி
hibiscus, செம்பருத்தி
jasmine, மல்லி`,

        `aeroplane, விமானம்
boat, படகு
bus, பேருந்து
car, மகிழுந்து
cycle, மிதிவண்டி 
ship, கப்பல்
train, தொடர்வண்டி`,

        `ear, காது
eye, கண்
foot, பாதம்
hair, முடி
hand, கை
mouth, வாய்
nose, மூக்கு 
tooth, பல்`,

        `onion, வெங்காயம் 
tomato, தக்காளி
potato, உருளைக்கிழங்கு
cabbage, முட்டைகோசு
corn, சோளம் 
carrot, காரட்
cucumber, வெள்ளரிக்காய்
garlic, பூண்டு
ginger, இஞ்சி`,

        `cat, பூனை
dog, நாய்
goat, ஆடு
sheep, செம்மறி ஆடு  
horse, குதிரை
pig, பன்றி
elephant, யானை
lion, சிங்கம்
monkey, குரங்கு
tiger, புலி`,

        `fox, நரி 
crocodile, முதலை
zebra, வரிக்குதிரை
bear, கரடி
camel, ஒட்டகம்
shark, சுறா
whale, திமிங்கிலம்
hippo, நீர்யானை
rhino, காண்டாமிருகம்`,

        `fish, மீன்
frog, தவளை
crab, நண்டு
snake, பாம்பு
rat, எலி
winged-termites, ஈசல்
ant, எறும்பு
dragonfly, தட்டான்
fly, ஈ`,

        `crow, காகம்
dove, புறா
duck, வாத்து
hen, கோழி
parrot, கிளி
peacock, மயில்
sparrow, சிட்டுக்குருவி`
      ]
    },
    {
      type: 'completeWord',
      label: 'விடுபட்ட எழுத்தை நிரப்புக ',
      id: 'write-word',
      commonData: {
        images: 'custom',
        lang: 'ta'
      },
      data: [
        `squirrel, அணில்
tortoise,  ஆமை
leaf,  இலை
winged-termites,  ஈசல்
world, உலகம்
whistle, ஊதல்
ant, எறும்பு
ladder, ஏணி
five, ஐந்து
camel, ஒட்டகம்
boat, ஓடம்
auvai, ஔவை`,

        `grapes, திராட்சை
banana, வாழைப்பழம்
watermelon, தர்பூசணி
papaya, பப்பாளி
mango, மாம்பழம்
jackfruit, பலாப்பழம்
guava, கொய்யாப்பழம்
pineapple, அன்னாசிப்பழம் 
pomegranate, மாதுளை
apple, ஆப்பிள்
orange, ஆரஞ்சு`,

        `lotus, தாமரை
sunflower, சூரியகாந்தி
marigold, சாமந்தி
hibiscus, செம்பருத்தி
jasmine, மல்லி`,

        `aeroplane, விமானம்
boat, படகு
bus, பேருந்து
car, மகிழுந்து
cycle, மிதிவண்டி 
ship, கப்பல்
train, தொடர்வண்டி`,

        `ear, காது
eye, கண்
foot, பாதம்
hair, முடி
hand, கை
mouth, வாய்
nose, மூக்கு 
tooth, பல்`,

        `onion, வெங்காயம் 
tomato, தக்காளி
potato, உருளைக்கிழங்கு
cabbage, முட்டைகோசு
corn, சோளம் 
carrot, காரட்
cucumber, வெள்ளரிக்காய்
garlic, பூண்டு
ginger, இஞ்சி`,

        `cat, பூனை
dog, நாய்
goat, ஆடு
sheep, செம்மறி ஆடு  
horse, குதிரை
pig, பன்றி
elephant, யானை
lion, சிங்கம்
monkey, குரங்கு
tiger, புலி`,

        `fox, நரி 
crocodile, முதலை
zebra, வரிக்குதிரை
bear, கரடி
camel, ஒட்டகம்
shark, சுறா
whale, திமிங்கிலம்
hippo, நீர்யானை
rhino, காண்டாமிருகம்`,

        `fish, மீன்
frog, தவளை
crab, நண்டு
snake, பாம்பு
rat, எலி
winged-termites, ஈசல்
ant, எறும்பு
dragonfly, தட்டான்
fly, ஈ`,

        `crow, காகம்
dove, புறா
duck, வாத்து
hen, கோழி
parrot, கிளி
peacock, மயில்
sparrow, சிட்டுக்குருவி`
      ]
    }
  ]
};

export default writing;
