export default {
  label: 'Brands, Companies and People',
  id: 'brands',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Notes: Brands',
      data: {
        title: 'Brands, Companies and People',
        text: [
          `# Companies and Founders`,
          `In all big companies, many people will work. But one or a few individuals usually start a company. They are called founders. Find below some of the famous companies and their founders.`,
          {
            type: 'hilight',
            text: `Apple − Steve Jobs
Microsoft − Bill Gates
Amazon − Jeff Bezos
Facebook − Mark Zuckerberg
Tesla − Elon Musk 
Google − Larry Page
Reliance − Dhirubhai Ambani
Infosys − Narayana Murthy
Alibaba − Jack Ma
General Electric − Thomas Alva Edison`
          },
          `# Brand and Products`,
          `Companies are usually identified and advertised as brands. A brand can offer one or more products. Find below, some of the common brands and their products.`,
          {
            type: 'hilight',
            text: `Amul −  Ice Cream
Bajaj − Scooter
Cipla − Medicine
Titan − Watches
Taj − Hotels
Pepsodent − Tooth Paste
Johnson and Johnson − Baby Products
Britannia − Biscuit
Cadburys − Chocolate
The Hindu − Newspaper
Microsoft − Computer OS
Google − Search Engine
Flipkart − Online Shopping
Xerox − Photocopy
Facebook − Social Media Platform`
          },
          `# Brands and Slogans`,
          `While advertising, the brands use a sentence or phrase that explains the product. Find below some of the common brands and their slogans.`,
          {
            type: 'hilight',
            text: `Amul − The Taste of India
Apple − Think Different
7 up − I feel Up
HDFC Bank − We understand your world
Airtel − Express Yourself 
Kit Kat − Have a break
Britannia − Eat Healthy, Think Better
Castrol − It’s More Than Just Oil
Dettol − Be 100% Sure
D-Mart − Daily Savings Daily Discounts
Nokia − Connecting People
OLX − Where Buyers Meet Sellers
Onida −  Neighbour’s Envy, Owner’s Pride
Pepsodent − Protection Outside Freshness Inside
Raymond − The Complete Man. Feels Like Heaven
SBI − A Bank Of The Common Man
Sunfeast − Spread the Smile
Suzlon − Powering A Greener Tomorrow
Sunsilk − Life Can’t Wait
Strepsils − First Aid For Sore Throat`
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Match',
      id: 'match',
      commonData: {
        title: 'Match'
      },
      data: [
        `Google, Larry Page
Reliance, Dhirubhai Ambani
Infosys, Narayana Murthy
Alibaba, Jack Ma
General Electric, Thomas Alva Edison`,

        `Apple, Steve Jobs
Microsoft, Bill Gates
Amazon, Jeff Bezos
Facebook, Mark Zuckerberg
Tesla, Elon Musk `,

        `Amul, Ice Cream
Bajaj, Scooter
Cipla, Medicine
Titan, Watches
Taj, Hotels`,

        `Pepsodent, Tooth Paste
Johnson and Johnson, Baby Products
Britannia, Biscuit
Cadburys, Chocolate
The Hindu, Newspaper`,

        `Microsoft, Computer OS
Google, Search Engine
Flipkart, Online Shopping
Xerox, Photocopy
Facebook, Social Media Platform`
      ]
    },

    {
      label: 'Brands and Slogans',
      type: 'matchByDragDrop',
      id: 'slogans',
      commonData: {
        title: 'Drag and drop to match Brands and Slogans.',
        printTitle: 'Pick the brand to match the slogon.',
        styles: {
          fontSize: '1.2rem',
          dashWidth: 80
        }
      },
      data: [
        `*Amul* − The Taste of India
*Apple* − Think Different
*7 up* − I feel Up
*HDFC Bank* − We understand your world
*Airtel* − Express Yourself`,

        `*Kit Kat* − Have a break
*Britannia* − Eat Healthy, Think Better
*Castrol* − It’s More Than Just Oil
*Dettol* − Be 100% Sure
*D-Mart* − Daily Savings Daily Discounts`,

        `*Nokia* − Connecting People
*OLX* − Where Buyers Meet Sellers
*Onida* −  Neighbour’s Envy, Owner’s Pride
*Pepsodent* − Protection Outside Freshness Inside
*Raymond* − The Complete Man. Feels Like Heaven`,

        `*SBI* − A Bank Of The Common Man
*Sunfeast* − Spread the Smile
*Suzlon*	− Powering A Greener Tomorrow
*Sunsilk* − Life Can’t Wait
*Strepsils* − First Aid For Sore Throat`
      ]
    }
  ]
};
