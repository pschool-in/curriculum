export default {
  label: 'Child Rights',
  id: 'child-rights',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Child Rights - Notes',
      data: {
        title: 'Child Rights',
        text: `All over the world, there are different policies and rights. Children have certain rights to ensure that every child is treated the same. These are practiced to create a healthy environment for the children to live in. 
          There are many countries which have agreed to make some basic rights for children. Our country is one of them. The four major child rights are
          1. Right to survival
          2. Right to development
          3. Right to protection
          4. Right to participation
          # Right to survival
          It is to ensure every child has access to minimum standards of food. This helps in healthy growth in all children. There are different rights for children below the age of 6 and between the age of 6-14 years. This is because both the age groups have different needs for their growth and development.
          # WASH Program
          WASH stands for Water, Sanitation and Hygiene. It means there should be access to clean water for drinking and other needs. There are many diseases that spread through water. To avoid these, having access to safe water is very important. Spreading awareness to washing hands with soap is also a part of the WASH programme.
          There are many vaccines and drops which are given to children to protect them from certain diseases.
          # Right to Development
          Every child has the right to go to school and develop life skills. The government is responsible to providing free education to all. But parents who can afford the school fees send their children to private schools.
          # Child Labour
          Children are involved in different works at different places. This is called Child Labour. It is illegal to force children below the age of 14 to work.
          # Right to Protection
          Children have the right to be protected in all circumstances. Indian government has set laws for the same. All elders should help to create a safe environment for children to live. 
          # Right to Participate
          Children have the right to participate in matters related to them. This includes asking questions, giving suggestions and making decisions in things that affect them.           
          It is great for all of us to participate. Each one of us has the right to express and share our opinion.`
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        editable: true,
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Which of the following is against Indian law?',
            options: `Children below 14 years working in industries.
              Children studying in school.
              Children participating in school activities.
              Children getting nutritious food.`
          },
          {
            qText: 'Polio drops are given to ______.',
            options: 'children, men, women, senior citizens'
          },
          {
            qText: 'A set of rules of a country is known as the ______.',
            options: 'constitution, story book, rule book, textbook'
          },
          {
            qText: 'Which of the following is not a right of children?',
            options: `Getting driving license
              Getting education
              Getting adequate food
              Living in a healthy manner`
          },
          {
            qText:
              'Children have the right to express their opinion. It is known as Right to ________.',
            options: 'Participation, Survival, Development, Protection'
          },
          {
            qText:
              'Children have the right to nutritious food. It is known as Right to ________.',
            options: 'Survival, Participation, Development, Protection'
          }
        ]
      }
    },
    {
      label: 'True or False',
      id: 'truefalse',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as True or False.',
        types: [
          {
            name: 'True',
            text: `The child has the basic right to get polio drops.
            Hitting children is wrong
            Children should be aware of bad touch.`
          },
          {
            name: 'False',
            text: `There are same rights for all age groups of children.
            All children of age 6 - 14 years should be employed.`
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Match ',
      id: 'match',
      data: {
        title: 'Match the related terms',
        text: `scared, feeling fear
        inappropriately, not correct
        education, right
        water, hygiene
        food, nutrition`
      }
    },
    {
      type: 'match',
      label: 'Match - 2',
      id: 'match-2',
      data: {
        title: 'Match the related terms',
        text: `Vaccines, Protects from diseases
          illegal, Child labour
          WASH, Sanitation
          Citizen, member of a country
          Development, Education`
      }
    },
    {
      label: 'Fill up by drag and drop.',
      id: 'fillup',
      type: 'matchByDragDrop',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper places.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `*Vaccine* is a substance that helps to protect against certain diseases.
        *Survival* is the state of continuing to live.
        *Renovate* means to repair or improve something.
        *Development* is the process in which someone or something grows and becomes more advanced.
        *Protect* means to keep safe from harm or injury.`
      }
    },
    {
      type: 'rightOne',
      id: 'spell',
      label: 'Right Spelling',
      data: {
        title: 'Pick the word with the right spelling',
        noCaps: true,
        text: `vaccine, vacine, vaccene
          adequate, adiquate, adequete
          survival, sarvival, sarvivel
          protection, protaction, protecsion
          constitution, constitusion, canstitution
          participation, partisipation, participetion
          sanitation, sanetation, sanitasion`
      }
    }
  ]
};
