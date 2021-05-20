export default {
  label: 'Missing Workout',
  id: 'missing-workout',
  list: [
    {
      type: 'missingWorkout',
      id: 'addition',
      label: 'Addition',
      data: [
        { pattern: 'aa + aa', missing: [4, 5] },
        { pattern: 'xx + xx', missing: [4, 5] },
        { pattern: 'bb + bb', missing: [4, 5] },
        { pattern: 'xx + xx', missing: [0, 1, 2, 3] },
        { pattern: 'xx + xx + xx', missing: [4, 5] },
        { pattern: 'xx + xx + xx', missing: [4, 5] },
        { pattern: 'xxx + xxx', missing: [0, 1, 2, 3] },
        { pattern: 'xxx + xxx + xxx', missing: [6, 7, 8] }
      ]
    },
    {
      type: 'missingWorkout',
      id: 'subtraction',
      label: 'Subtraction',
      data: [
        { pattern: 'bb - aa', missing: [4] },
        { pattern: 'bb - aa', missing: [0, 1, 2, 3] },
        { pattern: 'xbb - aa', missing: [1, 2, 3] },
        { pattern: 'xaa - bb', missing: [1, 2, 3] },
        { pattern: 'xxx - xxx', missing: [0, 1, 2, 3] }
      ]
    },
    {
      type: 'missingWorkout',
      id: 'multiplication',
      label: 'Multiplication',
      data: [
        { pattern: 'xx * x', missing: [3, 4] },
        { pattern: 'xxx * x', missing: [4, 5] },
        { pattern: 'xxx * x', missing: [3] }
      ]
    }
  ]
};
