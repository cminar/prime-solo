const buildReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_BUILDS':
        console.log('action.payload',action.payload);
        return action.payload;
      default:
        return state;
    }
  };
  
  export default buildReducer;