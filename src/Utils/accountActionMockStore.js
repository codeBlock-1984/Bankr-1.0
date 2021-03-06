const mockAccountsData = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJUeXBlIjoiY2xpZW50IiwiaWF0IjoxNTU2MjcwMTM2fQ.g3DFFGpTg2j6jPtSNj-yqGC1DHR2_xxf6109ppvTGXE',
  adminToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsInVzZXJUeXBlIjoiYWRtaW4iLCJpYXQiOjE1NTYyNzAzNjR9.4MZJhVSpfHjzIrAOhtNumJIGozEUQfea0dzx3QZPbas',
  errorResponse: {
    message: 'Login failed',
  },
  userAccountsSuccess: {
    message: 'Successfully retrieved user accounts.',
    data: [
      {
        createdon: '2019-05-26T23:32:12.917Z',
        accountnumber: 1012934423,
        type: 'savings',
        status: 'active',
        balance: 5000.05,
      },
      {
        createdon: '2019-05-26T23:32:13.377Z',
        accountnumber: 1022900469,
        type: 'current',
        status: 'active',
        balance: 56000.1,
      },
      {
        createdon: '2019-05-26T23:32:13.866Z',
        accountnumber: 1014657734,
        type: 'savings',
        status: 'dormant',
        balance: 1400.45,
      },
      {
        createdon: '2019-05-26T23:32:14.301Z',
        accountnumber: 1023394885,
        type: 'current',
        status: 'dormant',
        balance: 198000.05,
      },
      {
        createdon: '2019-05-30T20:18:36.004Z',
        accountnumber: 1057208528,
        type: 'savings',
        status: 'active',
        balance: 0,
      },
      {
        createdon: '2019-05-30T20:18:53.224Z',
        accountnumber: 1008505471,
        type: 'current',
        status: 'active',
        balance: 0,
      },
    ],
  },
  userTransactionsSuccess: {
    message: 'Successfully retrieved user transaction records.',
    data: [
      {
        transactionid: 1,
        createdon: '2019-05-26T23:32:14.752Z',
        type: 'credit',
        accountnumber: 1012934423,
        amount: 300.33,
        oldbalance: 5000.05,
        newbalance: 5300.38,
      },
      {
        transactionid: 5,
        createdon: '2019-05-26T23:32:15.714Z',
        type: 'credit',
        accountnumber: 1012934423,
        amount: 250000.52,
        oldbalance: 5300.38,
        newbalance: 255300.9,
      },
      {
        transactionid: 6,
        createdon: '2019-05-26T23:32:15.926Z',
        type: 'credit',
        accountnumber: 1012934423,
        amount: 2004.7,
        oldbalance: 255300.9,
        newbalance: 257305.6,
      },
      {
        transactionid: 7,
        createdon: '2019-05-26T23:32:16.134Z',
        type: 'debit',
        accountnumber: 1012934423,
        amount: 15100.4,
        oldbalance: 257305.6,
        newbalance: 242205.2,
      },
      {
        transactionid: 8,
        createdon: '2019-05-26T23:32:16.751Z',
        type: 'debit',
        accountnumber: 1012934423,
        amount: 100.05,
        oldbalance: 242205.2,
        newbalance: 242105.15,
      },
    ],
  },
  accountsSuccess: {
    message: 'Successfully retrieved all accounts.',
    data: [
      {
        id: 1,
        firstname: 'Alice',
        lastname: 'Nwankwo',
        photourl: 'https://i.pravatar.cc/150?img=16',
        email: 'emmanuelroic@gmail.com',
        owner: 1,
        type: 'savings',
        accountnumber: 1012934423,
        status: 'active',
        balance: 5000.05,
        createdon: '2019-05-26T23:32:12.917Z',
      },
      {
        id: 2,
        firstname: 'Leonard',
        lastname: 'Mustapha',
        photourl: null,
        email: 'leomustapha@yahoo.com',
        owner: 2,
        type: 'current',
        accountnumber: 1020095776,
        status: 'dormant',
        balance: 1945.65,
        createdon: '2019-05-26T23:32:13.142Z',
      },
      {
        id: 3,
        firstname: 'Alice',
        lastname: 'Nwankwo',
        photourl: 'https://i.pravatar.cc/150?img=16',
        email: 'emmanuelroic@gmail.com',
        owner: 1,
        type: 'current',
        accountnumber: 1022900469,
        status: 'active',
        balance: 56000.1,
        createdon: '2019-05-26T23:32:13.377Z',
      },
      {
        id: 4,
        firstname: 'Leonard',
        lastname: 'Mustapha',
        photourl: null,
        email: 'leomustapha@yahoo.com',
        owner: 2,
        type: 'savings',
        accountnumber: 1015779306,
        status: 'dormant',
        balance: 178306.83,
        createdon: '2019-05-26T23:32:13.652Z',
      },
      {
        id: 5,
        firstname: 'Alice',
        lastname: 'Nwankwo',
        photourl: 'https://i.pravatar.cc/150?img=16',
        email: 'emmanuelroic@gmail.com',
        owner: 1,
        type: 'savings',
        accountnumber: 1014657734,
        status: 'dormant',
        balance: 1400.45,
        createdon: '2019-05-26T23:32:13.866Z',
      },
      {
        id: 6,
        firstname: 'Leonard',
        lastname: 'Mustapha',
        photourl: null,
        email: 'leomustapha@yahoo.com',
        owner: 2,
        type: 'savings',
        accountnumber: 1010048577,
        status: 'active',
        balance: 74000.05,
        createdon: '2019-05-26T23:32:14.077Z',
      },
      {
        id: 7,
        firstname: 'Alice',
        lastname: 'Nwankwo',
        photourl: 'https://i.pravatar.cc/150?img=16',
        email: 'emmanuelroic@gmail.com',
        owner: 1,
        type: 'current',
        accountnumber: 1023394885,
        status: 'dormant',
        balance: 198000.05,
        createdon: '2019-05-26T23:32:14.301Z',
      },
      {
        id: 8,
        firstname: 'Leonard',
        lastname: 'Mustapha',
        photourl: null,
        email: 'leomustapha@yahoo.com',
        owner: 2,
        type: 'current',
        accountnumber: 1026590042,
        status: 'active',
        balance: 500600.05,
        createdon: '2019-05-26T23:32:14.547Z',
      },
      {
        id: 9,
        firstname: 'Alice',
        lastname: 'Nwankwo',
        photourl: 'https://i.pravatar.cc/150?img=16',
        email: 'emmanuelroic@gmail.com',
        owner: 1,
        type: 'savings',
        accountnumber: 1057208528,
        status: 'active',
        balance: 0,
        createdon: '2019-05-30T20:18:36.004Z',
      },
      {
        id: 10,
        firstname: 'Alice',
        lastname: 'Nwankwo',
        photourl: 'https://i.pravatar.cc/150?img=16',
        email: 'emmanuelroic@gmail.com',
        owner: 1,
        type: 'current',
        accountnumber: 1008505471,
        status: 'active',
        balance: 0,
        createdon: '2019-05-30T20:18:53.224Z',
      },
      {
        id: 11,
        firstname: 'darlene',
        lastname: 'manning',
        photourl: null,
        email: 'darlene@gmail.com',
        owner: 11,
        type: 'savings',
        accountnumber: 1079085945,
        status: 'active',
        balance: 5000,
        createdon: '2019-06-01T12:12:01.691Z',
      },
      {
        id: 12,
        firstname: 'darlene',
        lastname: 'manning',
        photourl: null,
        email: 'darlene@gmail.com',
        owner: 11,
        type: 'current',
        accountnumber: 1047169047,
        status: 'active',
        balance: 0,
        createdon: '2019-06-01T12:12:43.720Z',
      },
    ],
  },
};

export default mockAccountsData;
