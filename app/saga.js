import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

function * demo(){
    yield put({type:'REDUX_SAGA'});
}

function * saga() {
    yield takeEvery('DEMO', demo);
}

export default saga;