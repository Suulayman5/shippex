// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Image, Text } from "react-native";

// // Screens (replace with your actual screens)
// import Shipments from "./../(dashboard)/index";
// // import Scan from "../screens/Scan";
// // import Wallet from "../screens/Wallet";
// // import Profile from "../screens/Profile";

// // Assets (replace with actual paths)
// // import shipmentsIcon from "../assets/images/boxes-icon.png";
// import shipmentsIcon from "../../assets/images/boxes-icon.png"
// import scanIcon from "../../assets/images/barcode-scan-icon.png";
// import walletIcon from "../../assets/images/wallet-icon.png";
// import profileIcon from "../../assets/images/avatar-icon.png";
// import { isEmpty } from "lodash";

// const Tab = createBottomTabNavigator();

// const BottomTabs = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarShowLabel: true,
//         tabBarLabelStyle: {
//           fontSize: 12,
//           fontWeight: "500",
//         },
//         tabBarStyle: {
//           height: 70,
//           paddingBottom: 10,
//           paddingTop: 6,
//         },
//         tabBarIcon: ({ focused }) => {
//           let icon;
//           switch (route.name) {
//             case "Shipments":
//               icon = shipmentsIcon;
//               break;
//             case "Scan":
//               icon = scanIcon;
//               break;
//             case "Wallet":
//               icon = walletIcon;
//               break;
//             case "Profile":
//               icon = profileIcon;
//               break;
//           }

//           return (
//             <Image
//               source={icon}
//               style={{
//                 width: 24,
//                 height: 24,
//                 tintColor: focused ? "#2F50C1" : "#B4B4B4",
//               }}
//               resizeMode="contain"
//             />
//           );
//         },
//         tabBarActiveTintColor: "#2F50C1",
//         tabBarInactiveTintColor: "#B4B4B4",
//       })}
//     >
//       <Tab.Screen name="Shipments" component={Shipments} />
//       <Tab.Screen name="Scan" component={isEmpty} />
//       <Tab.Screen name="Wallet" component={isEmpty} />
//       <Tab.Screen name="Profile" component={isEmpty} />
//     </Tab.Navigator>
//   );
// };

// export default BottomTabs;
