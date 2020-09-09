import {
	onChangeTextInput,
} from '../actions';

const initState = {
	inputedText: [],
}

export default (state = {...initState}, action) => {
	const { type } = action;

	switch (type) {
		case onChangeTextInput:
			const { name, changedText } = action;
			let obj = {};
			obj[name] = changedText;
			const newInputedText = [...state.inputedText];
			if (newInputedText.length) {
				newInputedText.forEach(newInputedTextOne => {
					if(!newInputedTextOne[name]) {
						newInputedText.push(obj);
					} else {
						newInputedText.pop();
						newInputedText.push(obj);
					}
				})
			} else {
				newInputedText.push(obj);
			}
		return {
			...state,
			inputedText: newInputedText,
		};
		default:
			return state;
    }
}