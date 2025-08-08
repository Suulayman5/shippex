import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text } from "react-native";

import Shipments from "./../(dashboard)/index";
import {shipmentsIcon, walletIcon, scanIcon, profileIcon} from "@/assets/images/image-exports";

import { isEmpty, isNil } from "lodash";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const DisabledScreen = () => null;

  return (
    <Tab.Navigator
    // screenOptions={{ headerShown: false }}
      screenOptions={({ route }) => ({
        headerShown: false,
        // tabBarShowLabel: false,        
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "400",
        },
        tabBarStyle: {
          height: 80,
          paddingBottom: 16,
          paddingTop: 6,
        },
        tabBarIcon: ({ focused }) => {
          let icon;
          let title;
          switch (route.name) {
            case "Shipments":
              icon = shipmentsIcon;
              title ='Shipments'
              break;
            case "Scan":
              icon = scanIcon;
              title ='Scan'
              break;
            case "Wallet":
              icon = walletIcon;
              title ='Wallet'
              break;
            case "Profile":
              icon = profileIcon;
              title ='Profile'
              break;
          }

          return (
            <>
                <Image
                source={icon}
                style={{
                    width: 24,
                    height: 24,
                    marginTop: 10,
                    tintColor: focused ? "#2F50C1" : "#B4B4B4",
                }}
                resizeMode="contain"
                />
            </>
          );
        },
        tabBarActiveTintColor: "#2F50C1",
        tabBarInactiveTintColor: "#B4B4B4",
      })}
    >
<Tab.Screen name="Shipments" component={Shipments} />
<Tab.Screen
  name="Scan"
  component={DisabledScreen}
  listeners={{ tabPress: (e) => e.preventDefault() }}
/>
<Tab.Screen
  name="Wallet"
  component={DisabledScreen}
  listeners={{ tabPress: (e) => e.preventDefault() }}
/>
<Tab.Screen
  name="Profile"
  component={DisabledScreen}
  listeners={{ tabPress: (e) => e.preventDefault() }}
/>
    </Tab.Navigator>
  );
};

export default BottomTabs;
