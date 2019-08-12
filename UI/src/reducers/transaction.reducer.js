const initialState = {
  userTransactions: [],
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

    case 'GET_USER_TRANSACTIONS':
      return {
        ...state,
        userTransactions: [
          ...data,
        ],
      };

    case 'SET_USER_TRANSACTIONS':
      return {
        ...state,
        userTransactions: [
          ...data,
        ],
      };

    default:
      return state;
  }
};

export default transactionReducer;
