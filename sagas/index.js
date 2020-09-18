import { call, put, takeLatest } from "redux-saga/effects";
import actions, { searchAction } from "../actions";
import services from "../services";

function* searchAppAction(action) {
    try {
        const searchedItems = yield call(services.searchAppAction, action.searchText);
        yield put(actions.searchAppActionSuccess(searchedItems));
    } catch (e) {
        console.log(e);
    }
}

function* saga() {
    yield takeLatest(searchAction, searchAppAction);
}

export default saga;