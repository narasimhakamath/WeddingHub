import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from 'lottie-react-native';
import { Button, Text } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native';

import { INTRODUCTION_ANIMATION } from "../assets/assets";

const theme = require("../theme");

const IntroductionScreen = () => {
	const navigation = useNavigation();

	return(
		<View style={theme.screen}>
			<LottieView
				autoPlay={true}
				source={INTRODUCTION_ANIMATION}
				style={theme.lottieContainer}
			/>
			<Text style={styles.tagline}>Elevate your wedding experience with Wedding Hub</Text>
			<Button
				title="Proceed"
				buttonStyle={theme.primaryButton}
				onPress={() => navigation.replace('Login')}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	tagline: {
		textAlign: 'center',
		marginVertical: 20,
		fontSize: 16
	},
});

export default IntroductionScreen;