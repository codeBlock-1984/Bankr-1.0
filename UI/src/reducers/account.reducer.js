const initialState = {
  userAccounts: [
    {
      type: 'savings',
      balance: 8900.90,
      accountnumber: '1012936003',
    },
    {
      type: 'current',
      balance: 63500.90,
      accountnumber: '1014763895',
    },
  ],
  allAccounts: [],
};

const accountReducer = (state = initialState, action) => {
  const { type, newAccount, data } = action;
  switch (type) {
    case 'ADD_ACCOUNT':
      return {
        ...state,
        allAccounts: [
          ...state.allAccounts,
          newAccount,
        ],
      };

    case 'GET_USER_ACCOUNTS':
      return state;

    case 'SET_USER_ACCOUNTS':
      return {
        ...state,
        userAccounts: [
          ...data,
        ],
      };

    default:
      return state;
  }
};

export default accountReducer;
