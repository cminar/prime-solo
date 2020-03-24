import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addComponentSaga() {
    yield takeEvery('GET_CPU', fetchcpu);
    yield takeEvery('GET_GPU', fetchgpu);
    yield takeEvery('GET_PSU', fetchpsu);
    yield takeEvery('GET_RAM', fetchram);
    yield takeEvery('GET_MOBO', fetchmobo);
  }
  
  export default addComponentSaga;