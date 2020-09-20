import React, { Component } from "react";
import AppTextInput from '../appTextInput';
import AppBoutton from '../appBoutton';
import { requiredFields } from '../../../constants';
import { connect } from "react-redux";
import actions from '../../../actions';

class SignUpPage extends Component {

	render() {
		const { error, isCustomerCreated } = this.props;
		if (error && error !== "") {
			alert(error);
		}
		if (isCustomerCreated) {
			alert("Customer Created Success");
		}
		return (
			<>
				<AppTextInput name={requiredFields.name} placeholder="Enter Your Name" />
				<AppTextInput name={requiredFields.mobileNumber} placeholder="Enter Your Mobile Number" keyboardType="number-pad"/>
				<AppTextInput name={requiredFields.email} placeholder="Enter Your Email ID" keyboardType="email-address"/>
				<AppTextInput name={requiredFields.password} placeholder="Enter Password" secureTextEntry={true}/>
				<AppTextInput name={requiredFields.verifyPassword} placeholder="Verify Password" secureTextEntry={true} isVerifiedPassword={true}/>
				<AppBoutton text="Sign Up" onPress={this.props.signUpActions}/>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	error : state.logInOrSignUp.error,
	isCustomerCreated: state.logInOrSignUp.isCustomerCreated,
});

const mapDispatchToProps = (dispatch) => ({
	signUpActions: () => dispatch(actions.signUpActions()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);