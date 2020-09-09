import React, { Component } from "react";
import { TouchableHighlight, Text } from "react-native";
import { colorTheme, otherColorTheme } from "../../../constants";

export default class AppBoutton extends Component {

	render() {
		return (
			<TouchableHighlight style={styles.logInBoutton} >
				<Text style={styles.logInBouttonText}>{this.props.text || "Add text"}</Text>
			</TouchableHighlight>
		);
	}
}

const styles = {
	logInBoutton: {
		marginTop: "4%",
		paddingTop: 10,
		paddingBottom: 10,
		width: "30%",
		borderRadius: 30,
		backgroundColor: otherColorTheme,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		
		elevation: 15,
	},
	logInBouttonText: {
		fontSize: 15,
		fontWeight: "bold",
		color: colorTheme,
	},
};
