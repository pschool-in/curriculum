export default {
  label: 'Largest, Tallest, Longest etc',
  id: 'largest',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'World: Largest, Tallest, Longest',
      data: {
        title: 'World: Largest, Tallest, Longest, Smallest etc',
        text: [
          `# Largest...`,
          {
            type: 'hilight',
            text: `Continent − Asia
Ocean − Pacific
River  − Amazon
Desert − Sahara
Peninsula − Arabian 
Forest − Amazon Rain Forest
Island − Greenland
Country (area) − Russia
Country (population) − China
City (population) − Tokyo
Animal − Blue Whale
Animal (land) − Elephant
Bird − Ostrich
Sea Bird − Albatross`
          },
          `# Tallest...`,
          {
            type: 'hilight',
            text: `Animal − Giraffe
Building − Burj Khalifa
Mountain Peak − Everest
Mountain Range − Himalayas
WaterFalls − Angel Falls
Statue − Statue of Unity`
          },
          `# Longest...`,
          {
            type: 'hilight',
            text: `River − Nile
Bone − Femur
Railway − Trans-Siberian Railway
Railway Platform − Gorakhpur 
River Dam − Hirakud Dam
Wall − Great Wall of China`
          },
          `# Smallest...`,
          {
            type: 'hilight',
            text: `Bird − Humming Bird
Continent − Australia
Planet − Mercury
Country − Vatican City
Ocean − Arctic Ocean`
          },
          `# More`,
          {
            type: 'hilight',
            text: `Fastest bird − Peregrine Falcon
Fastest animal − Cheetah
Hardest metal − Tungsten
Brightest Planet − Venus`
          }
        ]
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      commonData: {
        title: 'Multiple Choice Questions'
      },
      data: [
        {
          questions: [
            {
              qText: 'What is the tallest statue in the world?',
              options: 'Statue of Unity, Statue of Liberty, Statue of Diversity'
            },
            {
              qText: 'What is the tallest waterfall in the world?',
              options: 'Angel Falls, Niagara Falls, Jog Falls'
            },
            {
              qText: 'What is the longest bone in our human body?',
              options: 'Femur, Leg Bone, Back Bone, Ribs'
            },
            {
              qText: 'What is the longest river in the world?',
              options: 'Nile, Amazon, Brahmaputra'
            },
            {
              qText: 'Where is the longest railway platform present?',
              options: 'Gorakhpur, Jaipur, New Delhi, Siberia'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'What is the highly populated country?',
              options: 'China, Russia, India, England'
            },
            {
              qText: 'What is the longest wall?',
              options:
                'Great wall of China, Great wall of America, Great wall of India'
            },
            {
              qText: 'What is the smallest planet in our Solar System?',
              options: 'Mercury, Venus, Pluto'
            },
            {
              qText: 'What is the biggest animal?',
              options: 'Blue Whale, Shark, Elephant, Giraffe'
            },
            {
              qText: 'What is the biggest bird?',
              options: 'Ostrich, Albatross, Falcon, Humming Bird'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'What is the biggest desert?',
              options: 'Sahara Desert, Thar Desert, Gobi Desert '
            },
            {
              qText: 'What is the highest mountain range in the world?',
              options: 'Himalayas, Everest, Alps'
            },
            {
              qText: 'What is the smallest ocean?',
              options: 'Arctic Ocean, Southern Ocean, Indian Ocean'
            },
            {
              qText: 'What is the hardest metal?',
              options: 'Tungsten, Copper, Iron, Gold'
            },
            {
              qText: 'What is the smallest continent?',
              options: 'Australia, Asia, South America'
            }
          ]
        }
      ]
    },
    {
      type: 'match',
      label: 'Match',
      id: 'match',
      commonData: {
        title: 'Match the following'
      },
      data: [
        `Largest Continent, Asia
        Smallest Continent, Australia 
        Largest Country, Russia 
        Smallest Country, Vatican City
        Largest Ocean , Pacific 
        Smallest Ocean , Arctic`,

        `Largest Bird, Ostrich
        Largest sea Bird, Albatross
        Smallest Bird , Humming Bird
        Fastest bird, Peregrine Falcon
        Tallest Animal, Giraffe
        Largest Animal, Blue Whale`,

        `Tallest Peak,  Everest
        Tallest Mountain Range, Himalayas
        Tallest Building, Burj Khalifa
        Largely Populated city, Tokyo
        Smallest Country, Vatican City
        Largest Island, Greenland`
      ]
    },
    {
      type: 'completeWord',
      label: 'Answer It',
      id: 'complete',
      commonData: {
        lang: 'en',
        title: 'Type the right answer.'
      },
      data: [
        `Largest Continent, Asia
Largest Animal, Blue Whale
Largest animal living in land, Elephant
Largest desert in the world, Sahara
Largest Island, Greenland
Largest Sea Bird, Albatross
Tallest Animal, Giraffe
Tallest Building, Burj Khalifa
Tallest Mountain Peak, Everest
Tallest Mountain Range, Himalayas`,

        `Largest River, Amazon
Longest River, Nile
Largest Ocean, Pacific
Largest Country by area, Russia
Largest Country by population , China
Largest Peninsula, Arabian 
Tallest Waterfall, Angel 
Smallest Ocean, Arctic 
Smallest Planet, Mercury
Smallest Bird,	Humming Bird`,

        `Fastest bird is Peregrine _____, Falcon
Fastest Animal, Cheetah
Hardest Metal, tungsten
Brightest Planet, venus
Largest Forest is ______ Rain Forest. , Amazon
Longest Human Bone, Femur
Longest Railway Platform, Gorakhpur 
Smallest Country, Vatican City`
      ]
    },
    {
      id: 'reading-2',
      type: 'passage',
      style: 'big',
      label: 'India : Largest, Longest, Tallest',
      data: {
        title: 'India : Largest, Longest, Tallest',
        text: [
          `# Largest...`,
          {
            type: 'hilight',
            text: `Desert − Thar Desert
Lake − Vembanad Lake
Fresh Water Lake − Wular
State (area) − Rajasthan
State (population) - Uttar Pradesh
Forest (state) − Madhya Pradesh
Port − Mumbai
City (population) − Mumbai`
          },
          `# Longest ...`,
          {
            type: 'hilight',
            text: `River − Ganga
Dam − Hirakud
Beach − Marina Beach
Road − NH44 (Srinagar to Kanyakumari)
Railway Platform − Gorakhpur
Coastline (state) − Gujarat
Tunnel − Atal Tunnel`
          },
          `# Others...`,
          {
            type: 'hilight',
            text: `Tallest Peak − Kanchenjunga 
Smallest State − Goa
Smallest State (population) − Sikkim
Highest Waterfall − Kunchikal Falls`
          }
        ]
      }
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
              qText: 'What is the largest port in India?',
              options: 'Mumbai, Chennai, Kolkata'
            },
            {
              qText: 'Which state has the largest forest cover?',
              options: 'Madhya Pradesh, Uttar Pradesh, Kerala'
            },
            {
              qText: 'Which is the largest state?',
              options: 'Rajasthan, Gujarat, Tamil Nadu, Madhya Pradesh'
            },
            {
              qText: 'Which is the largest state in population?',
              options: ' Uttar Pradesh, Madhya Pradesh, Rajasthan'
            },
            {
              qText: 'Which is the biggest fresh water lake in India?',
              options: 'Wular Lake, Vembanad Lake, Pulicat Lake'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'Which is the longest river that flows in India?',
              options: 'Ganga, Brahmaputra, Yamuna'
            },
            {
              qText: 'Which is the longest Beach in India?',
              options: 'Marina Beach, Kovalam Beach, Juhu Beach'
            },
            {
              qText: 'Which state has the longest coastline?',
              options: 'Gujarat, Maharashtra, Andhra Pradesh'
            },
            {
              qText: 'Which is the longest dam in India?',
              options: 'Hirakud Dam, Mettur Dam, Bhakra Nangal Dam'
            },
            {
              qText: 'Which is the largest city in population?',
              options: 'Mumbai, New Delhi, Banglore, Chennai'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'Which is the longest highway road in India?',
              options: 'NH 44, NH 50, NH 43'
            },
            {
              qText: 'NH 44 connects Srinagar and _________.',
              options: 'Kanyakumari, Chennai, Thiruvananthapuram'
            },
            {
              qText: 'Which is the tallest peak in India?',
              options: 'Kanchenjunga, Mount Everest, Doddabetta'
            },
            {
              qText: 'Which is the smallest state in India?',
              options: 'Goa, Haryana, Telangana'
            },
            {
              qText: 'Which is the highest waterfall in India?',
              options: 'Kunchikal Falls, Jog Falls, Athirappilly Falls'
            }
          ]
        }
      ]
    },
    {
      type: 'match',
      label: 'Match',
      id: 'match-2',
      commonData: {
        title: 'Match the following. (In India)'
      },
      data: [
        `Highest Waterfall, Kunchikal
Tallest Peak, Kanchenjunga
Longest Dam, Hirakud
Longest Tunnel, Atal
Longest Beach, Marina`,

        `Smallest State (area), Goa
Smallest State (population), Sikkim
Largest State (area), Rajasthan
Largest State (population), Uttar Pradesh
Longest Coastline, Gujarat`,

        `Largest Lake, Vembanad 
Fresh water Lake, Wular
Largest Desert, Thar
Largest Port, Mumbai
Longest Railway Platform, Gorakhpur`
      ]
    },
    {
      type: 'completeWord',
      label: 'Write It',
      id: 'complete-2',
      commonData: {
        lang: 'en',
        title: 'Write the following with respect to India.'
      },
      data: [
        `Longest River, Ganga
State with longest coastline, Gujarat
Longest Dam, Hirakud
Longest Beach, Marina
Longest Road, NH 44, __ 44
Longest Railway Platform, Gorakhpur`,

        `Largest Desert, Thar
Largest State (area), Rajasthan
Largest State (population), Uttar Pradesh
State with Largest forest, Madhya Pradesh
Largest Port, Mumbai
Highly populated city, Mumbai`,

        `Largest Lake, Vembanad
Largest Fresh Water Lake, Wular
Longest Tunnel, Atal Tunnel, ____ Tunnel
Tallest Peak, Kanchenjunga
Smallest State, Goa, ___
Smallest State (population), Sikkim
Highest Waterfall, Kunchikal`
      ]
    }
  ]
};
