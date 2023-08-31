import { Text } from "@rneui/themed";
import React from "react";

import VendorCategories from "../components/VendorCategories";
import { View } from "react-native";

const theme = require("../theme");

const HomeScreen = () => {
	return(
		<View style={[theme.screen, {justifyContent: 'flex-start'}]}>
			<VendorCategories/>
		</View>
	);
};

export default HomeScreen;