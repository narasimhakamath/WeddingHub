import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const VendorCategory = (props) => {
	console.log("props", props);
	return(
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
					source={{uri: props.imageURL}}
					style={styles.image}
				/>
			</View>
			<Text style={styles.label}>{props.name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: 'red',
		paddingTop: 20,
		paddingHorizontal: 20
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 50
	},
	label: {
		textAlign: 'center',
		paddingTop: 10,
		fontWeight: 'bold'
	}
});

export default VendorCategory;