import { combineReducers } from 'redux';

const cpuReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CPU':
        console.log('action.payload',action.payload);
        return action.payload;
      default:
        return state;
    }
  };
  const psuReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PSU':
        console.log('action.payload',action.payload);
        return action.payload;
      default:
        return state;
    }
  };
  const gpuReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_GPU':
        console.log('action.payload',action.payload);
        return action.payload;
      default:
        return state;
    }
  };
  const ramReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_RAM':
        console.log('action.payload',action.payload);
        return action.payload;
      default:
        return state;
    }
  };
  const moboReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_MOBO':
        console.log('action.payload',action.payload);
        return action.payload;
      default:
        return state;
    }
  };

  
  export default combineReducers({
    cpuReducer,
    psuReducer,
    gpuReducer,
    ramReducer,
    moboReducer,
  });