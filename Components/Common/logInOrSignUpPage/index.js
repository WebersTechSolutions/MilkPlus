import React, { Component } from 'react';
import { Image, StatusBar, SafeAreaView, ScrollView, TouchableWithoutFeedback, View, Text } from 'react-native';
import { logo, colorTheme, otherColorTheme } from '../../../constants';
import { Container, Footer } from 'native-base';
import { connect } from "react-redux";
import LogInPage from './LogInPage';
import SignUpPage from './SignUpPage';

class logInOrSignUpPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isNewUser: false,
		}
	}

	toggleUser = () => {
		this.setState({
			isNewUser: !this.state.isNewUser,
		})
	}

	render() {
		const { isNewUser } = this.state;
		return (
			<>
				<StatusBar translucent barStyle="light-content" backgroundColor={colorTheme} {...this.props} />
				<SafeAreaView>
					<ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
						<Container style={styles.logInPageContainer}>
							<Image source={logo} style={styles.logo} />
							<View style={styles.logInPageView}>
								{isNewUser ? <SignUpPage {...this.props} /> : <LogInPage {...this.props} />}
							</View>
						</Container>
						<Footer style={styles.footerView}>
							<Text style={styles.footerText}>
								{!isNewUser ?
								"Don't have Account ?":
								"Already have an Account ?"}{" "}
							</Text>
							<TouchableWithoutFeedback onPress={() => {
									this.props.clearTextInputActions();
									this.toggleUser();
								}}>
								<Text style={styles.footerLatText}>
									{!isNewUser ?
									"Create One":
									"Log In"}
								</Text>
							</TouchableWithoutFeedback>
						</Footer>
					</ScrollView>
				</SafeAreaView>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
	clearTextInputActions: () => dispatch(actions.clearTextInputActions()),
})

export default connect(mapStateToProps, mapDispatchToProps)(logInOrSignUpPage);

const styles = {
	logInPageContainer: {
		backgroundColor: colorTheme,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
	},
	logInPageView: {
		backgroundColor: colorTheme,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		paddingBottom: "8%",
	},
	scrollView: {
		backgroundColor: colorTheme,
		height: "100%",
		width: "100%",
	},
	logo: {
		width: 280,
		height: 280,
		resizeMode: 'contain',
	},
	footerView: {
		width: "100%",
		backgroundColor: "none",
	},
	footerText: {
		fontSize: 15,
		color: otherColorTheme,
	},
	footerLatText: {
		fontSize: 15,
		color: otherColorTheme,
		textDecorationLine: 'underline',
	},
};
