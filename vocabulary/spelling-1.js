export default {
  label: 'Correct Spelling - 1',
  id: 'spelling-1',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Words List',
      data: {
        title: 'Words List',
        text: [
          'It is important that we should write without spelling mistakes. Here are a list of 100 words.',

          {
            type: 'sitewords',
            text: `apple, ball, best, boat, bomb, book, box, break, bus, butter, buyer, call, can, carry, cat, catch, cattle, chair, cheap, city, class, coin, cold, copy, cost, cover, cream, crowd, cycle, doctor, drop, dust, each, egg, enter, final, first, forty, ghost, grapes, great, heavy, home, how, ice, know, later, listen, lunch, maker, many, meals, memory, metal, near, number, once, orange, paint, party, people, play, potatoes, queen, rain, read, right, seed, skin, smile, snow, soil, some, song, south, sugar, super, table, team, that, they, time, tomatoes, total, train, tree, very, walk, water, what, wheat, when, which, why, wild, wing, world, write, your, zebra`,
            width: 100
          }
        ]
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
        `cat, kat 
        apple, aple
        box, bok
        can, caan
        ball, bal
        egg, eg
        grapes,graps
        home,hom
        ice,icc
        zebra,zibra`,

        `class, clas
        cold, kold, colt
        memory, memary
        butter, buter
        sugar, suger
        water, watar
        once, onse
        cattle, catle
        wheat, wheet
        meals, meels`,

        `doctor, doktor
        bomb, bom
        ghost, gost
        potatoes, potatos
        listen, lisen
        tomatoes, tomatos
        catch, katch
        what, wat
        when, wen
        how, hou`,

        `why, whi
        train, trein
        bus, bas
        orange, arange
        boat, bot
        cycle, cicle
        call, cal
        first, farst,
        many, mani
        write, rite`,

        `your, yor, yoer
        very, wery
        which, wich
        read, raed
        world, warld
        great, grate
        some, som
        city, citi
        right, riht
        best, besd`,

        `know, kow
        each, eech
        they, thay
        number, namber, nambar
        people, peple, peaple
        book, bok
        drop, drap
        copy, capy, capi
        dust, dast, tust
        play, pley`,

        `cost, cast
        seed, sead, ceed
        rain, rein, rein
        near, niar, nier
        skin, sken, scin
        team, teem, taem
        time, tim taime
        song, sogn
        snow, sno, snou
        tree, tre, tere`,

        `wild, wlid
        soil, siol, soel
        that, thet, tat
        walk, wak, wakl
        wing, wyng, ving
        super, supar, suber
        paint, paent, panit
        cream, crem, criam
        buyer, bier, biyer
        forty, fourty, farty`,

        `party, parti, parthy
        smile, smil, smele
        south, sauth, soath
        crowd, crawd, croud
        carry, cari, cary
        enter, entar, ender
        break, braek, briak
        queen, quen, quean
        cover, cower, covar
        maker, makar, mager`,

        `total, totel, todal
        heavy, hevy, heavi
        lunch, lanch, lanche
        metal, metel, medel
        final, finel, feinal
        later, latar, letar
        chair, char, cheir
        table, tabel, teble
        coin, coen, cain
        cheap, cheep, ceeph`
      ]
    }
  ]
};
