import React from "react";

import { TouchableOpacity } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { useNavigation } from "@react-navigation/native";
import { TabBarIcon } from "./TabBarIcon";

import { type IconProps } from "@/types/IconProps";

export default function SwitchingButton({
    iconName,
    destinationScreen,
    ...otherProps
}: IconProps) {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate(destinationScreen);
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <TabBarIcon name={iconName} color={"#737373"} />
        </TouchableOpacity>
    );
}
