export default {
  label: 'Leaders',
  id: 'leaders',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Notes: Leaders',
      data: {
        title: 'Leaders',
        text: [
          `# National Leaders`,
          {
            type: 'hilight',
            text: `Mahatma Gandhi − Led the Indian Freedom Movement through non−violence. He is also called the father of our Nation.
Jawaharlal Nehru  − The first and the longest−serving Prime Minister of India. His birthday is celebrated as Children's Day.
Vallabhbhai Patel − Widely known as the "Iron Man of India". First Home Minister of India. His statue (Statue of Unity) is the highest in the world.
B. R. Ambedkar − First Law Minister of India and the architect of the Indian Constitution.
A. P. J. Abdul Kalam − Aerospace and defence scientist. Also served as the President of India`
          },
          `# International Leaders`,
          {
            type: 'hilight',
            text: `Nelson Mandela − fought against racism (apartheid) in South Africa and spent 27 years in jail. He later became the President of South Africa. The Indian government has given Bharat Ratna award  in 1990.
Abraham Lincoln − Former President of America. Abolished slavery in America.
Lee Kuan Yew − was the Prime Minister of Singapore, who developed his country from below normal to a great country. He is also known as the father of Singapore. `
          },
          `# Literature`,
          {
            type: 'hilight',
            text: `William Shakespeare − The most popular English Play Writer. Merchant of Venice, Hamlet, King Lear are some of his important plays. 
Rabindranath Tagore − is the famous Bengali poet. He won the Nobel Prize in Literature. He is the author of our National Anthem.`
          },
          `# Sports`,
          {
            type: 'hilight',
            text: ` Sachin Tendulkar − Former Indian cricketer holds the record for the highest career runs. Called by fans as 'God of Cricket'.
Viswanathan Anand − Former World Chess Champion, and the only Indian to get the title.
Dhyan Chand − Famous hockey player who helped India get three gold medals in Olympics. (1928, 1932 and 1936)
Abhinav Bindra − became the first Indian to win an individual Olympic gold medal. He won it for 10 m Air Rifle Shooting.
Usain Bolt − is known as the fastest man on Earth. He has won eight Olympic gold medal. He holds the world record for 100m and 200m running. He ran 100m race in 9.58 seconds.`
          },
          `# Scientists`,
          {
            type: 'hilight',
            text: `Isaac Newton − Famous Scientist and Mathematician responsible for many discoveries. He discovered and gave a detailed explanation for Gravity. 
Albert Einstein − Famous Theoretical Scientist. Presented the Theory of Relativity. Time magazine named him as the person of the century.
Charles Darwin − Presented the Theory of Evolution in his book, 'On the Origin of Species'. His theory is, all living things came from single-cell organism. 
Robert Hooke − He was the first person to see biological cells. He designed telescopes and microscopes.
Stephen Hawking − Studied the universe and invented theories like Big Bang, black holes. He is the author of the famous book 'A Brief History of Time'. His achievements are great in spite of being affected by motor neurone disease.`
          },
          `# Other Achievements`,
          {
            type: 'hilight',
            text: `Neil Armstrong − The first person to walk on the Moon. The mission was called Apollo 11. And he landed on the Moon on July 20, 1969.
Tenzing Norgay − First person to climb Mt. Everest, the highest peak in the world.
Mother Teresa − Founder of the Missionaries of Charity,  She was awarded the Nobel Peace Prize for her humanitarian work.
J. R. D. Tata − Industrialist, philanthropist, and aviation pioneer, Tata founded India's first airline Air India.`
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Match',
      id: 'match',
      commonData: {
        title: 'Match',
        fontSize: '1rem'
      },
      data: [
        `Dhyan Chand, Hockey
Viswanathan Anand , Chess
Sachin Tendulkar, Cricket
Abhinav Bindra, Shooting
Usain Bolt, Running`,

        `Robert Hooke, biological cells
Stephen Hawking , black holes
Charles Darwin, evolution 
Isaac Newton, gravity
Albert Einstein , relativity`,

        `Neil Armstrong, moon
Tenzing, Mt. Everest
J. R. D. Tata, industrialist
Rabindranath Tagore, National Anthem
Shakespeare, Play Writer`,

        `Gandhi, non-violence
Ambedkar, constitution
Lee Kuan Yew, Singapore
Abraham Lincoln, slavery 
Nelson Mandela, apartheid`
      ]
    },
    {
      id: 'mcq-2',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      commonData: {
        title: 'Multiple Choice Questions'
      },
      data: [
        {
          questions: [
            {
              qText:
                'Who holds the record for the highest career runs in cricket?',
              options: 'Sachin Tendulkar, M. S. Dhoni, Virat Kohli'
            },
            {
              qText: 'Who won the first individual Olympic gold for India? ',
              options: 'Abhinav Bindra, Dhyan Chand, Usain Bolt'
            },
            {
              qText: `Who is called the 'Iron Man of India' ?`,
              options: 'Vallabhbhai Patel, Jawaharlal Nehru, B. R. Ambedkar'
            },
            {
              qText: 'Who abolished slavery in the United States of America?',
              options: 'Abraham Lincoln, Lee Kuan Yew, Nelson Mandela'
            },
            {
              qText: 'Who wrote our National Anthem?',
              options: 'Rabindranath Tagore, B. R. Ambedkar, Mahatma Gandhi '
            }
          ]
        },
        {
          questions: [
            {
              qText: 'Who fought against apartheid?',
              options: 'Nelson Mandela, Abraham Lincoln, Lee Kuan Yew'
            },
            {
              qText: 'Who is known as the fastest man on Earth?',
              options: 'Usain Bolt, Dhyan Chand, M. S. Dhoni'
            },
            {
              qText: `Who wrote the book,'A brief history of time'? `,
              options: 'Stephen Hawking, Charles Darwin, William Shakespeare'
            },
            {
              qText: 'Who is the first person to walk on the Moon?',
              options: 'Neil Armstrong, Micheal Jackson, Stephen Hawking'
            },
            {
              qText: 'Who is called the father of our Nation?',
              options: 'Mahatma Gandhi, Jawaharlal Nehru, Vallabhbhai Patel'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'Who was the first Prime Minister of India?',
              options:
                'Jawaharlal Nehru , A. P. J. Abdul Kalam, Vallabhbhai Patel'
            },
            {
              qText: 'Who presented the Theory of Evolution?',
              options: 'Charles Darwin, Albert Einstein,  Isaac Newton'
            },
            {
              qText: '_________ is a famous Industrialist and philanthropist.',
              options: 'J. R. D. Tata, Mother Teresa, Robert Hooke'
            },
            {
              qText: 'Who was the first person to climb Mt. Everest?',
              options: 'Tenzing, Neil Armstrong, Dhyan Chand'
            },
            {
              qText: 'Who was the first law minister of India?',
              options: 'B. R. Ambedkar, Mahatma Gandhi, Jawaharlal Nehru'
            }
          ]
        }
      ]
    }
  ]
};
