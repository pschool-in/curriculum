export default {
  label: 'Prefix - Suffix',
  id: 'prefix-suffix',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Words List - Prefix',
      data: {
        title: 'Prefix',
        text: [
          'A prefix is a group of letters placed before the root word. The opposite word for lot of words are formed by adding a prefix. Find below, some of the common prefixes.',
          '# in- words',
          {
            type: 'sitewords',
            text:
              'inaccurate, incapable, incorrect, indefinite, injustice, insecure, invisible, independent, indecent,  inhuman, ineffective, indirectly, inequality, indoor',
            width: 120
          },
          '# ir- words',
          {
            type: 'sitewords',
            text:
              'irregular, irresponsible, irreplaceable, irrational, irresistable',
            width: 120
          },
          '# il- words',
          {
            type: 'sitewords',
            text: 'illegal, illegible, illogical, illiterate',
            width: 120
          },
          '# dis- words',
          {
            type: 'sitewords',
            text:
              'disobey, disclose, disadvantage, dishonest, disagree, disappear, disapprove, discomfort, disloyal, disobedient, dislike, disappoint, disinvest, disable, discover, disjoint, distrust, disown',
            width: 120
          },
          '# un- words',
          {
            type: 'sitewords',
            text:
              'unkind, unhappy, unwell, unable, untrained, unfit, unfair, untidy, unlucky, unseen, unusual, unbound, unfold, unfortunate, unjust, unknown, unlikely, unqualified, unsatisfactory, unzip, unlock, unhook, untrue, unsafe, unclear,  uncooked, unpaid, unpack',
            width: 120
          },
          '# im- words',
          {
            type: 'sitewords',
            text:
              'immature, impatient, impolite, impossible, impure, imperfect, improve, improper, immaterial, imbalance, imprison',
            width: 120
          },
          '# mis- words',
          {
            type: 'sitewords',
            text:
              'misunderstand, mismatch, misbehave, mislead, misspell, mistreat, misfield, misfit, misgive,  misplace, misuse',
            width: 120
          },
          '# de- words',
          {
            type: 'sitewords',
            text:
              'degrade, deactivate, dehydrate, depart, demoralize, dehumanize, desalinate, deselect, defame',
            width: 120
          },
          `Not all words starting with these letters are prefixes. The below words are not considered as having as prefix.`,
          {
            type: 'sitewords',
            text:
              'increase, include, industry, initial, intelligent, incident, involve, irritate, irony, illness, illustrate, discord, discussion, discipline, disgust, uncle, understand, under, underline, image, important, immediate, imagine, misty, misery, mister, missile, mission, missed, delicious, develop, deliver, decline, destiny',
            width: 120
          },
          `Prefix is not just used to create opposite words. It is used in other cases too. For example, 'pre' in the word 'prefix' itself is a prefix.`,
          '# pre- words',
          {
            type: 'sitewords',
            text:
              'prefix, preview, predetermine, preoccupied, preposition, predominant, predefined, precaution, preplan',
            width: 120
          },
          '# re- words',
          {
            type: 'sitewords',
            text:
              'return, reunite, recall, rehabit, reorganise, recover, reconsider, republish, reproduce, recalculate, rediscover, refresh, recollect, redirect, reinvest, replay, review, refund, rename, rewrite, relocate, reaction, reload, remix, renew, recharge, rebuild, refill,  restore',
            width: 120
          },
          '# over- words',
          {
            type: 'sitewords',
            text:
              'overdue, overpower, overnight, overprice, overseas, overcome, overcoat, overcooked, overdo',
            width: 120
          },
          '# other common prefixes',
          {
            type: 'sitewords',
            text:
              'extracurricular, homophone, microscope, triangle, tricycle, bicycle, unicycle',
            width: 120
          },
          `The following words are usually not considered as prefixes.`,
          {
            type: 'sitewords',
            text:
              'predict, preferable, presentation, president, precious, pressure, prepare, repeat, response, reasonable, revolution, replicate, delicious, develop, deliver, decline, destiny',
            width: 120
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Match Prefix',
      id: 'match-prefix',
      commonData: {
        title: 'Match Prefix with the word.'
      },
      data: [
        `in, accurate
ir, regular
dis, obey
un, kind
im, mature
mis, understand`,

        `in, capable
ir, responsible
dis, advantage
un, happy
im, patient
mis, match`,

        `in, correct	
ir, replaceable	
dis, honest	
un, well	
im, polite	
mis, behave`,

        `in, definite	
ir, rational	
dis, agree	
un, able	
im, possible	
mis, lead`,

        `in, justice	
ir, resistable	
dis, appear	
un, trained	
im, pure	
mis, spell`,

        `in, secure	
il, legal	
dis, approve	
un, fit	
im, perfect	
mis, treat`,

        `in, visible
il, legible
re, consider
un, fair
im, prove
mis, place`,

        `in, dependent
il, logical
dis, loyal
un, lucky
im, proper
mis, field`,

        `in, decent	
il, literate	
re, produce        
un, seen	
im, material	
mis, fit`,

        `in, human	
ir, rational	
re, publish        
un, usual	
im, prison	
mis, use`,

        `pre, fix	
de, grade	
re, turn	
over, due	
un, bound
extra, curricular`,

        `pre, view	
de, activate	
re, unite	
over, power	
un, fold	
dis, able`,

        `pre, occupied
de, part	
re, habit	
over, price	
tri, angle	
un, just`,

        `pre, position	
de, moralize	
dis, cover		
over, seas	
tri, cycle	
un, known`,

        `pre, dominant	
de, humanize	
re, cover	
over, come	
bi, cycle	
un, likely`,

        `pre, defined	
de, salinate	
dis, comfort
over, coat	
uni, cycle	
un, qualified`,

        `pre, caution	
de, select	
dis, like        
over, cooked	
homo, phone
un, satisfactory`,

        `pre, plan	
de, fame	
dis, obedient
over, do	
re, organise
un, zip`
      ]
    },
    {
      label: 'Choose Right Prefix',
      id: 'complete-prefix',
      type: 'completePuzzle',
      commonData: {
        type: 'leftOpen',
        title: 'Drag and drop the correct prefix.',
        printTitle: 'Fill up with the right option.',
        leftWidth: 90,
        rightWidth: 210
      },
      data: [
        `well, un, in
legal, il, un
satisfactory, un, in
accurate, in, un
possible, im, mis
polite, im, un
dependent, in, un
use, mis, un
prove, im, in
joint, dis, un`,

        `fold, un, dis
door, in, mis
balance, im, in
happy, un, in
literate, il, un
fit, mis, im
appear, dis, un
human, in, dis
spell, mis, dis
pure, im, mis`,

        `resistible, ir, in
likely, un, mis
approve, dis, in
justice, in, un
known, un, mis
effective, in, un
definite, in, un
mature, im, in
behave, mis, dis
kind, un, mis`,

        `zip, un, in
fit, un, in
visible, in, un
fair, un, mis
capable, in, un
field, mis, dis
give, mis, un
honest, dis, in
invest, dis, mis
appoint, dis, mis`,

        `replaceable, ir, il
usual, un, in
fortunate, un, in
directly, in, un
comfort, dis, mis
agree, dis, mis
qualified, un, in
place, mis, un
correct, in, dis
able, un, in`,

        `regular, ir, il
trained, un, il
bound, un, mis
match, mis, dis
proper, im, in
rational, ir, il
perfect, im, in
understand, mis, un
just, un, in
obey, dis, mis`,

        `logical, il, ir
decent, in, il
cover, dis, in
material, im, un
secure, in, mis
lead, mis, un
seen, un, mis
responsible, ir, in
able, dis, mis
advantage, dis, mis`,

        `loyal, dis, mis
lucky, un, dis
prison, im, in
equality, in, im
obedient, dis, mis
like, dis, mis
treat, mis, dis
patient, im, in
legible, il, ir
use, mis, in`,

        `kind, un, dis
appear, dis, un
agree, dis, un
fit, un, dis
obey, dis, un
fair, un, dis
honest, dis, un
loyal, dis, un
happy, un, dis
well, un, dis`,

        `determine, pre, dis
habit, re, in
collect, re, dis
produce, re, ir
hydrate, de, dis
curricular, extra, over
unite, re, over
fame, de, dis
due, over, re
come, over, re`,

        `power, over, un
plan, pre, de
view, re, dis
grade, de, un
moralize, de, re
calculate, re, de
caution, pre, over
call, re, pre
consider, re, un
name, re, in`,

        `view, pre, un
invest, re, ir
fresh, re, dis
do, over, pre
cover, re, pre
part, de, di
fund, re, de
select, de, dis
cycle, tri, over
cycle, bi, by`,

        `phone, homo, over
play, re, un
night, over, pre
turn, re, un
dominant, pre, re
cycle, uni, un
salinate, de, un
humanize, de, un
price, over, pre
scope, micro, over
tidy, un, in`,

        `cooked, over, pre
defined, pre, over
position, pre, over
direct, re, pre
fix, pre, un
discover, re, pre
activate, de, micro
seas, over, de
occupied, pre, dis
angle, tri, bi`,

        `publish, re, dis
organise, re, pre
coat, over, pre
pack, un, en
paid, un, im
own, dis, in
cooked, un, dis
action, re, dis
trust, dis, en
store, re, in`,

        `close, dis, in
load, re, in
build, re, en
clear, un, dis
true, un, re
write, re, en
tidy, un, en
new, re, en
lock, un, dis
locate, re, un`,

        `charge, re, ir
hook, un, en
fill, re, en
mix, re, un
safe, un, re`
      ]
    },
    {
      type: 'rightOne',
      label: 'Not a Prefix',
      id: 'non-prefix',
      commonData: {
        title:
          'Which of the following word is usually not considered as having a prefix',
        noCaps: true
      },
      data: [
        `presentation, preplan, preposition, preview
deliver, defame, deselect, degrade
under, unfit, unlikely, unjust
revolution, return, recall, replay
underline, unfit, unlikely, unjust
delicious, depart, deactivate, dehumanize
destiny, defame, deselect, degrade
discord, discover, disable, dislike
decline, depart, deactivate, dehumanize
president, predominant, predetermine, precaution`,

        `incident, indoor, inequality, indirectly
precious, preplan, preposition, preview
imagine, immature, impure, imprison
deliver, depart, deactivate, dehumanize
repeat, return, recall, replay
develop, defame, deselect, degrade
mission, misfit, mistreat, mislead
mister, misfit, mistreat, mislead
include, indoor, inequality, indirectly
replicate, return, recall, replay`,

        `preferable, predominant, predetermine, precaution
misty, misplace, mismatch, misfield
image, immature, impure, imprison
irony, irrational, irreplaceable, preplan
disgust, discover, disable, dislike
involve, insecure, injustice, incorrect
reasonable, return, recall, replay
decline, defame, deselect, degrade
missed, misplace, mismatch, misfield
understand, unfit, unlikely, unjust`,

        `irritate, irrational, irreplaceable, preplan
prepare, preplan, preposition, preview
initial, indoor, inequality, indirectly
discipline, discover, disable, dislike
important, immature, impure, imprison
destiny, depart, deactivate, dehumanize
develop, defame, deselect, degrade
intelligent, insecure, injustice, incorrect
misery, misfit, mistreat, mislead
illustrate, illegal, illegible, illogical`,

        `delicious, depart, deactivate, dehumanize
increase, indoor, inequality, indirectly
predict, predominant, predetermine, precaution
immediate, immature, impure, imprison
pressure, preplan, preposition, preview
industry, insecure, injustice, incorrect
missile, misplace, mismatch, misfield
response, return, recall, replay
illness, illegal, illegible, illogical
uncle, unfit, unlikely, unjust
discussion, discover, disable, dislike`
      ]
    },
    {
      id: 'reading-suffix',
      type: 'passage',
      label: 'Words List - Suffix',
      data: {
        title: 'Suffix',
        text: [
          'A suffix is a group of letters added to the ending of words, and it changes the meaning of the word slightly.',
          '# -ful words',
          {
            type: 'sitewords',
            text:
              'playful, thankful, hopeful, handful, skilful, respectful, successful, unsuccessful, powerful, resourceful,  beautiful, wonderful, meaningful, thoughtful, eventful, stressful, colorful, doubtful, careful, helpful, harmful, useful',
            width: 120
          },
          '# -ous words',
          {
            type: 'sitewords',
            text:
              'famous, jealous, religious, rediculous, various, obvious, serious, curious, previous, numerous, generous, precious, dangerous, ferocious, injurious, continuous, suspicious, courageous, prestigious',
            width: 120
          },
          '# -al words',
          {
            type: 'sitewords',
            text:
              'fictional, regional, musical, accidental, logical, national, official, personal, approval, cultural, festival, optional, seasonal, marginal, parental, habitual, financial, technical, emotional, individual, industrial, historical',
            width: 120
          },
          '# -ty words',
          {
            type: 'sitewords',
            text:
              'security, validity, quality, ability, society, reality, cruelty, thirsty, activity, priority, humanity, inability, sincerity, stupidity, difficulty, popularity, visibility, honesty, opportunity, nationality',
            width: 120
          },
          '# -ment words',
          {
            type: 'sitewords',
            text:
              'argument, achievement, encouragement, excitement, payment, movement, argument, judgment, basement, pavement, agreement, equipment, statement, treatment, placement, enjoyment, management, government, employment, retirement, attachment, development, environment, improvement, appointment',
            width: 120
          },
          '# -ion words',
          {
            type: 'sitewords',
            text:
              'promotion, addition, election, relation, duration, rotation, donation, education, operation, direction, selection, pollution, animation, digestion, production, population, discussion, opposition, limitation, suggestion, correction, estimation, information, application, preparation',
            width: 120
          },
          '# -ive words',
          {
            type: 'sitewords',
            text:
              'attentive, active, expensive, objective, exclusive, sensitive, intensive, talkative, respective, attractive, initiative, aggressive, productive, supportive, decorative, alternative, progressive',
            width: 120
          },
          '# -less words',
          {
            type: 'sitewords',
            text:
              'meaningless, hopeless, homeless, mindless, endless, useless, jobless, ageless, wireless, homeless, careless, fearless, powerless, pointless, paperless, toothless, regardless, effortless',
            width: 120
          },
          '# -ly words',
          {
            type: 'sitewords',
            text:
              'softly, slowly, happily, crazily, madly, largely, monthly, heavily, readily, actually, directly, friendly, honestly, famously, generally, certainly, perfectly, naturally, frequently, originally, especially, relatively, immediately, accordingly, effectively',
            width: 120
          },
          '# -ship words',
          {
            type: 'sitewords',
            text:
              'friendship, membership, citizenship, hardship, leadership, fellowship, readership, ownership',
            width: 120
          },
          '# -wards words',
          {
            type: 'sitewords',
            text: 'towards, afterwards, backwards, inwards, outwards',
            width: 120
          },
          '# -age words',
          {
            type: 'sitewords',
            text:
              'marriage, orphanage, outage, drainage, storage, teenage, mileage, encourage, percentage, discourage, pilgrimage',
            width: 120
          },
          '# -wise words',
          {
            type: 'sitewords',
            text: 'otherwise, likewise, clockwise, weatherwise',
            width: 120
          },
          '# -ness words',
          {
            type: 'sitewords',
            text:
              'heaviness, highness, sickness, rudeness, happiness, fitness, illness, sadness, weakness, kindness, laziness, thickness, brightness',
            width: 120
          },
          '# -ate words',
          {
            type: 'sitewords',
            text:
              'collaborate, mediate, create, eradicate, detonate, passionate, fortunate, approximate, negotiate, interrogate, congratulate, discriminate, differentiate, estimate',
            width: 120
          },
          '# -cal words',
          {
            type: 'sitewords',
            text:
              'musical, technical, practical, logical, periodical, electrical, historical, grammatical',
            width: 120
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Match Suffix',
      id: 'match-suffix',
      commonData: {
        title: 'Match Suffix with the word.'
      },
      data: [
        `play, ful	
soft, ly	
fiction, al	
securi, ty	
argu, ment	
promot, ion`,

        `thank, ful	
slow, ly	
region, al	
validi, ty 	
achieve, ment	
addit, ion`,

        `hope, ful	
happi, ly	
music, al	
quali, ty	
encourage, ment	
elect, ion`,

        `hand, ful	
crazi, ly	
accident, al	
abili, ty	
excite, ment	
relat, ion`,

        `skil, ful	
mad, ly	
logic, al	
socie, ty	
pay, ment	
durat, ion`,

        `respect,ful	
large,ly	
nation,al	
reali,ty	
move,ment	
rotat,ion`,

        `success, ful	
month, ly	
offici, al	
cruel, ty	
argu, ment	
donat, ion`,

        `unsuccess, ful	
heavi, ly	
person, al	
thirs, ty	
judg, ment	
educat, ion`,

        `power, ful	
readi, ly	
approv, al	
activi, ty	
base, ment	
operat, ion`,

        `resource, ful	
actual, ly	
cultur, al	
priori, ty	
pave, ment	
direct, ion`,

        `beauti, ful	
direct, ly	
festiv, al	
humani, ty	
agree, ment	
select, ion`,

        `wonder, ful	
friend, ly	
option, al	
inabili, ty	
equip, ment	
pollut, ion`,

        `meaning, ful	
honest, ly	
season, al	
sinceri, ty	
state, ment	
animat, ion`,

        `thought, ful	
famous, ly	
margin, al	
stupidi, ty	
treat, ment	
digest, ion`,

        `event, ful	
general, ly	
parent, al	
difficul, ty	
place, ment	
product, ion`,

        `stress, ful	
certain, ly	
habitu, al	
populari, ty	
enjoy, ment	
populat, ion`,

        `color, ful	
perfect, ly	
financi, al	
visibili, ty	
manage, ment	
discuss, ion`,

        `doubt, ful	
natural, ly	
technic, al	
hones, ty	
govern, ment	
opposit, ion`,

        `care, ful	
frequent, ly	
emotion, al	
opportuni, ty	
employ, ment	
limitat, ion`,

        `help, ful	
original, ly	
individu, al	
nationali, ty	
retire, ment	
suggest, ion`,

        `attent, ive
especial, ly
drain, age
meaning, less
correct, ion
collabor, ate`,

        `act, ive
relative, ly
stor, age
hope, less
estimat, ion
medi, ate`,

        `expens, ive
immediate, ly
teen, age
home, less
informat, ion
cre, ate`,

        `object, ive
according, ly
fam, ous
mind, less
applicat, ion
eradic, ate`,

        `exclus, ive
effective, ly
jeal, ous
end, less
harm, ful
deton, ate`,

        `sensit, ive
preparat, ion
religi, ous
use, less
out, wards
passion, ate`,

        `intens, ive
use, ful
ridicul, ous
job, less
marri, age
fortun, ate`,

        `talkat, ive
industri, al
vari, ous
age, less
orphan, age
approxim, ate`,

        `respect, ive
historic, al
obvi, ous
wire, less
out, age
negoti, ate`,

        `attract, ive
friend, ship
seri, ous
home, less
heavi, ness
interrog, ate`,

        `initiat, ive
member, ship
curi, ous
care, less
high, ness
congratul, ate`,

        `aggress, ive
citizen, ship
previ, ous
fear, less
sick, ness
discrimin, ate`,

        `product, ive
hard, ship
numer, ous
power, less
rude, ness
differenti, ate`,

        `support, ive
leader, ship
gener, ous
point, less
happi, ness
estim, ate`,

        `decorat, ive
fellow, ship
preci, ous
paper, less
fit, ness
music, al`,

        `alternat, ive
reader, ship
danger, ous
tooth, less
ill, ness
technic, al`,

        `progress, ive
owner, ship
feroci, ous
regard, less
sad, ness
practic, al`,

        `attach, ment
other, wise
injuri, ous
effort, less
weak, ness
logic, al`,

        `develop, ment
like, wise
continu, ous
to, wards
kind, ness
periodic, al`,

        `environ, ment
clock, wise
suspici, ous
after, wards
lazi, ness
electric, al`,

        `improve, ment
weather, wise
courage, ous
back, wards
thick, ness
historic, al`,

        `appoint, ment
encour, age
prestigi, ous
in, wards
bright, ness
grammatic, al`
      ]
    },
    {
      label: 'Choose Right Suffix',
      id: 'complete-suffix',
      type: 'completePuzzle',
      commonData: {
        type: 'rightOpen',
        title: 'Drag and drop the correct suffix.',
        printTitle: 'Fill up with the right suffix.',
        leftWidth: 180,
        rightWidth: 140
      },
      data: [
        `attent, ive, ate
care, less, ness
courage, ous, ive
ill, ness, ful
friend, ship, ness
marri, age, ate
hand, ful, ness
manage, ment, ful
back, wards, less
interrog, ate, ive`,

        `seri, ous, ate
hope, ful, ness
medi, ate, ous
previ, ous, ate
move, ment, ness
doubt, ful, ment
respect, ful, ness
relative, ly, ty
fortun, ate, ous
thank, ful, ness`,

        `job, less, ness
jeal, ous, ate
crazi, ly, ty
activi, ty, ly
abili, ty, ly
preci, ous, ate
applicat, ion, ing
person, al, ly
resource, ful, ness
fellow, ship, ment`,

        `injuri, ous, ate
securi, ty, ly
redicul, ous, ness
sad, ness, ous
vari, ous, ness
color, ful, ness
kind, ness, ment
argu, ment, ness
fiction, al, ly
region, al, ness`,

        `festiv, al, ly
priori, ty, al
treat, ment, ness
home, less, ment
stor, age, ous
improve, ment, ness
state, ment, ness
weak, ness, ment
humani, ty, ly
orphan, age, ous`,

        `season, al, ous
music, al, ly
fear, less, ment
respect, ive, age
care, ful, ment
mind, less, ly
correct, ion, less
develop, ment, ion
excite, ment, less
meaning, less, ment`,

        `logic, al, ly
perfect, ly, al
socie, ty, ly
gener, ous, age
hope, less, ness
achieve, ment, ion
prestigi, ous, age
hones, ty, ly
sick, ness, ment
quali, ty, ly`,

        `bright, ness, ment
inabili, ty, ly
offici, al, ty
approv, al, ous
environ, ment, ness
alternat, ive, ly
informat, ion, ment
enjoy, ment, ion
equip, ment, ive
use, ful, ness`,

        `durat, ion, ous
talkat, ive, ion
parent, al, ly
govern, ment, ness
help, ful, ion
preparat, ion, ate
passion, ate, ness
argu, ment, ous
relat, ion, ment
technic, al, ly`,

        `cruel, ty, ous
wonder, ful, ness
progress, ive, ness
thick, ness, ous
nationali, ty, ly
direct, ion, ous
heavi, ness, ty
educat, ion, ness
natural, ly, ty
effective, ly, ty`,

        `digest, ion, ness
limitat, ion, ing
animat, ion, ous
deton, ate, ion
leader, ship, ness
percent, age, ous
thought, ful, ness
estimat, ion, ous
electric, al, ty
point, less, ful`,

        `success, ful, ness
suspici, ous, ly
elect, ion, ment
reader, ship, ment
like, wise, ship
immediate, ly, ship
retire, ment, wise
object, ive, ous
teen, age, ness
continu, ous, ate`,

        `music, al, ly
happi, ness, ship
clock, wise, ment
aggress, ive, ate
product, ion, ment
out, wards, wise
after, wards, ment
effort, less, ship
emotion, al, ly
stress, ful, ness`,

        `sinceri, ty, ly
opportuni, ty, ly
promot, ion, ous
populari, ty, ate
to, wards, ment
select, ion, ous
individu, al, ly
tooth, less, wise
practic, al, ly
opposit, ion, ly`,

        `especial, ly, ty
eradic, ate, age
exclus, ive, ous
industri, al, age
play, ful, ness
heavi, ly, ty
actual, ly, ty
home, less, ment
agree, ment, less
initiat, ive, age`,

        `rude, ness, ful
other, wise, ship
skil, ful, ment
out, age, ous
attract, ive, wise
original, ly, ty
soft, ly, ful
unsuccess, ful, ly
power, less, ment
nation, al, ly`,

        `mile, age, ful
appoint, ment, age
certain, ly, age
historic, al, ly
beauti, ful, age
accident, al, ly
fit, ness, less
discrimin, ate, ous
habitu, al, ly
regard, less, ness`,

        `slow, ly, al
congratul, ate, al
event, ful, ment
validi, ty, ly
populat, ion, ly
reali, ty, al
general, ly, ion
stupidi, ty, ly
drain, age, ous
direct, ly, al`,

        `addit, ion, al
member, ship, ment
place, ment, wise
suggest, ion, ment
end, less, ness
donat, ion, al
harm, ful, ment
periodic, al, ous
obvi, ous, al
cultur, al, ous`,

        `thirs, ty, ly
financ, ial, ate
differenti, ate, ial
estim, ate, ly
curi, ous, ate
logic, al, ous
encourage, ment, ly
religi, ous, ment
encour, age, ous
fam, ous, age`,

        `use, less, ness
historic, al, ly
grammatic, al, ty
approxim, ate, ous
friend, ly, al
act, ive, ate
base, ment, ate
negoti, ate, ment
power, ful, ly
sensit, ive, ful`,

        `cre, ate, ous
owner, ship, wise
famous, ly, al
danger, ous, ly
technic, al, ness
difficul, ty, ly
high, ness, less
discuss, ion, ous
rotat, ion, ous
lazi, ness, ful`,

        `pilgrim, age, ness
pave, ment, ous
collabor, ate, ness
citizen, ship, wise
frequent, ly, ty
honest, ly, ty
discour, age, ous
option, al, ly
wire, less, ness
readi, ly, ty`,

        `meaning, ful, ness
weather, wise, ness
in, wards, ship
visibili, ty, al
pollut, ion, ness
hard, ship, ment
employ, ment, ship
numer, ous, ate
paper, less, ous
large, ly, al`,

        `expens, ive, ous
decorat, ive, ous
according, ly, ty
operat, ion, ous
happi, ly, ty
pay, ment, ness
mad, ly, al
margin, al, ly
judg, ment, ness
month, ly, al`,

        `intens, ive, ly
feroci, ous, ive
support, ive, ous
product, ive, ous
age, less, ness
attach, ment, ness`
      ]
    },
    {
      id: 'wordlist-both',
      type: 'passage',
      label: 'Reading',
      data: {
        title: 'Prefix and Suffix',
        text: [
          'There are many words that have both prefix and suffix. Find below some words list. Get familiar with them.',
          {
            type: 'sitewords',
            text:
              'deactivation,  deforestation,  disability,  disappointment,  discovering,  dishonestly,  disloyalty,  disqualified,  empowerment,  encouragement,  enjoyment,  fulfillment,  illegally,  immaturity,  immeasurable,  improvement,  investment,  irregularly,  irresponsible,  irreversible,  misbehavior,  misleading,  misspelling, overcoming,  overcooked,  precautious,  preplaning,  reappearance,  rearrangement,  recalled,  recollection,  recovering,  refreshment,  replacement,  representation,  reproductive,  returning,  unbelievable,  unbreakable,  understanding,  undoubtedly,  unfortunately,  unfriendly,  unhappiness,  unlikable,  unmistakeable,  unpredictable,  unproductive,  unselfishly,  unsuccessful,  unwilling',
            width: 120
          }
        ]
      }
    },
    {
      label: 'Choose Both Prefix and Suffix',
      id: 'prefix-suffix',
      type: 'completePuzzle',
      commonData: {
        type: 'bothOpen',
        title: 'Drag and drop the correct prefix and suffix.',
        printTitle: 'Fill up with the right prefix and suffix',
        leftWidth: 60,
        rightWidth: 110,
        midWidth: 160
      },
      data: [
        `success, un, in, ful, ness
prove, im, un, ment, ful
product, un, in, ive, ion
fresh, re, de, ment, ness
collect, re, un, ion, ment
invest, re, de, ment, ness
cover, re, de, ing, ful
doubted, un, in, ly, ness
loyal, dis, de, ty, ness
activa, de, di, tion, ly`,

        `lik, un,in, able, ty
place, re, ir, ment, tion
measur, im, in, able, ment
courage, en, in, ment, tion
believ, un, en, able, ness
selfish, un, dis, ly, ty
arrange, re, ir, ment, ness
appear, re, de, ance, ness
honest, dis, un, ly, ment
product, re, ill, ive, ly`,

        `present, re, de, ation, tive
break, un, dis, able, tion
legal, il, un, ly, ty
regular, ir, dis, ly, ed
revers, ir, un, ible, able
respons, ir, un, ible, able
abili, dis, un, ty, ting
friend, un, in, ly, ty
joy, en, fun, ment, tion
behavi, mis, dis, or, er`,

        `cover, dis, in, ing, tion
appoint, dis, im, ment, ive
happi, un, in, ness, tive
fortunate, un, in, ly, ty
qualifi, dis, in, ed, tion
maturi, im, in, ty, ly
spell, mis, un, ing, ion
plan, pre, bi, ning, tion
cauti, pre, bi, ous, tion
turn, re, un, ing, ous`,

        `call, re, un, ed, ness
cook, over, in, ed, ful
com, over, un, ing, ed
predict, un, in, able, ing
fill, ful, fun, ment, ing
forestat, de, un, ion, ness
 power, em, un, ment, ing
mistake, un, im, able, ble
lead, mis, dis, ing, ness
will, un, in, ing, able`
      ]
    }
  ]
};
