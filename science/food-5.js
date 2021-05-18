export default {
  label: 'Food - 5',
  id: 'food-5',
  pdf: 'food-5.pdf',
  list: [
    {
      id: '100',
      type: 'passage',
      label: 'Spoilage of Food',
      data: {
        title: 'Spoilage of Food',
        text: [
          `Food items like fruits, vegetables, milk and meat will be fresh for very short time. These are called perishable foods and they get spoiled easily. Some food items like rice have long life time but they also decompose. The change in the normal state of the food is called spoilage of food. Spoiled food becomes unsuitable to eat. We can notice such changes from the taste and smell of the spoiled food. Eating spoiled food results in diseases.`,
          `Once the food items are harvested they begin to decompose. Food can be spoiled by factors like air and oxygen, moisture, enzymes, microorganisms, light and temperature.`,
          `1. Air and Oxygen: When oxygen reacts with food contents, it produces changes in the colour and flavour of the food.`,
          `2. Moisture keeps the food fresh. When the moisture is gone, vegetables and fruits shrink. Due to evaporation, moisture loss occurs in foods like meat, fish and cheese.`,
          `3. Enzymes break down the tissues and components of the food in different ways like oxidation, browning and ripening. So the food items decay`,
          `4. Microorganisms such as fungi, yeast and bacteria can grow well in low temperatures. They multiply in food and spoil them.`,
          `5. Light produces colour changes and also vitamin loss.`,
          `6. Temperature: Sometimes rise in temperature causes food spoilage.`,
          `Spoiled foods are not suitable to eat. They may not be fresh and tasty.`,
          `Sometimes it will be harmful to consume them. Microorganisms present in spoiled foods may cause foodborne diseases like stomach pain, fever, dysentery, vomiting and indigestion.`,
          `While purchasing packed food items, we should check the following details.`,
          `1. Manufactured date`,
          `2. Expiry date`,
          `3. Ingredients`,
          `4. Energy content of the food material.`,
          `# Preservation of Food`,
          `Chemical preservatives are added to stop the growth of micro-organisms in certain food materials. E.g. Sodium benzoate is added with fruits, Sulphur dioxide is added with dry fruits, Vinegar is added with pickles.`,
          `Irradiation is a modern method by which, food is exposed to gamma rays or ultra violet rays to kill the bacteria and the mould. It does not affect the taste of the food or nutritive value of the foods. E.g. Onion, Potatoes.`,
          `# Purpose of Food Preservation`,
          `1. To retain the colour, taste and nutritive value of the food.`,
          `2. To make food available throughout the year.`,
          `3. To prevent the growth of microorganisms like bacteria and fungi in the food items.`,
          `4. To reduce the wastage of food materials.`,
          `5. Preserving food not only protects our health but also makes food available to the people who need it.`
        ]
      }
    },
    {
      label: 'Perishable Food',
      id: '200',
      type: 'group',
      data: {
        title: 'Classify the below as perishable or non-perishable food.',
        types: [
          {
            name: 'Perishable',
            text: 'Fruits, Vegetables, Corn, Meat, Milk'
          },
          {
            name: 'Non-perishable',
            text: 'Salt, Sugar, Wheat, Pulses, Rice, Nuts, Oil'
          }
        ]
      }
    },
    {
      id: '300',
      label: 'Fill Up',
      type: 'fillupOptions',
      data: {
        title: 'Fill in the blanks with the given options.',
        text: `Spoiled foods are *unsuitable (suitable)* to eat.
The change in the normal state of the food is called *spoilage(storage)* of food.
Food products start to decay after *harvesting (cooking)*.
Eating spoiled foods bring *food (air)* borne diseases.
Sometimes we can check spoiled food by *smelling (hearing)*.`
      }
    },
    {
      id: '400',
      label: 'Choose the best answer',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'What are the details that can be found in packed food.',
            options:
              '* Manufactured date, * Expiry date, * Ingredients, * Price'
          },
          {
            qText: 'Which chemical is used to preserve fruits?',
            options:
              'Sodium Benzoate, Sodium Chloride, Copper Benzoate, Sulphur Dioxide'
          },
          {
            qText: 'Which chemical is used to preserve pickles?',
            options:
              'Vinegar, Sodium Benzoate, Sodium Chloride, Copper Benzoate'
          },
          {
            qText: 'Which of the following is not a micro-organism?',
            options: 'enzymes, fungi, yeast, bacteria'
          },
          {
            qText: 'What keeps the food fresh?',
            options: 'moisure, enzyme, light, oxygen'
          },
          {
            qText: 'What rays are used in irradiation process?',
            options: '* gamma rays, x-rays, infra-red rays, * ultra-violet rays'
          }
        ]
      }
    },
    {
      id: '500',
      type: 'passage',
      label: 'Disease',
      data: {
        title: 'Disease',
        text: [
          `A disease is an abnormal condition that affects a living organism. This abnormal condition affects the structure and function of the organism. Diseases may be caused by external factors as well as internal dysfunction. Each disease has symptoms. We come to know about the diseases from their symptoms.`,
          `# Causes of Diseases`,
          `Diseases are caused by microorganisms like bacteria, virus, protozoa and fungi. They are transmitted by insects, and also through contaminated air and water. Some diseases are caused when the function of the organ is affected. In general, causes of diseases can be classified as below.`,
          `1. Metabolic factor. E.g. Diabetes`,
          `2. Genetic factor. E.g. Colour blindness`,
          `3. Microorganisms. E.g. Bacterial diseases`,
          `4. Nutritional factor. E.g. Marasmus`,
          `5. Environmental factor. E.g. Cholera`,
          `# Types of Diseases`,
          `There are four main types of diseases. They are`,
          `1. Infectious diseases are caused by microorganisms which invade our body and multiply inside them. These diseases are spread from one person to another. E.g. Common cold.`,
          `2. Hereditary diseases occur due to abnormalities in the gene. These diseases are passed from parents to children. E.g. Heart disease.`,
          `3. Physiological diseases are caused due to malfunction of the body organs. E.g. Asthma.`,
          `4. Deficiency diseases are caused due to the deficiency in one or more of the nutrients. Eg. Anaemia`,
          `# Protein deficiency diseases`,
          `Marasmus and Kwashiorkor are the protein deficiency diseases. In marasmus, the child loses weight and it will appear as though bones are covered by skin. In Kwashiorkor, the child develops an enlarged belly with swollen face and feet. By eating protein rich foods like egg, milk, fish and green leafy vegetables we can avoid protein deficiency diseases. Kwashiorkor disease is found more among people in developing countries. It is because their diet is high in carbohydrates which is cheaper and low in proteins. As they live below poverty line, they couldn’t afford protein rich food which is costly.`,
          `# Vitamin deficiency diseases`,
          `There are different types of vitamins, and they are named with letters.`,
          `1. Vitamin-A is present in egg, papaya, milk and carrot. Lack of vitamin-A may cause Night-blindness.`,
          `2. Vitamin-B is present cereals and green vegetables. Lack of vitamin-B may cause Beri-beri.`,
          `3. Vitamin-C is abundent in lemon, orange and tomato. Lack of vitamin-C may cause Scurvy.`,
          `4. Sun is the natural source of vitamin-D. It is also present in fish, egg and milk. Lack of vitamin-D may cause Rickets.`,
          `# Mineral deficiency diseases`,
          `Iron and Iodine are common minerals that we need for good health. Cashewnuts, dates, spinach and lentils are rich in iron. Lack of iron may cause Anaemia. Iodine is present in vegetables and iodized salt.`
        ]
      }
    },
    {
      id: '600',
      type: 'match',
      label: 'Nutrients and Sources',
      data: {
        title: 'Match the Nutrients with its Sources.',
        text: `Vitamin-C, Lemon
Vitamin-B, Cereals
Vitamin-A, Milk
Vitamin-D, Sunlight
Iron, Dates
Protein, Fish`
      }
    },
    {
      id: '700',
      type: 'match',
      label: 'Nutrients and Diseases',
      data: {
        title: 'Match the Nutrients with its deficiency Diseases.',
        text: `Vitamin-C, Scurvy
Vitamin-B, Beri-beri
Vitamin-A, Night-blindness
Vitamin-D, Rickets
Iron, Anaemia
Protein, Marasmus`
      }
    },
    {
      id: '800',
      type: 'match',
      label: 'Disease Factors',
      data: {
        title: 'Match the different disease factors with the disease.',
        text: `Metabolic, Diabetes
Genetic, Colour blindness
Microorganisms, Typhoid
Nutritional, Marasmus
Environmental, Cholera`
      }
    },
    {
      id: '900',
      label: 'Choose the best answer',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'The biotic factor which spoils the food item is ________.',
            options: 'bacteria, drying, temperature, humidity'
          },
          {
            qText: 'Grains are preserved by______.',
            options: 'drying, freezing, adding sugar, adding salt'
          },
          {
            qText: 'Anaemia is the disease which occurs due to lack of_______.',
            options: 'Iron, Vitamin-A, Vitamin-D, Vitamin-B'
          },
          {
            qText: 'Storage of Excess fat in the body is known as',
            options: 'Obesity, Headache, Fever, Stomach pain'
          },
          {
            qText: 'Carbohydrates are rich in',
            options: 'Rice, Fruits, Ghee, Oil'
          }
        ]
      }
    },
    {
      id: '1000',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as True and False',
        types: [
          {
            name: 'True',
            text: `Vinegar is added as Preservative for Pickles.
Growing children need more proteins in their food.`
          },
          {
            name: 'False',
            text: `In case of Gas leakage, we can continue to use electric appliances.
Irradiation affects the taste of the food materials.
Deficiency due to iodine is called as beriberi.`
          }
        ]
      }
    },
    {
      id: '1100',
      label: 'Fill in the Blanks',
      type: 'matchByDragDrop',
      slug: 'drag-and-drop-blanks-template',
      editable: true,
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper places.',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        },
        text: `Night Blindness is caused by the lack of *Vitamin-A*.
Marasmus is a *protein* deficiency disease.
Bad smell from the food item is due to *Spoilage*.
Humidity in air is one of the *Important* factor, which spoils food.
Using low quality gas tubes in the gas stove may lead to *gas* leakage.`
      }
    }
  ]
};
