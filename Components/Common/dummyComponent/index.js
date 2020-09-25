import React, { Component } from "react";
import { Image, StatusBar, SafeAreaView, ScrollView, Text } from "react-native";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { logo, colorTheme, otherColorTheme } from "../../../constants";
import { Container } from 'native-base';

export default class SplashScreen extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<StatusBar translucent barStyle="light-content" backgroundColor={colorTheme} {...this.props} />
				<SafeAreaView>
					<ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.dummyView}>
						<Container style={styles.dummyScreenView}>
							<Image source={logo} style={styles.logo} />
							<Icon name="emotsmile" size={150} color={otherColorTheme} />
							<Text style={styles.welcomText}>Welcome to MilkPlus</Text>
						</Container>
					</ScrollView>
				</SafeAreaView>
			</>
		);
	}
}

const styles = {
	dummyScreenView: {
		backgroundColor: colorTheme,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
	dummyView: {
		backgroundColor: colorTheme,
		height: "100%",
		width: "100%",
	},
	logo: {
		width: 180,
		height: 180,
		resizeMode: 'contain',
	},
	welcomText: {
		color: otherColorTheme,
		marginTop: 30,
		justifyContent: "center",
		alignItems: "center",
		fontSize: 35,
	}
};
