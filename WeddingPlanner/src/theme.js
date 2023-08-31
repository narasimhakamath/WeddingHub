import { StyleSheet } from "react-native";

const primaryColour = '#000000';
const backdropColour = '#ECF0F1';

module.exports = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: backdropColour,
	},
	lottieContainer: {
		width: '100%',
	},
	primaryButton: {
		backgroundColor: primaryColour,
		width: 350,
		alignSelf: 'center',
		paddingVertical: 12,
		borderRadius: 10,
	}
});