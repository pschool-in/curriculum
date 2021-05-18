export default {
  id: 'arithmetic-3',
  label: 'Arithmetic - 3',
  list: [
    {
      id: 'evaluate',
      type: 'addition',
      label: 'Evaluate',
      commonData: {
        count: 10,
        isReverse: false,
        text: '',
        title: 'Evaluate'
      },
      data: [
        {
          type: 'misc~x+x+x'
        },
        {
          type: 'misc~x00+x0+x'
        },
        {
          type: 'misc~xxx-x-x'
        },
        {
          type: 'misc~xxx-x+x'
        },
        {
          type: 'misc~x0-x+x'
        }
      ]
    },
    {
      id: 'fillup',
      type: 'addition',
      label: 'Fill Up',
      commonData: {
        count: 10,
        isReverse: true,
        text: '',
        title: 'Fill Up'
      },
      data: [
        {
          type: 'add~x~x'
        },
        {
          type: 'sub~x~x'
        },
        {
          type: 'add~xx~x'
        },
        {
          type: 'sub~xx~x'
        },
        {
          type: 'mul~x~x'
        },
        {
          type: 'div~x~x'
        },
        {
          type: 'add~xx~x0'
        },
        {
          type: 'sub~xx~x0'
        },
        {
          type: 'mul~x0~x'
        },
        {
          type: 'mul~x0~x'
        },
        {
          type: 'mul~x00~x0'
        },
        {
          type: 'div~x00~x0'
        }
      ]
    }
  ]
};
