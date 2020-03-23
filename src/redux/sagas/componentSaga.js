import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';



function* fetchcpu(action) {
    console.log('trying getcpu');
  try {

    const response = yield axios.get('/builds/cpu');

    // automatically log a user in after registration
    yield put({ type: 'SET_CPU', payload: response.data });
    console.log('results from getcpu:', response.data);

  } catch (error) {
      console.log('Error getting cpus:', error);
  }
}

function* fetchgpu(action) {
    console.log('trying getgpu');
  try {

    const response = yield axios.get('/builds/gpu');

    // automatically log a user in after registration
    yield put({ type: 'SET_GPU', payload: response.data });
    console.log('results from getGPU:', response.data);

  } catch (error) {
      console.log('Error getting gpus:', error);
  }
}

function* fetchpsu(action) {
    console.log('trying getpsu');
  try {

    const response = yield axios.get('/builds/psu');

    // automatically log a user in after registration
    yield put({ type: 'SET_PSU', payload: response.data });
    console.log('results from getpsu:', response.data);

  } catch (error) {
      console.log('Error getting psus:', error);
  }
}

function* fetchram(action) {
    console.log('trying getram');
  try {

    const response = yield axios.get('/builds/ram');

    // automatically log a user in after registration
    yield put({ type: 'SET_RAM', payload: response.data });
    console.log('results from getram:', response.data);

  } catch (error) {
      console.log('Error getting ram:', error);
  }
}

function* fetchmobo(action) {
    console.log('trying getmobo');
  try {

    const response = yield axios.get('/builds/mobo');

    // automatically log a user in after registration
    yield put({ type: 'SET_MOBO', payload: response.data });
    console.log('results from getmobo:', response.data);

  } catch (error) {
      console.log('Error getting mobos:', error);
  }
}


function* componentSaga() {
  yield takeEvery('GET_CPU', fetchcpu);
  yield takeEvery('GET_GPU', fetchgpu);
  yield takeEvery('GET_PSU', fetchpsu);
  yield takeEvery('GET_RAM', fetchram);
  yield takeEvery('GET_MOBO', fetchmobo);
}

export default componentSaga;