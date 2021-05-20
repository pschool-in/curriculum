export default {
  id: 'arithmetic',
  label: 'Arithmetic',
  list: [
    {
      id: 'after-number',
      type: 'addition',
      label: 'After Number ',
      commonData: {
        title: 'Write the after number.',
        count: 10,
        isReverse: false
      },
      data: [
        {
          type: 'after~x'
        },
        {
          type: 'after~xx'
        },
        {
          type: 'after~x0'
        },
        {
          type: 'after~x9'
        }
      ]
    },
    {
      id: 'before-number',
      type: 'addition',
      label: 'Before Number ',
      commonData: {
        title: 'Write the before number.',
        count: 10,
        isReverse: false
      },
      data: [
        {
          type: 'before~x'
        },
        {
          type: 'before~xx'
        },
        {
          type: 'before~x9'
        },
        {
          type: 'before~x0'
        }
      ]
    },
    {
      id: 'addition',
      type: 'addition',
      label: 'Add the Numbers',
      commonData: {
        count: 10,
        isReverse: false,
        text: '',
        title: 'Add the Numbers'
      },
      data: [
        {
          type: 'add~x~x'
        },
        {
          type: 'add~x0~x'
        },
        {
          type: 'add~xx~10'
        },
        {
          type: 'add~xx~3'
        },
        {
          type: 'add~xx~5'
        },
        {
          type: 'add~xx~9'
        },
        {
          type: 'add~xx~x'
        },
        {
          type: 'add~xx~20'
        },
        {
          type: 'add~xx~30'
        },
        {
          type: 'add~xx~x0'
        }
      ]
    },
    {
      id: 'subtract',
      type: 'addition',
      label: 'Subtract the Numbers',
      commonData: {
        count: 10,
        isReverse: false,
        text: '',
        title: 'Subtract the Numbers'
      },
      data: [
        {
          type: 'sub~x~x'
        },
        {
          type: 'sub~x9~x'
        },
        {
          type: 'sub~xx~2'
        },
        {
          type: 'sub~xx~3'
        },
        {
          type: 'sub~xx~10'
        },
        {
          type: 'sub~xx~4'
        },
        {
          type: 'sub~xx~5'
        },
        {
          type: 'sub~xx~9'
        },
        {
          type: 'sub~xx~x'
        },
        {
          type: 'sub~xx~20'
        },
        {
          type: 'sub~xx~30'
        },
        {
          type: 'sub~xx~x0'
        }
      ]
    }
  ]
};
