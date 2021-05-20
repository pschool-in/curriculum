export default {
  label: 'World Countries',
  id: 'countries',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Read : Countries and Capitals',
      data: {
        title: 'Countries and Capitals',
        text: [
          {
            type: 'hilight',
            text: `Australia − Canberra
Brazil − Brasilia
Canada − Ottawa
China − Beijing
England − London
France − Paris`
          },
          {
            type: 'hilight',
            text: `Germany − Berlin
India − New Delhi
Italy − Rome
Japan − Tokyo
Malaysia − Kuala Lumpur
United States − Washington D.C.`
          },
          {
            type: 'hilight',
            text: `Afghanistan − Kabul
Bangladesh − Dhaka
Bhutan − Thimphu
Maldives − Male
Sri Lanka − Colombo
Nepal − Kathmandu`
          },
          {
            type: 'hilight',
            text: `Austria − Vienna
Bahrain − Manama
Belgium − Brussels
Chile − Santiago
Cuba − Havana
Czech Republic − Prague`
          },
          {
            type: 'hilight',
            text: `Denmark − Copenhagen
Egypt − Cairo
Greece − Athens
Indonesia − Jakarta
Iran − Tehran
Iraq − Baghdad
Syria − Damascus`
          },
          {
            type: 'hilight',
            text: `Ireland − Dublin
Israel − Jerusalem 
Jamaica − Kingston
Kenya − Nairobi
Mexico − Mexico City
Netherlands − Amsterdam
Sweden − Stockholm`
          },
          {
            type: 'hilight',
            text: `New Zealand − Wellington
Norway − Oslo
Oman − Muscat
Pakistan − Islamabad
Poland − Warsaw
Portugal − Lisbon
Thailand − Bangkok`
          },
          {
            type: 'hilight',
            text: `Russia − Moscow
Saudi Arabia − Riyadh
Singapore − Singapore
South Africa − Cape Town
South Korea − Seoul
Spain − Madrid
United Arab Emirates − Abu Dhabi`
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Match Countries and Capitals',
      id: 'match',
      commonData: {
        title: 'Match Countries and Capitals'
      },
      data: [
        `Australia, Canberra
Brazil, Brasilia
Canada, Ottawa
China, Beijing
England, London
France, Paris`,

        `Germany, Berlin
India, New Delhi
Italy, Rome
Japan, Tokyo
Malaysia, Kuala Lumpur
United States, Washington D.C.`,

        `Afghanistan, Kabul
Bangladesh, Dhaka
Bhutan, Thimphu
Maldives, Male
Sri Lanka, Colombo
Nepal, Kathmandu`,

        `Austria, Vienna
Bahrain, Manama
Belgium, Brussels
Chile, Santiago
Cuba, Havana
Czech Republic, Prague`,

        `Denmark, Copenhagen
Egypt, Cairo
Greece, Athens
Indonesia, Jakarta
Iran, Tehran
Iraq, Baghdad
Syria, Damascus`,

        `Ireland, Dublin
Israel, Jerusalem 
Jamaica, Kingston
Kenya, Nairobi
Mexico, Mexico City
Netherlands, Amsterdam
Sweden, Stockholm`,

        `New Zealand, Wellington
Norway, Oslo
Oman, Muscat
Pakistan, Islamabad
Poland, Warsaw
Portugal, Lisbon
Thailand, Bangkok`,

        `Russia, Moscow
Saudi Arabia, Riyadh
Singapore, Singapore
South Africa, Cape Town
South Korea, Seoul
Spain, Madrid
United Arab Emirates, Abu Dhabi`
      ]
    },
    {
      type: 'completeWord',
      label: 'Write the Capital',
      id: 'write-capital',
      commonData: {
        lang: 'en',
        title: 'Type the capital of the given country.'
      },
      data: [
        `Australia, Canberra
Brazil, Brasilia
Canada, Ottawa
China, Beijing
England, London
France, Paris
Bangladesh, Dhaka`,

        `Germany, Berlin
Italy, Rome
Japan, Tokyo
Sri Lanka, Colombo
United States, Washington
Afghanistan, Kabul
Thailand, Bangkok`,

        `Austria, Vienna
Bahrain, Manama
Belgium, Brussels
Czech Republic, Prague
Portugal, Lisbon
South Africa, Cape Town`,

        `Russia, Moscow
Saudi Arabia, Riyadh
South Korea, Seoul
United Arab Emirates, Abu Dhabi
Egypt, Cairo
Greece, Athens`,

        `Ireland, Dublin
Israel, Jerusalem 
Jamaica, Kingston
Netherlands, Amsterdam
New Zealand, Wellington
Indonesia, Jakarta`
      ]
    },

    {
      type: 'completeWord',
      label: 'Write the Country',
      id: 'write-country',
      commonData: {
        lang: 'en',
        title: 'Type the country which has the given capital.'
      },
      data: [
        `New Delhi, India
Kuala Lumpur, Malaysia
Mexico City, Mexico
Copenhagen, Denmark
Nairobi, Kenya
Stockholm, Sweden
Havana, Cuba`,

        `Male, Maldives
Kathmandu, Nepal
Muscat, Oman
Islamabad, Pakistan
Warsaw, Poland
Thimphu, Bhutan`,

        `Santiago, Chile
Madrid, Spain
Oslo, Norway
Tehran, Iran
Baghdad, Iraq
Damascus, Syria`
      ]
    }
  ]
};
