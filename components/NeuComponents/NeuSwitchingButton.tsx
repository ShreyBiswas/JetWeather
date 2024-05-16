import { JSXElementConstructor, useState } from "react";
import { TouchableWithoutFeedback, Text, Image, View } from "react-native";
import { NeuOutsetSquare, NeuSquareProps } from "./NeuSquare";
import { NeuButtonTemporary, type NeuButtonProps } from "./NeuButton";

export function NeuSwitchingButton({
    // NOTE: Runs pressResponse on release
    height,
    width,
    borderRadius,
    lightColor,
    children,
    styling,
    pressResponse,
}: NeuButtonProps) {
    const [buttonType, setButtonType] = useState("Unpressed");

    const handlePress = () => {
        console.log("Button Pressed");
        setButtonType("Pressed");
    };

    const handleRelease = () => {
        console.log("Button Released");
        setButtonType("Unpressed");
        pressResponse();
    };

    return (
        <TouchableWithoutFeedback
            onPressIn={handlePress}
            onPressOut={handleRelease}
        >
            <View>
                <NeuOutsetSquare
                    height={height}
                    width={width}
                    borderRadius={borderRadius}
                    lightColor={lightColor}
                    buttonTypeString={buttonType}
                    styling={styling}
                >
                    {children}
                </NeuOutsetSquare>
            </View>
        </TouchableWithoutFeedback>
    );
}