import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../assets/HomeScreen";

const Stack = createStackNavigator();

const HomeNavigator = () => {
	return(
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
			/>
		</Stack.Navigator>
	);
};

export default HomeNavigator;