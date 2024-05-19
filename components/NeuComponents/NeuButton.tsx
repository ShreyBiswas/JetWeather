import { JSXElementConstructor, useState } from "react";
import { TouchableWithoutFeedback, Text, Image, View } from "react-native";
import { NeuInsetSquare, NeuSquareProps } from "./NeuSquare";

export type NeuButtonProps = NeuSquareProps & { pressResponse: Function };

export function NeuButtonToggle({
    height,
    width,
    borderRadius,
    lightColor,
    children,
    styling,
    pressResponse,
}: NeuButtonProps) {
    const [buttonPressed, setButtonType] = useState(false);

    const handlePress = () => {
        console.log("Button Pressed");
        pressResponse(!buttonPressed ? "Pressed" : "Unpressed");
        setButtonType(!buttonPressed);
    };

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View>
                <NeuOutsetSquare
                    height={height}
                    width={width}
                    borderRadius={borderRadius}
                    lightColor={lightColor}
                    buttonTypeString={buttonPressed ? "Pressed" : "Unpressed"}
                    styling={styling}
                >
                    {children}
                </NeuOutsetSquare>
            </View>
        </TouchableWithoutFeedback>
    );
}

export function NeuButtonTemporary({
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
                <NeuInsetSquare
                    height={height}
                    width={width}
                    borderRadius={borderRadius}
                    lightColor={lightColor}
                    buttonTypeString={buttonType}
                    styling={styling}
                >
                    {children}
                </NeuInsetSquare>
            </View>
        </TouchableWithoutFeedback>
    );
}

type NeuButtonSelectorProps = {
    nItems: number;
    labels: string[];
    defaultSelected: number;
    styling: any;
    pressedColour: string;
    pressResponse: Function;
    buttonProps: NeuSquareProps;
    textStyling: any;
};

export function NeuButtonSelector({
    nItems,
    labels,
    defaultSelected,
    styling,
    pressedColour,
    pressResponse,
    buttonProps,
    textStyling,
}: NeuButtonSelectorProps) {
    let initialSelected = Array(nItems).fill("Flat");
    initialSelected[defaultSelected] = "Pressed";
    let initialColours = Array(nItems).fill(buttonProps.lightColor);
    initialColours[defaultSelected] = pressedColour;

    const [buttonType, setButtonType] = useState(initialSelected);
    const [buttonColour, setButtonColour] = useState(initialColours);

    const handlePress = (index: number) => {
        console.log(index + " Pressed");
        let newButtonType = Array(nItems).fill("Flat");
        newButtonType[index] = "Pressed";
        let newColours = Array(nItems).fill(buttonProps.lightColor);
        newColours[index] = pressedColour;

        setButtonType(newButtonType);
        setButtonColour(newColours);
        pressResponse(index);
    };

    let elements = [];
    for (let i = 0; i < nItems; i++) {
        elements.push(
            <TouchableWithoutFeedback onPress={() => handlePress(i)} key={i}>
                <View>
                    <NeuOutsetSquare
                        height={buttonProps.height}
                        width={buttonProps.width}
                        borderRadius={buttonProps.borderRadius}
                        lightColor={buttonColour[i]}
                        buttonTypeString={buttonType[i]}
                        styling={buttonProps.styling}
                    >
                        <Text style={textStyling}>{labels[i]}</Text>
                    </NeuOutsetSquare>
                </View>
            </TouchableWithoutFeedback>,
        );
    }

    return <View style={styling}>{elements}</View>;
}
