const mockActionsData = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJUeXBlIjoiY2xpZW50IiwiaWF0IjoxNTU2MjcwMTM2fQ.g3DFFGpTg2j6jPtSNj-yqGC1DHR2_xxf6109ppvTGXE',
  adminToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsInVzZXJUeXBlIjoiYWRtaW4iLCJpYXQiOjE1NTYyNzAzNjR9.4MZJhVSpfHjzIrAOhtNumJIGozEUQfea0dzx3QZPbas',
  errorResponse: {
    message: 'Login failed',
  },
  success: {
    message: 'Successfully retrieved user accounts.',
    data: [
      {
        type: 'savings',
        accountnumber: '1020030293',
        date: '24-09-13',
        amount: '500',
      },
      {
        type: 'savings',
        accountnumber: '1020030293',
        date: '24-09-13',
        amount: '500',
      },
      {
        type: 'savings',
        accountnumber: '1020030293',
        date: '24-09-13',
        amount: '500',
      },
    ],
  },
};

export default mockActionsData;
