const mockTransactionsData = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJUeXBlIjoiY2xpZW50IiwiaWF0IjoxNTU2MjcwMTM2fQ.g3DFFGpTg2j6jPtSNj-yqGC1DHR2_xxf6109ppvTGXE',
  adminToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsInVzZXJUeXBlIjoiYWRtaW4iLCJpYXQiOjE1NTYyNzAzNjR9.4MZJhVSpfHjzIrAOhtNumJIGozEUQfea0dzx3QZPbas',
  errorResponse: {
    message: 'Login failed',
  },
  success: {
    message: 'Successfully retrieved user transaction records',
    data: [
      {
        type: 'debit',
        amount: '500',
        createdon: '05-06-12',
        accountnumber: 1029394857,
      },
      {
        type: 'debit',
        amount: '500',
        createdon: '05-06-12',
        accountnumber: 1029394857,
      },
      {
        type: 'debit',
        amount: '500',
        createdon: '05-06-12',
        accountnumber: 1029394857,
      },
      {
        type: 'debit',
        amount: '500',
        createdon: '05-06-12',
        accountnumber: 1029394857,
      },
    ],
  },
};

export default mockTransactionsData;
