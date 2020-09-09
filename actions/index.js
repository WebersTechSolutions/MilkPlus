export const onChangeTextInput = "On_Change_Text_Input";

export default actions = {
	onChangeTextInputActions: ({name, changedText}) => ({type: onChangeTextInput, name, changedText}),
}