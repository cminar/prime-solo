import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchInspiration(action) {
    console.log('trying get insp');
  try {

    const response = yield axios.get('/builds/all/all');

    // automatically log a user in after registration
    yield put({ type: 'SET_INSP', payload: response.data });
    console.log('results from insp:', response.data);

  } catch (error) {
      console.log('Error getting insp:', error);
  }
}

function* inspirationSaga() {
    yield takeEvery('GET_INSP', fetchInspiration);
  }
  
  export default inspirationSaga;