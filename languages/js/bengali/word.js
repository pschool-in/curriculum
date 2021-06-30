export default {
  label: 'Word',
  id: 'word',
  img: 'word',
  list: [
    {
      id: 'jumbled',
      type: 'sequence',
      label: 'Form word',
      commonData: {
        title: 'Connect Letters to form Word',
        lang: 'bn'
      },
      data: [`গোলাপ, সূর্যমুখী, কাঁঠাল, আমের, আনারস, ডালিম`]
    },

    {
      //Antonyms
      id: 'opposites',
      type: 'match',
      label: 'Opposites',
      commonData: {
        title: 'Opposites',
        fontSize: '1.2rem'
      },
      data: [
        `উচু, নিচু
চালাক, বোকা
অচল, সচল
অল্প, অধিক
কাচা, পাকা`,

        `কমতি, বাড়তি
গরম, ঠান্ডা
পূর্ব, পশ্চিম
জন্ম, মৃত্যু
টক, মিষ্টি`
      ]
    },
    {
      // Synonyms
      id: 'same-meaning',
      type: 'match',
      label: 'Same Meaning',
      commonData: {
        title: 'Same Meaning',
        fontSize: '1.2rem'
      },
      data: [
        `অচল , গতিহীন
নয়ন , চোখ
অেনক , বেশি
চমৎকার, সুন্দর
অভাব, অনটন`,

        `অরণ্য, বন
অলস, কুড়ে
অল্প, কম
আইন, বিধান
আকাশ, গগন`
      ]
    }
  ]
};
