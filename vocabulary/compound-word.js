export default {
  label: 'Compound Word',
  id: 'compound-word',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Reading',
      data: {
        title: 'Compound Words',
        text: [
          `Compound words are made from two words put together.`,
          {
            type: 'sitewords',
            text:
              'aircraft, airplane, airport, allover, alongside, another, anybody, anyhow, anymore, anyone, anything, anytime, anyway, armchair, backbone, backdrop, background, backward, baseball, basketball, bathroom, became, because, bedroom, bedtime, blackmail, blueprint, bodyguard, bookmark, bookshelf, bookstore, brainwash, breakfast, butterfly, buttermilk, cabdriver, candlelight, cannot, carefree, caretaker, caveman, chairman, checkup, classroom, clockwise, comeback, commonplace, copycat, courtroom, cowboy, cupboard, daydream, daylight, dishwasher, dragonfly, eardrop, earring, earthquake, elsewhere, everything, eyeballs, eyesight, eyewitness, firearm, firecracker, firefighter, fireworks, football, footprint, footrest, forecast, forefather, forever, forget, forgive, fortnight, goodbye, goodnight, grandchild, grandmother, grandson, haircut, handbag, handbook, handcuff, hereafter, hereby, herself, highway, homemade, hometown, homework, honeybee, houseboat, housekeeper, income, indoor, inside, jackfruit, jellyfish, keyboard, keyhole, keyword, landmark, landslide, lawmaker, layman, layoff, lifeboat, lifelong, lifetime, lighthouse, mailbox, meantime, meanwhile, moonlight, moreover, motorcycle, nearby, newfound, newspaper, nightfall, nobody, nowhere, oneself, onetime, outside, overcoat, overflow, pancake, passport, paycheck, pickup, playback, playground, popcorn, postcard, railway, rainbow, raincoat, rainfall, rainwater, rubberband, scapegoat, scarecrow, schoolbus, seashore, sendoff, setback, shipwreck, shipyard, shoelace, sidekick, skyscraper, slowdown, somebody, someone, something, sometimes, somewhere, soundproof, spacewalk, starfish, steamboat, stonewall, subway, sunflower, sunshine, superman, tablecloth, tablespoon, taskmaster, teammate, teenager, textbook, themselves, therefore, thunderbolt, timetable, together, toothpaste, underground, upgrade, uppercase, upside, waistcoat, wallpaper, wardroom, warehouse, warmhearted, washroom, wastepaper, watchdog, watchman, waterfall, waterlog, watermelon, weatherman, welldone, wheelchair, whitewash, without',
            width: 120
          }
        ]
      }
    },
    {
      id: 'match',
      type: 'match',
      label: 'Match ',
      commonData: {
        title: 'Match the compound words'
      },
      data: [
        `no, body
cup, board
fort, night
sea, shore
up, side
arm, chair`,

        `some, where
cave, man
home, work
back, ward
rubber, band
book, shelf`,

        `any, how
there, fore
table, cloth
grand, son
jack, fruit
care, free`,

        `no, where
text, book
time, table
with, out
rain, bow
chair, man`,

        `warm, hearted
foot, rest
life, long
else, where
one, self
slow, down`,

        `for, give
shoe, lace
key, board
pan, cake
blue, print
hand, book`,

        `water, fall
cow, boy
butter, fly
ear, drop
bed, room
waist, coat`,

        `cab, driver
them, selves
hair, cut
over, coat
fore, father
land, slide`,

        `earth, quake
dragon, fly
come, back
check, up
book, mark
tooth, paste`,

        `up, grade
wheel, chair
day, dream
along, side
eye, sight
post, card`,

        `key, hole
home, town
night, fall
scare, crow
eye, balls
clock, wise`,

        `here, after
dish, washer
back, drop
mean, time
brain, wash
fore, cast`,

        `rain, fall
water, log
in, door
send, off
star, fish
teen, ager`,

        `mail, box
rain, coat
rail, way
honey, bee
white, wash
copy, cat`,

        `fire, cracker
pop, corn
any, time
grand, child
watch, man
water, melon`,

        `motor, cycle
mean, while
sun, flower
ward, room
moon, light
high, way`,

        `every, thing
air, port
key, word
play, back
house, boat
care, taker`,

        `fire, works
any, one
watch, dog
stone, wall
in, side
set, back`,

        `an, other
can, not
body, guard
light, house
grand, mother
here, by`,

        `back, bone
upper, case
house, keeper
any, body
be, cause
wall, paper`,

        `lay, off
foot, ball
some, thing
lay, man
life, boat
in, come`,

        `base, ball
ware, house
any, way
play, ground
near, by
pick, up`,

        `weather, man
class, room
good, bye
ear, ring
back, ground
for, get`,

        `fire, arm
air, craft
side, kick
book, store
good, night
new, found`,

        `rain, water
home, made
basket, ball
bath, room
steam, boat
day, light`,

        `for, ever
be, came
court, room
space, walk
sun, shine
jelly, fish`,

        `some, times
candle, light
school, bus
thunder, bolt
fire, fighter
break, fast`,

        `news, paper
any, thing
team, mate
sky, scraper
to, gether
sound, proof`,

        `foot, print
more, over
over, flow
scape, goat
air, plane
any, more`,

        `waste, paper
common, place
her, self
all, over
table, spoon
butter, milk
super, man`,

        `hand, bag
under, ground
law, maker
pass, port
some, one
land, mark
life, time`,

        `ship, yard
sub, way
eye, witness
black, mail
pay, check
wash, room`,

        `ship, wreck
task, master
hand, cuff
well, done
some, body
out, side
bed, time`
      ]
    },
    {
      id: 'match-image',
      type: 'match',
      label: 'Match Images ',
      data: {
        title: 'Match the images that form a compound word.',
        rightImgType: 'general',
        leftImgType: 'general',
        text: `wheel, chair
ear, ring
star, fish
butter, fly
marigold, pot`
      }
    },
    {
      id: 'match-image-2',
      type: 'match',
      label: 'Match Images - 2',
      data: {
        title: 'Match the images that form a compound word.',
        rightImgType: 'general',
        leftImgType: 'general',
        text: `rain, coat
tooth, brush
foot, ball
hand, schoolbag
sun, glasses`
      }
    },
    {
      label: 'Classify Nouns',
      type: 'group',
      id: 'classify',
      data: {
        title: 'Classify the below words as compound words or not',
        types: [
          {
            name: 'Compound Word',
            text: 'seahorse, raincoat, moonlight, cowboy, wheelchair'
          },
          {
            name: 'Not a Compound Word',
            text: 'teacher, building, school, whether, elephant'
          }
        ]
      }
    },
    {
      label: 'Pick right word',
      id: 'complete',
      type: 'completePuzzle',
      commonData: {
        type: 'rightOpen',
        title: 'Drag and drop the correct block to make a compound word.',
        printTitle: 'Fill up with the right option.'
      },
      data: [
        `no, body, side
else, where, wise
fort, night, day
some, where, why
up, side, middle
arm, chair, stool
sea, shore, beach
cave, man, boy
home, work, play
back, ward, while`,

        `rubber, band, play
book, shelf, show
any, how, what
there, fore, four
table, cloth, dress
grand, son, sun
jack, fruit, flower
care, free, fine
no, where, why
text, book, pen`,

        `time, table, chair
with, out, all
rain, bow, bun
chair, man, all
warm, hearted, headed
foot, rest, read
life, long, lone
cup, board, pan
one, self, son
slow, down, done`,

        `for, give, live
shoe, lace, loss
key, board, bored
pan, cake, tea
blue, print, book
hand, book, print
water, fall, fun
cow, boy, bat
over, coat, cool
ear, drop, fall`,

        `bed, room, run
waist, coat, cat
cab, driver, taxi
them, selves, ful
hair, cut, cane
butter, fly, fur
fore, father, parent
land, slide, ride
earth, quake, move
dragon, fly, walk`,

        `come, back, well
check, up, thing
book, mark, bag
tooth, paste, water
up, grade, class
wheel, chair, show
day, dream, think
along, side, sip
eye, sight, view
post, card, cool`,

        `key, hole, whole
home, town, area
night, fall, rise
scare, crow, eagle
eye, balls, games
clock, wise, fool
here, after, all
dish, washer, water
back, drop, fall
mean, time, day`,

        `brain, wash, wish
fore, cast, quit
rain, fall, fun
water, log, large
in, door, time
star, fish, floor
rain, coat, king
teen, ager, anger
mail, box, pot
send, off, on`,

        `rail, way, van
honey, bee, be
white, wash, wall
copy, cat, dog
fire, cracker, chill
pop, corn, carrot
any, time, clock
grand, child, kid
watch, man, boy
water, melon, fruit`,

        `motor, cycle, ring
mean, while, way
sun, flower, floor
ward, room, fare
moon, light, site
high, way, win
every, thing, say
some, thing, far
key, word, letter
play, back, front`
      ]
    },
    {
      label: 'Pick right word',
      id: 'complete-2',
      type: 'completePuzzle',
      commonData: {
        type: 'leftOpen',
        title: 'Drag and drop the correct block to make a compound word.',
        printTitle: 'Fill up with the right option.'
      },
      data: [
        `house, boat, ship
taker, care, give
works, fire, air
one, any, both
dog, watch, mobile
wall, stone, sand
port, air, wind
back, set, sell
other, an, the
not, can, call`,

        `guard, body, back
house, light, lite
mother, grand, give
by, here, hear
bone, back, black
case, upper, all
keeper, house, town
body, any, all
cause, be, bee
paper, wall, wait`,

        `off, lay, lie
ball, foot, fun
side, in, ill
man, lay, lie
boat, life, look
come, in, give
ball, base, floor
house, ware, war
way, any, and
ground, play, place`,

        `by, near, neet
up, pick, pin
man, weather, with
room, class, school 
bye, good, bad
ring, ear, mouth
ground, back, bell
get, for, fore
arm, fire, fun
craft, air, wind`,

        `kick, side, slide
store, book, note
night, good, goal
found, new, now
water, rain, wind
made, home, hall
ball, basket, cup
room, bath, drink
boat, steam, sun
light, day, night`,

        `ever, for, fore 
came, be, bee
room, court, police
walk, space, air
shine, sun, son
fish, jelly, candy
times, some, sum
light, candle, call
bus, school, time
bolt, thunder, rain`,

        `fighter, fire, wind
fast, break, bill
paper, news, info
thing, any, sum
mate, team, tell
scraper, sky, cloud
gether, to, two
proof, sound, air
print, foot, leg
over, more, less`,

        `flow, over, un
goat, scape, slope
plane, air, wind
more, any, an
paper, waste, wash
place, common, got
one, some, sum
over, all, and
milk, butter, but
man, super, silver`,

        `bag, hand, leg
ground, under, upper
maker, law, crime
self, her, his
mark, land, earth
time, life, live
yard, ship, live
way, sub, sun
mail, black, white`,

        `check, pay, say
room, wash, wish
wreck, ship, sea
master, task, talk
cuff, hand, finger
body, some, sum
side, out, mid
time, bed, floor
spoon, table, chair
port, pass, fail
done, well, pond`
      ]
    }
  ]
};
