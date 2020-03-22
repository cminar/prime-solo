const singleReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_BUILD':
        console.log('action.payload',action.payload);
        return action.payload;
      default:
        return state;
    }
  };
  
  export default singleReducer;