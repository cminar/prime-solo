import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';



function* putCPU(action) {
    console.log('trying put CPU with,', action.payload);
  try {

    yield axios.put(`/builds/api/cpu/${action.payload}`, action.payload);

    // automatically log a user in after registration

  } catch (error) {
      console.log('Error getting builds:', error);
  }
}

function* putGPU(action) {
    console.log('trying put GPU with,', action.payload);
  try {

    yield axios.put(`/builds/api/gpu/${action.payload}`, action.payload);

    // automatically log a user in after registration

  } catch (error) {
      console.log('Error getting builds:', error);
  }
}

function* putRAM(action) {
    console.log('trying put RAM with,', action.payload);
  try {

    yield axios.put(`/builds/api/ram/${action.payload}`, action.payload);

    // automatically log a user in after registration

  } catch (error) {
      console.log('Error getting builds:', error);
  }
}

function* putMOBO(action) {
    console.log('trying put MOBO with,', action.payload);
  try {

    yield axios.put(`/builds/api/mobo/${action.payload}`, action.payload);

    // automatically log a user in after registration

  } catch (error) {
      console.log('Error getting builds:', error);
  }
}

function* putPSU(action) {
    console.log('trying put PSU with,', action.payload);
  try {

    yield axios.put(`/builds/api/psu/${action.payload}`, action.payload);

    // automatically log a user in after registration

  } catch (error) {
      console.log('Error getting builds:', error);
  }
}


function* addComponentSaga() {
    yield takeEvery('ADD_CPU', putCPU);
    yield takeEvery('ADD_GPU', putGPU);
    yield takeEvery('ADD_PSU', putPSU);
    yield takeEvery('ADD_RAM', putRAM);
    yield takeEvery('ADD_MOBO', putMOBO);
  }
  
  export default addComponentSaga;