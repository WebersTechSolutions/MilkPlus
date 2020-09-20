import React, { Component } from "react";
import { connect } from "react-redux";
import { TouchableHighlight, ActivityIndicator, Text } from "react-native";
import { colorTheme, otherColorTheme } from "../../../constants";

class AppBoutton extends Component {

	render() {
		const { isLoadding, onPress } = this.props;
		return (
			<TouchableHighlight style={styles.logInBoutton} onPress={() => {
					window.location && window.location.reload(true);
					onPress && onPress();
				}} >
				{
					isLoadding ?
					<ActivityIndicator color={colorTheme} /> :
					<Text style={styles.logInBouttonText}>{this.props.text || "Add text"}</Text>
				}
			</TouchableHighlight>
		);
	}
}

const mapStateToProps = (state) => ({
	isLoadding: state.logInOrSignUp.isLoadding,
});

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(AppBoutton);


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
