import { JSXElementConstructor, useState } from "react";
import { TouchableWithoutFeedback, Text, Image, View } from "react-native";
import { NeuOutsetSquare, NeuSquareProps } from "./NeuSquare";
import { NeuButtonTemporary, type NeuButtonProps } from "./NeuButton";

import { useNavigation } from "@react-navigation/native";

type NeuSwitchingButtonProps = Omit<NeuButtonProps, "pressResponse"> & {
    destinationScreen: string;
    destinationCity: string;
};

export default function NeuSwitchingButton({
    // NOTE: Runs pressResponse on release
    height,
    width,
    borderRadius,
    lightColor,
    children,
    styling,
    destinationScreen,
    destinationCity,
}: NeuSwitchingButtonProps) {
    let navigation = useNavigation();

    const handlePressRelease = (params: any) => {
        console.log(
            "Button Pressed, switching to " + destinationScreen + " screen",
        );

        //@ts-ignore
        navigation.navigate(destinationScreen, params);
    };

    return (
        <NeuButtonTemporary
            height={height}
            width={width}
            borderRadius={borderRadius}
            lightColor={lightColor}
            styling={styling}
            pressResponse={() => handlePressRelease({ city: destinationCity })}
            
        >
            {children}
        </NeuButtonTemporary>
    );
}

export { NeuSwitchingButton };
