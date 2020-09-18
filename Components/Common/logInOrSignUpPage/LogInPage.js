import React, { Component } from "react";
import AppTextInput from '../appTextInput';
import AppBoutton from '../appBoutton';

export default class LogInPage extends Component {
	render() {
		return (
			<>
				<AppTextInput name="email" placeholder="Enter Your Email ID" keyboardType="email-address"/>
				<AppTextInput name="password" placeholder="Enter Your Password" secureTextEntry={true}/>
				<AppBoutton text="Log In"/>
			</>
		);
	}
}