import { call, put, takeLatest, select } from "redux-saga/effects";
import actions, { signUp, logIn } from "../actions";
import services from "../services";
import { requiredFields } from "../constants";

function* signUpAction(action) {
	try {
		// ToDo : Need to change this implemantion by adding netWork calls
		// const searchedItems = yield call(services.searchAppAction, action.searchText);
		// yield put(actions.signUpSuccessActions(searchedItems));
		const insertedFields = yield select((state) => state.logInOrSignUp.inputedText);

		if (
			insertedFields.name &&
			insertedFields.mobileNumber &&
			insertedFields.email &&
			insertedFields.password &&
			insertedFields.verifyPassword
		) {
			yield put(actions.signUpSuccessActions(insertedFields));
		} else {
			yield put(actions.signUpFailedActions("Enter all required Fileds"));
		}
	} catch (e) {
		yield put(actions.logInFailedActions("Error"));
	}
}

function* logInAction(action) {
	try {
		const insertedFields = yield select((state) => state.logInOrSignUp.inputedText);
		const newlyCreatedCustomer = yield select((state) => state.logInOrSignUp.newlyCreatedCustomer);

		if (
			insertedFields.email &&
			insertedFields.password
		) {
			if (
					insertedFields.email === newlyCreatedCustomer.email &&
					insertedFields.password === newlyCreatedCustomer.password
				) {
				yield put(actions.logInSuccessActions(insertedFields));
			} else {
				yield put(actions.logInFailedActions("Enter correct email or password"));
			}
		} else {
			yield put(actions.logInFailedActions("Enter all required Fileds"));
		}
	} catch (e) {
		yield put(actions.logInFailedActions("Error"));
	}
}

function* saga() {
	yield takeLatest(signUp, signUpAction);
	yield takeLatest(logIn, logInAction);
}

export default saga;