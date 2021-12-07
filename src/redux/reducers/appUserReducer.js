const initState = () => ({
  appUser: 0,
});

const appUserReducer = (state = initState(), action) => {
  switch (action.type) {
    case 'APPUSER_SET':
      return {
        ...state, // Copy old state
        appUser: action.appUser, // Input new user id
      };
    default:
      // Don't modify state, ignore action
      return state;
  }
};

export default appUserReducer;
