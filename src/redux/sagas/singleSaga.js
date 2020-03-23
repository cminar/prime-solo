import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* fetchBuilds(action) {
    try {
        console.log('target id', action.payload);
        const response = yield axios.get(`/builds/api/${action.payload}`);
        yield put({ type: 'SET_BUILD', payload: response.data });
        console.log('results from single get: ', response.data)
        
    } catch (error) {
        console.log('error getting build', error);
    }
}

function* newBuild(action)  {
    try {
        console.log('payload: ', action.payload)
        yield axios.post('/builds', action.payload);
    } catch (error) {
        console.log('error getting build', error);
    }
}

function* singleSaga() {
  yield takeEvery('GET_BUILD', fetchBuilds);
  yield takeEvery('NEW_BUILD', newBuild)
}

export default singleSaga;