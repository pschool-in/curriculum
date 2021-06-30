export default {
  label: 'Social',
  id: 'social',
  img: 'social',
  list: [
    {
      id: 'direction',
      label: 'திசைகள்',
      type: 'dragAndDrop',
      data: {
        img: 'direction',
        width: 300,
        height: 300,
        wordWidth: 70,
        isPractice: false,
        title: 'Direction',
        words: [
          {
            word: 'পূর্ব',
            x: 210,
            y: 140
          },
          {
            word: 'পশ্চিম',
            x: 20,
            y: 140
          },
          {
            word: 'উত্তর',
            x: 120,
            y: 20
          },
          {
            word: 'দক্ষিণ',
            x: 120,
            y: 260
          }
        ]
      }
    }
  ]
};
