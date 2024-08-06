import { View, Text, Image, ImageSourcePropType } from "react-native";
import { Tabs, Redirect } from "expo-router";
import React from "react";
import icons from "../../constants/icons";

interface TabIconProps {
  icon: ImageSourcePropType;
  name: string;
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ icon, name, focused }) => {
  return (
    // Changing the opacity of the unfocused icons

    <View
      className={`items-center justify-center gap-2 mt-4 ${!focused ? "opacity-50" : ""}`}
    >
      <Image source={icon} resizeMode="contain" className="w-10 h-10" />
      <Text
        className={`${focused ? "font-clashsemibold" : "font-clashregular"} text-xs`}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 100,
            borderTopWidth: 2,
            borderTopColor: "#D8D6FF",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.home} name="Home" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="play"
          options={{
            title: "play",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.play} name="Play" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="rewards"
          options={{
            title: "rewards",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.rewards} name="Rewards" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="friends"
          options={{
            title: "friends",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.friends} name="Friends" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="leaderboard"
          options={{
            title: "leaderboard",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.leaderboard}
                name="Leaderboard"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
