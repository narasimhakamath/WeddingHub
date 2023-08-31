import { Text } from "@rneui/themed";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import { FlatList } from "react-native";

import VendorCategory from "./VendorCategory";


const CATEGORIES = [
	{id: 1, title: 'Venues', imageURL: 'https://www.happywedding.app/blog/wp-content/uploads/2021/08/Choose-The-Best-Wedding-Venues.jpg'},
	{id: 2, title: 'Decorators', imageURL: 'https://www.thepackersmovers.com/blog/wp-content/uploads/2022/05/Latest-Home-Decoration-Ideas-for-Indian-Wedding.jpg'},
	{id: 3, title: 'Photographers', imageURL: 'https://media.weddingz.in/images/4321dc871ddd6bbaef194f26d6215277/10-best-wedding-photographers-for-your-south-indian-wedding.jpg'},
	{id: 4, title: 'Bridal Makeup', imageURL: 'https://www.weddingsutra.com/images/Vendor_Images/mua/mua-ashmieta/muaashmieta-07.jpg'},
	{id: 5, title: 'Mehndi', imageURL: 'https://image.wedmegood.com/resized/800X/uploads/member/18080/1629628340_IMG_20200605_WA0008_02.jpeg'},
	{id: 6, title: 'Music', imageURL: 'https://www.wfmt.com/cdn-cgi/image/width=1600,height=900,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2019/07/crop_iStock-665866478.jpg'},
	{id: 7, title: 'Food', imageURL: 'https://www.weddingsutra.com/images/Vendor_Images/Catering/gyanjee-caterers/gyanjee-caterers-10.jpg'},
];

const VendorCategories = () => {
	return(
		<>
			<FlatList
				data={CATEGORIES}
				renderItem={({item}) => <VendorCategory name={item.title} imageURL={item.imageURL} />}
				horizontal={true}
			/>
		</>
	);
};

export default VendorCategories;