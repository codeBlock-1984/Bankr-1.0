const initialState = {
  userTransactions: [
    {
      type: 'DEBIT',
      amount: 8900,
      createdon: 'MON MAY 27 2019 00:32:14',
      accountnumber: '1012936003',
    },
    {
      type: 'CREDIT',
      amount: 5600,
      createdon: 'MON MAY 27 2019 00:32:14',
      accountnumber: '1012936003',
    },
    {
      type: 'DEBIT',
      amount: 1300,
      createdon: 'MON MAY 27 2019 00:32:14',
      accountnumber: '1012935403',
    },
    {
      type: 'CREDIT',
      amount: 7300,
      createdon: 'MON MAY 27 2019 00:32:14',
      accountnumber: '1012935403',
    },
  ],
  allTransactions: [],
};

const transactionReducer = (state = initialState, action) => {
  const { type, newTransaction, data } = action;
  switch (type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        allTransactions: [
          ...state.allTransactions,
          newTransaction,
        ],
      };

    case 'SET_USER_TRANSACTIONS':
      return {
        ...state,
        userTransactions: {
          ...data,
        },
      };

    default:
      return state;
  }
};

export default transactionReducer;
