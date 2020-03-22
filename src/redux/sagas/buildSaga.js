import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { SearchResults } from 'semantic-ui-react';



function* fetchBuilds(action) {
    console.log('trying get');
  try {

    const response = yield axios.get('/builds');

    // automatically log a user in after registration
    yield put({ type: 'SET_BUILDS', payload: response.data });
    console.log('results from get:', response.data);

  } catch (error) {
      console.log('Error getting builds:', error);
  }
}

function* deleteBuild(action) {
    try {
        console.log('target id', action.payload);
        yield axios.delete(`/builds/${action.payload}`);
        
    } catch (error) {
        console.log('error deleting build', error);
    }
}

function* buildsSaga() {
  yield takeEvery('GET_BUILDS', fetchBuilds);
  yield takeEvery('DEL_BUILD', deleteBuild);
}

export default buildsSaga;