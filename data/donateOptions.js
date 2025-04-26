// data/donateOptions.js

const donateOptions = {
    oneTime: [
      {
        label: '$5',
        description: 'Provides a few essential hygiene items.',
        amount: 5
      },
      {
        label: '$10',
        description: 'Supports basic emergency supplies.',
        amount: 10
      },
      {
        label: '$25',
        description: 'Provides a hygiene kit for one survivor.',
        amount: 25
      },
      {
        label: '$50',
        description: 'Two hygiene kits and supplies.',
        amount: 50
      },
      {
        label: '$100',
        description: 'Emergency microgrants for a family.',
        amount: 100
      },
    ],
    recurring: [
      {
        label: '$10/mo',
        description: 'Ongoing support to sustain programs.',
        amount: 10
      },
      {
        label: '$25/mo',
        description: 'Funds multiple kits each month.',
        amount: 25
      },
      {
        label: '$50/mo',
        description: 'Helps underwrite workshops & grants.',
        amount: 50
      },
    ],
  };
  
  export default donateOptions;
  