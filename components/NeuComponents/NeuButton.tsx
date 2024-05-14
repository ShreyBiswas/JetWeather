import { JSXElementConstructor, useState } from "react";
import { TouchableWithoutFeedback, Text, Image, View } from "react-native";
import { NeuOutsetSquare, NeuSquareProps } from "./NeuSquare";

export function NeuButtonPermanent({
    height,
    width,
    borderRadius,
    lightColor,
    children,
    styling,
}: NeuSquareProps) {
    const [buttonType, setButtonType] = useState("Unpressed");

    const handlePress = () => {
        console.log("Button Pressed");
        setButtonType("Pressed");
    };

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
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

export function NeuButtonTemporary({
    height,
    width,
    borderRadius,
    lightColor,
    children,
    styling,
}: NeuSquareProps) {
    const [buttonType, setButtonType] = useState("Unpressed");

    const handlePress = () => {
        console.log("Button Pressed");
        setButtonType("Pressed");
    };

    const handleRelease = () => {
        console.log("Button Released");
        setButtonType("Unpressed");
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

type NeuButtonSelectorProps = {
    nItems: number;
    labels: string[];
    defaultSelected: number;
    styling: any;
    pressedColour: string;
    buttonProps: NeuSquareProps;
    textStyling: any;
};

export function NeuButtonSelector({
    nItems,
    labels,
    defaultSelected,
    styling,
    pressedColour,

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
    };

    let elements = [];
    for (let i = 0; i < nItems; i++) {
        elements.push(
            <TouchableWithoutFeedback onPress={() => handlePress(i)}>
                <View>
                    <NeuOutsetSquare
                        height={buttonProps.height}
                        width={buttonProps.width}
                        borderRadius={buttonProps.borderRadius}
                        lightColor={buttonColour[i]}
                        buttonTypeString={buttonType[i]}
                        styling={buttonProps.styling}
                        key={i}
                    >
                        <Text style={textStyling}>{labels[i]}</Text>
                    </NeuOutsetSquare>
                </View>
            </TouchableWithoutFeedback>,
        );
    }

    return <View style={styling}>{elements}</View>;
}