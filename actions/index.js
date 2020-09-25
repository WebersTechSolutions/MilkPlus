export const onChangeTextInput = "On_Change_Text_Input";
export const clearTextInput = "clear_Text_Input";


export const signUp = "Sign_Up_Action";
export const signUpSuccess = "Sign_Up_Action_Success";
export const signUpFailed = "Sign_Up_Action_Failed";


export const logIn = "Log_In_Action";
export const logInSuccess = "Log_In_Action_Success";
export const logInFailed = "Log_In_Action_Failed";



export default actions = {
	onChangeTextInputActions: ({name, changedText}) => ({type: onChangeTextInput, name, changedText}),
	clearTextInputActions: () => ({type: clearTextInput}),

	signUpActions: () => ({type: signUp}),
	signUpSuccessActions: (insertedFields) => ({type: signUpSuccess, insertedFields}),
	signUpFailedActions: (error) => ({type: signUpFailed, error}),

	logInActions: () => ({type: logIn}),
	logInSuccessActions: (insertedFields) => ({type: logInSuccess, insertedFields}),
	logInFailedActions: (error) => ({type: logInFailed, error}),
}