export default {
  label: '5 Letter Words',
  id: '5-letter-words',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Words List',
      data: {
        title: 'Words List',
        text: [
          `Find below some basic five letter words. Get familiar with them.`,
          {
            type: 'sitewords',
            text: `about,actor,again,ahead,alert,apple,argue,audio,award,beach,begin,below,bench,black,brain,break,bring,brown,build,buyer,carry,catch,chain,chair,cheap,clear,close,cover,cream,crowd,cycle,doing,dream,drink,early,earth,empty,enjoy,enter,equal,error,every,faith,false,fiber,fifty,fight,first,floor,force,forty,fresh,great,group,happy,heavy,horse,human,large,laugh,level,limit,lower,lunch,maker,march,match,metal,mixed,model,month,moral,mount,mouse,never,noise,ocean,order,paint,party,place,plant,price,print,proof,queen,right,rough,scene,sense,seven,sharp,shock,since,sixth,sixty,skill,sleep,slide,small,smart,smile,smoke,solve,south,speak,sport,stone,storm,style,super,teach,think,three,tiger,title,total,train,treat,truck,twice,upper,value,voice,watch,water,whole,write,wrong,young`,
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
        'about, write, apple, actor, again, ahead, alert, paint, right, small',
        'argue, brown, cream, empty, forty, human, party, rough, solve, smile',
        'beach, buyer, crowd, enter, fresh, level, mount, place, scene, south',
        'bench, carry, cycle, error, great, limit, plant, sense, speak, dream',
        'black, chain, doing, faith, group, lower, never, price, sharp, sport',
        'brain, clear, fiber, happy, maker, noise, print, shock, stone, month',
        'break, close, drink, fifty, heavy, match, ocean, proof, sixth, three',
        'bring, cover, earth, first, horse, mixed, order, queen, skill, title',
        'storm, style, super, teach, think, total, train, truck, voice, tiger',
        'water, build, false, march, sixty, treat, audio, early, large, seven',
        'whole, catch, fight, model, sleep, twice, award, enjoy, laugh, since',
        'wrong, chair, floor, moral, smart, upper, begin, equal, lunch, slide',
        'young, cheap, force, mouse, smoke, value, below, every, metal, watch'
      ]
    },
    {
      id: 'reading-2',
      type: 'passage',
      label: 'Words List - 2',
      data: {
        title: 'Words List',
        text: [
          `Find below more five letter words. Get familiar with them.`,
          {
            type: 'sitewords',
            text: `above,admit,adult,after,agree,alarm,alone,among,anger,angry,apply,avoid,basic,birth,blame,blind,blood,bread,check,child,class,clean,clock,count,court,crime,cross,daily,dance,death,delay,doubt,drama,dress,drive,eight,event,fifth,final,giant,glass,globe,grade,grass,green,guest,guide,heart,hotel,house,image,judge,label,later,learn,leave,logic,lucky,magic,money,mouth,movie,music,night,north,nurse,other,paper,peace,phone,point,power,press,prize,proud,prove,quick,river,round,scale,score,shape,solid,sorry,sound,space,speed,stand,start,story,sugar,sweet,table,taste,teeth,their,there,thing,third,those,today,topic,touch,trade,trust,under,usage,video,visit,waste,wheel,where,which,while,whose,woman,world,worry,yield,youth`,
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
        'above, class, glass, music, sorry, visit, birth, fifth, money, solid',
        'adult, count, green, north, space, waste, blind, final, mouth, sound',
        'alarm, crime, guest, nurse, speed, wheel, bread, giant, night, start',
        'alone, daily, hotel, other, stand, while, check, globe, paper, table',
        'among, delay, label, peace, story, whose, child, grade, point, there',
        'angry, doubt, later, phone, sugar, world, clean, grass, press, those',
        'apply, drama, learn, power, sweet, youth, clock, guide, prize, topic',
        'avoid, dress, leave, proud, taste, admit, court, heart, prove, trade',
        'basic, drive, logic, quick, teeth, after, cross, house, river, trust',
        'blame, eight, lucky, round, today, agree, dance, image, scale, under',
        'blood, event, magic, shape, touch, anger, death, judge, score, video',
        'where, woman, worry, yield, movie, their, which, third, usage, thing'
      ]
    }
  ]
};
