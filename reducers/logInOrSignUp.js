import {
	onChangeTextInput,
	signUp,
	signUpSuccess,
	signUpFailed,
	logIn,
	logInSuccess,
	logInFailed,
	clearTextInput,
} from '../actions';

const initState = {
	inputedText: {},
	newlyCreatedCustomer: {},
	loggedInCustomer: {},
	isLoadding: false,
	isCustomerCreated: false,
	isCustomerLogedIn: false,
	error: "",
}

export default (state = {...initState}, action) => {
	const { type } = action;

	switch (type) {
		case onChangeTextInput:
			const { name, changedText } = action;
			let obj = {};
			obj[name] = changedText;
			const newInputedText = {
				...state.inputedText,
				...obj,
			};
			return {
				...state,
				inputedText: newInputedText,
			};

		case clearTextInput:
			return {
				...state,
				error: "",
				inputedText: {},
			}

		case signUp:
			return {
				...state,
				isLoadding: true,
			};

		case signUpSuccess:
			return {
				...state,
				isLoadding: false,
				isCustomerCreated: true,
				newlyCreatedCustomer: action.insertedFields,
			};

		case signUpFailed:
			return {
				...state,
				isLoadding: false,
				error: action.error,
			};

		case logIn:
			return {
				...state,
				isLoadding: true,
			};
	
		case logInSuccess:
			return {
				...state,
				isLoadding: false,
				isCustomerLogedIn: true,
				loggedInCustomer: action.insertedFields,
			};
	
		case logInFailed:
			return {
				...state,
				isLoadding: false,
				error: action.error,
			};

		default:
			return state;
	}
}