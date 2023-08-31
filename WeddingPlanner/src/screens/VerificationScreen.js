import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import LottieView from 'lottie-react-native';
import { Button, Input, Text } from "@rneui/themed";

import { VERIFICATION_ANIMATION } from "../assets/assets";

import Toast from 'react-native-root-toast';

const theme = require("../theme");

const VerificationScreen = () => {
	const [enteredOTP, setEnteredOTP] = useState('');
	console.log("enteredOTP", enteredOTP);

	const isVerificationDisabled = () => enteredOTP.length !== 6;

	const verifyOTP = () => {
		if(enteredOTP !== '123456')
			return Toast.show('Invalid OTP.', {duration: Toast.durations.LONG});

		
	};

	return(
		<View style={[theme.screen, {justifyContent: 'flex-start'}]}>
			<LottieView
				autoPlay={true}
				source={VERIFICATION_ANIMATION}
				style={theme.lottieContainer}
			/>

			<View style={styles.textContainer}>
				<Text h3>OTP verification</Text>
				<Text>Enter the OTP sent to your phone number</Text>
			</View>

			<View style={styles.passwordContainer}>
				<Input
					placeholder="OTP"
					maxLength={6}
					keyboardType="number-pad"
					textAlign="center"
					onChangeText={setEnteredOTP}
				/>
			</View>

			<Button
				title="Verify & Continue"
				buttonStyle={theme.primaryButton}
				disabled={isVerificationDisabled()}
				onPress={verifyOTP}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	passwordContainer: {
		marginVertical: 20,
		width: 200,
		alignSelf: 'center'
	},
	textContainer: {
		marginTop: 25,
		alignSelf: 'center'
	}
});

export default VerificationScreen;