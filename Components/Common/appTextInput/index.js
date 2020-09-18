import React, { Component } from "react";
import { TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import { colorTheme, otherColorTheme } from "../../../constants";
import { connect } from "react-redux";
import actions from '../../../actions';

class AppTextInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputText: "",
		}
	}

	setTextInput = (name, changedText) => {
		this.setState({
			inputText: changedText,
		});
		this.props.onChangeTextInputActions({name, changedText});
	}

	render() {
		const { inputedText, isVerifiedPassword, name } = this.props;
		let password = "";
		inputedText.map((text) => {
			if(text.password) {
				password = text.password;
			}
		})
		return (
			<View style={styles.textView}>
				<TextInput
					placeholder={this.props.placeholder || "Add placeholder"}
					placeholderTextColor={colorTheme}
					returnKeyType={this.props.returnKeyType || "next"}
					keyboardType={this.props.keyboardType || "default"}
					onChangeText={(value) => this.setTextInput(name,value)}
					style={styles.textInput}
					secureTextEntry={this.props.secureTextEntry}
					value={this.state.inputText}
				/>
				{<View style={styles.verifieIcon}>
					{isVerifiedPassword && this.state.inputText !== '' && (
						password && (this.state.inputText === password) ?
						<Icon name="check" size={20} color="#4BB543" /> :
						<Icon name="cross" size={20} color="#CA0B00" />)}
				</View>}
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	inputedText: state.logInOrSignUp.inputedText,
});

const mapDispatchToProps = (dispatch) => ({
	onChangeTextInputActions: ({name, changedText}) => dispatch(actions.onChangeTextInputActions({name, changedText})),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppTextInput);

const styles = {
	textInput: {
		borderWidth: 2,
		borderColor: "rgba(158, 150, 150, .5)",
		borderRadius: 30,
		backgroundColor: otherColorTheme,
		paddingLeft: 20,
		paddingRight: 55,
		color: colorTheme,
	},
	textView: {
		width: "80%",
		marginTop: "2%",
		marginBottom: "2%",
	},
	verifieIcon: {
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
		right: 9,
		top: 6,
		width: 40,
		height: 40,
		borderRadius: 100/2,
		backgroundColor: "#fff",
	},
};
