const initialState = {
  userActions: [],
  allActions: [],
};

const actionReducer = (state = initialState, action) => {
  const { type, newAction, data } = action;
  switch (type) {
    case 'ADD_ACTION':
      return {
        ...state,
        allActions: [
          ...state.allActions,
          newAction,
        ],
      };

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
