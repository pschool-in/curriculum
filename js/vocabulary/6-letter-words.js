export default {
  label: '6 Letter Words',
  id: '6-letter-words',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Words List',
      data: {
        title: 'Words List',
        text: [
          `Find below some basic six letter words. Get familiar with them.`,
          {
            type: 'sitewords',
            text: `active, afraid, amount, animal, answer, anyone, appear, attack, attend, author, battle, become, bottle, bottom, branch, bright, burden, camera, charge, circle, coffee, course, damage, danger, degree, demand, device, direct, driver, eleven, energy, enough, export, family, famous, female, follow, forget, future, health, lesson, listen, manner, market, matter, member, memory, middle, minute, mirror, mother, museum, myself, normal, number, office, online, option, output, please, prison, recent, remain, repair, report, result, reward, salary, school, screen, season, second, select, silver, simple, single, speech, street, strong, summer, system, talent, twenty, update, useful, volume, weight, window, winner, wonder`,
            width: 100
          }
        ]
      }
    },
    {
      id: 'jumble',
      type: 'sequence',
      label: 'Form Words',
      commonData: {
        title: 'Connect the blocks to form meaningful word.'
      },
      data: [
        'active, forget, silver, degree, remain, bottle, minute, update, middle, twenty',
        'afraid, future, single, device, repair, branch, mother, volume, recent, author',
        'animal, health, speech, direct, report, bright, myself, window, select, damage',
        'anyone, lesson, street, driver, result, burden, normal, member, talent, follow',
        'appear, listen, system, eleven, reward, camera, number, course, prison, attack',
        'attend, manner, useful, energy, salary, charge, office, summer, family, season',
        'battle, memory, weight, enough, screen, coffee, option, online, answer, matter',
        'become, mirror, winner, famous, second, danger, output, export, school, circle',
        'bottom, museum, wonder, female, simple, demand, please, amount, market, strong'
      ]
    },
    {
      id: 'reading-2',
      type: 'passage',
      label: 'Words List - 2',
      data: {
        title: 'Words List',
        text: [
          `Find below more six letter words. Get familiar with them.`,
          {
            type: 'sitewords',
            text: `accept, action, advice, always, august, beauty, before, better, border, breath, bridge, button, cannot, center, change, choice, common, corner, create, decide, define, depend, design, detail, dinner, doctor, eighth, engine, escape, expand, expert, finger, finish, forest, friend, garden, global, ground, height, honest, income, inside, leader, length, letter, liquid, little, manage, margin, master, mobile, narrow, nation, nature, object, orange, parent, people, person, planet, plenty, police, profit, proper, public, reader, reason, record, remote, remove, repeat, replay, sample, search, secret, silent, sister, social, source, square, status, thirty, travel, trying, unique, wealth, winter, worker, writer, yellow`,
            width: 100
          }
        ]
      }
    },
    {
      id: 'jumble-2',
      type: 'sequence',
      label: 'Form Words - 2',
      commonData: {
        title: 'Connect the blocks to form meaningful word.'
      },
      data: [
        'breath, narrow, writer, finger, sister, detail, police, replay, change, nation',
        'choice, nature, accept, garden, social, doctor, profit, margin, square, expand',
        'common, object, always, ground, source, eighth, public, center, mobile, advice',
        'corner, orange, august, height, status, expert, reason, silent, escape, remove',
        'create, parent, beauty, honest, thirty, finish, record, master, action, manage',
        'decide, people, before, income, travel, forest, remote, engine, reader, cannot',
        'define, person, better, inside, wealth, friend, repeat, yellow, liquid, secret',
        'depend, planet, border, leader, winter, global, sample, proper, button, little',
        'design, plenty, bridge, letter, worker, length, search, dinner, unique, trying'
      ]
    }
  ]
};
