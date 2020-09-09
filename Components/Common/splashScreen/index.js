import React, { Component } from "react";
import { Image, Text, StatusBar, SafeAreaView, ScrollView  } from "react-native";
import { logo, companyName, colorTheme, copyrights, yearOfCopyrights } from "../../../constants";
import { Footer, Container } from 'native-base';

export default class SplashScreen extends Component {
	constructor(props) {
		super(props);
		setTimeout(() => {
			this.props.navigation.replace("logInOrSignUpPage");
		}, 1000);
	}

	render() {
		return (
			<>
				<StatusBar translucent barStyle="light-content" backgroundColor={colorTheme} {...this.props} />
				<SafeAreaView>
					<ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
						<Container style={styles.splashScreenView}>
							<Image source={logo} style={styles.logo} />
						</Container>
						<Footer style={styles.footerView}>
							<Text style={styles.bottom}>
								{"\u00A9"}{" "}
								{copyrights}{" "}
								{companyName}{" "}
								{yearOfCopyrights}
							</Text>
						</Footer>
					</ScrollView>
				</SafeAreaView>
			</>
		);
	}
}

const styles = {
	splashScreenView: {
		backgroundColor: colorTheme,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
	scrollView: {
		backgroundColor: colorTheme,
		height: "100%",
		width: "100%",
	},
	bottom: {
		justifyContent: "center",
		alignItems: "center",
		color: "#fff",
		fontSize: 15,
	},
	footerView: {
		width: "100%",
		backgroundColor: "none",
		marginTop: -30,
	},
	logo: {
		width: 280,
		height: 280,
		resizeMode: 'contain',
	},
};
