const inspReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_INSP':
        console.log('action.payload',action.payload);
        return action.payload;
      default:
        return state;
    }
  };
  
  export default inspReducer;