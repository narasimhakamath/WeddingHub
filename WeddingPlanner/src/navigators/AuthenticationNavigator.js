import { createStackNavigator } from "@react-navigation/stack";

import IntroductionScreen from "../screens/IntroductionScreen";
import LoginScreen from "../screens/LoginScreen";
import VerificationScreen from "../screens/VerificationScreen";

const Stack = createStackNavigator();

const AuthenticationNavigator = () => {
	return(
		<Stack.Navigator>
			<Stack.Screen
				name="Introduction"
				component={IntroductionScreen}
			/>
			<Stack.Screen
				name="Login"
				component={LoginScreen}
			/>
			<Stack.Screen
				name="Verification"
				component={VerificationScreen}
			/>
		</Stack.Navigator>
	);
};

export default AuthenticationNavigator;