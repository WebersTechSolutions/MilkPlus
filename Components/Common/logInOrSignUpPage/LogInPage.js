import React, { Component } from "react";
import AppTextInput from '../appTextInput';
import AppBoutton from '../appBoutton';
import { requiredFields } from '../../../constants';
import { connect } from "react-redux";
import actions from '../../../actions';

class LogInPage extends Component {

	render() {
		const { error, isCustomerLogedIn } = this.props;
		if (error && error !== "") {
			alert(error);
		}

		if (isCustomerLogedIn) {
			alert("Log In Success");
			// ToDo: pass the home component in the following function to reDirect home page
			// 		and also add it App.js file.
			this.props.navigation && this.props.navigation.navigate("dummy");
		}
		return (
			<>
				<AppTextInput name={requiredFields.email} placeholder="Enter Your Email ID" keyboardType="email-address"/>
				<AppTextInput name={requiredFields.password} placeholder="Enter Your Password" secureTextEntry={true}/>
				<AppBoutton text="Log In" onPress={this.props.logInActions}/>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	error: state.logInOrSignUp.error,
	isCustomerLogedIn: state.logInOrSignUp.isCustomerLogedIn,
});

const mapDispatchToProps = (dispatch) => ({
	logInActions: () => dispatch(actions.logInActions()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);