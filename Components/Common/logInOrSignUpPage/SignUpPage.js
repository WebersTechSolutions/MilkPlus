import React, { Component } from "react";
import AppTextInput from '../appTextInput';
import AppBoutton from '../appBoutton';

export default class SignUpPage extends Component {
	render() {
		return (
			<>
				<AppTextInput name="name" placeholder="Enter Your Name" />
				<AppTextInput name="mobileNumber" placeholder="Enter Your Mobile Number" keyboardType="number-pad"/>
				<AppTextInput name="email" placeholder="Enter Your Email ID" keyboardType="email-address"/>
				<AppTextInput name="password" placeholder="Enter Password" secureTextEntry={true}/>
				<AppTextInput name="verifyPassword" placeholder="Verify Password" secureTextEntry={true} isVerifiedPassword={true}/>
				<AppBoutton text="Sign Up"/>
			</>
		);
	}
}
