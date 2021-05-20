export default {
  label: '4 Letter Words',
  id: '4-letter-words',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Words List',
      data: {
        title: 'Words List',
        text: [
          `Find below some basic four letter words. Get familiar with them.`,
          {
            type: 'sitewords',
            text: `able, also, area, away, baby, back, ball, band, bank, base, bath, bear, beat, bell, belt, best, bike, bird, blow, blue, boat, body, bomb, bone, card, care, cash, cell, chat, chip, city, coat, cold, come, cook, deal, dear, deep, deny, desk, dial, diet, done, door, down, draw, duck, even, evil, exit, face, fact, fail, fall, farm, fast, fear, feel, fish, food, foot, fort, four, free, from, fuel, full, fund, gain, game, goat, gold, grow, hair, half, hall, hand, hard, harm, hate, have, head, hear, home, hurt, idea, inch, join, jump, just, keep, kick, kind, king, know, lake, lion, list, logo, long, look, lost, love, luck, made, main, make, many, milk, neck, news, next, nine, nose, only, open, page, pain, park, path, risk, road, rock, roof, room, root, rose, rush, safe, salt, same, star, wire, wise, wish, with, wood, word, year, your`,
            width: 90
          }
        ]
      }
    },
    {
      id: 'jumble',
      type: 'sequence',
      label: 'Form Words',
      commonData: {
        title: 'Connect the blocks to form meaningful word.',
        printTitle: 'Form the word using the letters.'
      },
      data: [
        'home, road, kind, gold, lion, goat, milk, bike, love, duck',
        'star, fish, hand, bird, bath, bear, beat, wire, wise, wish',
        'able, also, area, away, baby, back, ball, band, bank, base',
        'card,  even, food, grow, hurt, list, neck, risk, your',
        'bell,  evil, foot, hair, idea, logo, news, with, salt',
        'belt, cash, deep, exit, fort, half,  long, next, rock',
        'best, cell, deny, face, four, hall, join, look, nine, roof',
        'chat, desk, fact, free, jump, lost, nose, room, wood, word',
        'blow, chip, dial, fail, hard, just, only, root, year',
        'blue, city, diet, fall, fuel, harm, keep, luck, open, rose',
        'boat, coat, done, farm, full, kick, made, page, rush',
        'body, cold, door, fast, fund, have, main, pain, safe',
        'bomb, come, down, fear, gain, head, king, make, park',
        'bone, cook, draw, feel, game, hear, know, many, path, same'
      ]
      //lake - leak, deal - lead, dear-read, inch - chin, from - form, hate - heat, care - race
    },
    {
      id: 'reading-2',
      type: 'passage',
      label: 'Words List - 2',
      data: {
        title: 'Words List',
        text: [
          `Find below more four letter words. Get familiar with them.`,
          {
            type: 'sitewords',
            text: `book, both, burn, bush, busy, call, calm, came, camp, cool, copy, cost, crop, dark, data, date, dawn, dead, drop, dust, duty, each, earn, east, easy, edge, else, file, fill, find, fine, fire, five, flat, flow, gate, gear, gift, girl, give, glad, goal, good, hero, high, hill, hole, hope, hour, huge, hunt, lady, land, last, late, left, less, life, like, line, meat, meet, mind, moon, more, move, name, near, plan, play, poor, race, rain, read, rest, rice, ring, sand, save, seed, sell, shop, show, sick, side, size, skin, slow, snow, soft, soil, some, song, soon, sure, take, talk, tall, tank, tape, task, team, tell, test, than, that, them, then, they, thin, this, time, tour, town, tree, true, twin, type, user, very, wait, walk, wall, warm, wash, wave, weak, week, went, west, what, when, whom, wide, wife, wild, will, wind, wing, zero`,
            width: 90
          }
        ]
      }
    },
    {
      id: 'jumble-2',
      type: 'sequence',
      label: 'Form Words - 2',
      commonData: {
        title: 'Connect the blocks to form meaningful word.',
        printTitle: 'Form the word using the letters.'
      },
      data: [
        'book, cool, drop, file, gate, hero, lady, plan, sand',
        'both, copy, dust, fill, gear, high, land, meet, play, save',
        'burn, cost, duty, find, gift, hill, last, poor, seed, zero',
        'bush, crop, each, fine, girl, hole, late, mind, race, sell',
        'busy, dark, earn, fire, give, left, moon, rain, shop, went',
        'call, data, glad, hope, less, more, show, will, wide',
        'calm, date, easy, five, goal, hour, life, move, rest, sick',
        'came, dawn, edge, flat, huge, like, name, rice, side, twin',
        'camp, dead, else, flow, good, hunt, line, ring, size',
        'skin, some, take, team, them, time, type, wall, week',
        'slow, song, talk, tell, then, tour, warm, west, wife',
        'snow, soon, tall, test, they, town, very, wash, what, wild',
        'soft, tank, than, thin, tree, wait, wave, when, wind, task'
      ]
      //meat - team, user - sure, near - earn, east - seat, read-dear, dare
    }
  ]
};
