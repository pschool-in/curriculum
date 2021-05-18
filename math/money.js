export default {
  label: 'Money',
  id: 'money',
  list: [
    {
      label: 'Simple Word Problems',
      type: 'mcq',
      id: 'word-problem',
      commonData: {
        title: 'Pick the correct answer for the word problem.'
      },
      data: [
        {
          questions: [
            {
              qText: `I bought a pencil for ₹ 10 and an eraser for ₹ 5. How much do I have to pay?`,
              options: `₹ 15, ₹ 20, ₹ 25, ₹ 10`
            },
            {
              qText: `I bought an apple for ₹ 30 and an orange for ₹ 20. How much do I have to pay?`,
              options: `₹ 50, ₹ 60, ₹ 45, ₹ 70`
            },
            {
              qText: `I bought 3 chocolates. Each costs ₹ 20. How much do I have to pay?`,
              options: `₹ 60, ₹ 50, ₹ 45, ₹ 70`
            },
            {
              qText: `I bought a notebook for ₹ 40 and an ice-cream for ₹ 50. How much do I have to pay?`,
              options: `₹ 90, ₹ 60, ₹ 50,  ₹ 70`
            },
            {
              qText: `I bought items for ₹ 70. I gave a note of ₹ 100. How much should the shopkeeper return?`,
              options: `₹ 30, ₹ 60, ₹ 50,  ₹ 70`
            }
          ]
        },
        {
          questions: [
            {
              qText: `I bought items for ₹ 92. I gave a note of ₹ 100. How much should the shopkeeper return?`,
              options: `₹ 8, ₹ 20, ₹ 12, ₹ 10`
            },
            {
              qText: `I bought items for ₹ 40. I gave a note of ₹ 100. How much should the shopkeeper return?`,
              options: `₹ 60, ₹ 50, ₹ 45, ₹ 70`
            },
            {
              qText: `I bought 4 packets of biscuits. Each costs ₹ 20. How much do I have to pay?`,
              options: `₹ 80, ₹ 50, ₹ 45, ₹ 70`
            },
            {
              qText: `I bought 3 chocolates. Each costs ₹ 20. How much do I have to pay?`,
              options: `₹ 60, ₹ 90, ₹ 50,  ₹ 70`
            },
            {
              qText: `I bought a packet of sketch for ₹ 90 and a pen for ₹ 50. How much do I have to pay?`,
              options: `₹ 140, ₹ 160, ₹ 130,  ₹ 150`
            }
          ]
        },
        {
          questions: [
            {
              qText: `The cost of one apple is ₹ 20. What is the cost of 5 apples?`,
              options: `₹ 100, ₹ 120, ₹ 80, ₹ 110`
            },
            {
              qText: `The cost of one pencil is ₹ 5. What is the cost of 8 pencils?`,
              options: `₹ 40, ₹ 60, ₹ 45, ₹ 70`
            },
            {
              qText: `The cost of one notebook is ₹ 40. What is the cost of 5 notebooks?`,
              options: `₹ 200, ₹ 150, ₹ 145, ₹ 170`
            },
            {
              qText: `The cost of one ice-cream is ₹ 30. What is the cost of 5 ice-creams?`,
              options: `₹ 150, ₹ 130, ₹ 160,  ₹ 170`
            },
            {
              qText: `The cost of one ride is ₹ 20. What is the cost of 4 rides?`,
              options: `₹ 80, ₹ 60, ₹ 50,  ₹ 70`
            }
          ]
        },
        {
          questions: [
            {
              qText: `The cost of 5 ice-ceams is ₹ 200. How much does 1 ice-cream cost?`,
              options: `₹ 40, ₹ 20, ₹ 25, ₹ 30`
            },
            {
              qText: `The cost of 3 notebooks is ₹ 150. How much does 1 notebook cost?`,
              options: `₹ 50, ₹ 60, ₹ 45, ₹ 70`
            },
            {
              qText: `The cost of 3 rides is ₹ 90. How much does 1 ride cost?`,
              options: `₹ 30, ₹ 60, ₹ 50, ₹ 45`
            },
            {
              qText: `The cost of 10 pencils is ₹ 150. How much does 1 pencil cost?`,
              options: `₹ 15, ₹ 10, ₹ 20,  ₹ 18`
            },
            {
              qText: `The cost of 6 apples is ₹ 120. How much does 1 apple cost?`,
              options: `₹ 20, ₹ 30, ₹ 25,  ₹ 15`
            }
          ]
        }
      ]
    },
    {
      type: 'denomination',
      id: 'denomination',
      label: 'Write Denomination',
      data: [
        {
          format: 'xx0',
          denos: [100, 10]
        },
        {
          format: 'xx5',
          denos: [100, 10, 5]
        },
        {
          format: 'xxx',
          denos: [100, 50, 10, 5, 1]
        },
        {
          format: 'xxx',
          denos: [500, 100, 50, 20, 10, 5, 1]
        },
        {
          format: 'xxxx',
          denos: [500, 100, 50, 20, 10, 5, 1]
        }
      ]
    }
  ]
};
