const initialState = {
  userActions: [],
  allActions: [],
};

const actionReducer = (state = initialState, action) => {
  const { type, newAction, data } = action;
  switch (type) {
    case 'GET_USER_ACTIONS':
      return {
        ...state,
        userActions: [
          ...data,
        ],
      };

    default:
      return state;
  }
};

export default actionReducer;
