export default {
  label: 'States of India',
  id: 'states',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Notes: States and Capitals',
      data: {
        title: 'States and Capitals',
        text: [
          {
            type: 'hilight',
            text: `Uttar Pradesh − Lucknow
Uttarakhand − Dehradun
West Bengal − Kolkata
Bihar − Patna
Chhattisgarh − Raipur
Rajasthan − Jaipur
Gujarat − Gandhinagar
Haryana − Chandigarh
Himachal Pradesh − Shimla
Jharkhand − Ranchi`
          },
          {
            type: 'hilight',
            text: `Madhya Pradesh − Bhopal
Maharashtra − Mumbai
Odisha − Bhubaneswar
Punjab − Chandigarh
Andhra Pradesh − Amaravati
Karnataka	− Bengaluru 
Kerala − Thiruvananthapuram
Tamil Nadu − Chennai
Telangana − Hyderabad
Goa − Panaji`
          },
          {
            type: 'hilight',
            text: `Arunachal Pradesh − Itanagar
Assam − Dispur
Manipur − Imphal
Meghalaya − Shillong
Mizoram − Aizawl
Nagaland − Kohima
Sikkim − Gangtok
Tripura	− Agartala`
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Match',
      id: 'match',
      commonData: {
        title: 'Match States and Capitals'
      },
      data: [
        `Uttar Pradesh, Lucknow
Uttarakhand, Dehradun
West Bengal, Kolkata
Bihar , Patna
Chhattisgarh , Raipur
Rajasthan	, Jaipur`,

        `Gujarat	, Gandhinagar
Haryana	, Chandigarh
Himachal Pradesh , Shimla
Jharkhand	, Ranchi
Madhya Pradesh , Bhopal
Maharashtra	, Mumbai`,

        `Odisha , Bhubaneswar
Punjab , Chandigarh
Andhra Pradesh , Amaravati
Karnataka	, Bengaluru 
Kerala , Thiruvananthapuram
Tamil Nadu , Chennai`,

        `Telangana	, Hyderabad
Goa , Panaji
Arunachal Pradesh , Itanagar
Assam , Dispur
Manipur	, Imphal`,

        `Meghalaya	, Shillong
Mizoram	, Aizawl
Nagaland , Kohima
Sikkim , Gangtok
Tripura	, Agartala`
      ]
    },
    {
      type: 'completeWord',
      label: 'Write the Capital',
      id: 'write-capital',
      commonData: {
        lang: 'en',
        title: 'Type the capital of the given state.'
      },
      data: [
        `Uttar Pradesh, Lucknow
Uttarakhand, Dehradun
West Bengal, Kolkata
Bihar , Patna
Chhattisgarh , Raipur
Rajasthan	, Jaipur
Telangana	, Hyderabad
Goa , Panaji
Arunachal Pradesh , Itanagar
Assam , Dispur`,

        `Gujarat	, Gandhinagar
Haryana	, Chandigarh
Himachal Pradesh , Shimla
Jharkhand	, Ranchi
Madhya Pradesh , Bhopal
Maharashtra	, Mumbai
Meghalaya	, Shillong
Mizoram	, Aizawl
Nagaland , Kohima
Sikkim , Gangtok`,

        `Odisha , Bhubaneswar
Punjab , Chandigarh
Andhra Pradesh , Amaravati
Karnataka	, Bengaluru 
Kerala , Thiruvananthapuram
Tamil Nadu , Chennai
Manipur	, Imphal
Tripura	, Agartala`
      ]
    }
  ]
};
