import React, { useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import LottieView from 'lottie-react-native';
import { Button, Input, Text } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native';


import { LOGIN_ANIMATION } from "../assets/assets";

const theme = require("../theme");

const LoginScreen = () => {
	const navigation = useNavigation();
	const [enteredPhoneNumber, setEnteredPhoneNumber] = useState('');

	const isSendOTPDisabled = () => enteredPhoneNumber.length !== 10;

	return(
		<View style={[theme.screen, {justifyContent: 'flex-start'}]}>
			<View style={styles.animationContainer}>
				<LottieView
					autoPlay={true}
					source={LOGIN_ANIMATION}
					style={theme.lottieContainer}
				/>
			</View>

			<View style={styles.textContainer}>
				<Text h3>Enter your phone number</Text>
				<Text>We will send you a 6 digit verification code</Text>
			</View>

			<View style={styles.phoneNumberContainer}>
				<Input
					placeholder="8848519709"
					onChangeText={setEnteredPhoneNumber}
					maxLength={10}
					keyboardType="number-pad"
					label="Phone Number"
				/>
			</View>

			<Button
				title="Send OTP"
				buttonStyle={theme.primaryButton}
				disabled={isSendOTPDisabled()}
				onPress={() => navigation.navigate('Verification')}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	animationContainer: {
		marginTop: 50
	},
	phoneNumberContainer: {
		marginVertical: 20,
		width: 350,
		alignSelf: 'center'
	},
	textContainer: {
		marginTop: 25,
		alignSelf: 'center'
	}
});

export default LoginScreen;