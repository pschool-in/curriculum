export default {
  label: 'Picture',
  id: 'picture',
  img: 'image',
  list: [
    {
      type: 'completeWord',
      label: 'Fill in the Blanks',
      id: 'complete-word',
      commonData: {
        images: 'custom',
        lang: 'bn'
      },
      data: [
        `sun| সূ, র্য| _, র্য| সূ, তা, ঔ, এ
star| তারা| _রা| তা, বৃ, ঔ, এ
rain| বৃ, ষ্টি| _, ষ্টি| বৃ, সূ, তা, ঔ
milk| দুধ| _ধ| দু , বৃ, সূ, তা
leaf| পাত| _ত| পা , দু , বৃ, সূ
king| রাজা| _জা| রা, তা, ঔ, এ
wheel| চাকা| _কা| চা ,তা, ঔ, এ
world| বিশ্ব| _শ্ব| বি , রা, তা, ঔ
ladder| মই| _ই| ম, বি, ই, ঋ
kite| ঘুড়ি| _ড়ি| ঘু , ক, ঘ, ফ`
      ]
    },
    {
      id: 'match-animals',
      type: 'match',
      label: 'Match',
      commonData: {
        title: 'Match images with their first letter',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `ক, banana
আ, mango
পেঁ, papaya
ত, watermelon
ডা, pomegranate`
      ]
    },
    {
      type: 'connectLetters',
      label: 'Connect Letters',
      id: 'connect-letters',
      commonData: {
        title: 'Connect Letters to form words',
        printTitle: 'Form the word using the letters.',
        type: 'image',
        lang: 'bn'
      },
      data: [
        `sun, সূর্য
star, তারা
rain, বৃষ্টি
milk, দুধ
leaf, পাত
king, রাজা
wheel, চাকা
world, বিশ্ব
ladder, মই
kite, ঘুড়ি`
      ]
    }
  ]
};
