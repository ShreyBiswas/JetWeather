import { View, Text, type ViewProps } from "react-native";
import Neumorphic, {
    NeumorphConfigShapes,
} from "../neumorphicComponents/Neumorphic";
import { useThemeColor } from "@/hooks/useThemeColor";

// USAGE:
// <NeuSquare
//      height={100}
//      width={100}
//      lightColor="#F5F5FA"
//      darkColor="#F4F4FA"
//      borderRadius={20}
//      buttonTypeString="Unpressed" // or Flat or Pressed
// >
//      <Text className="text-black-500 text-xl font-bold">asdfg</Text> // embed any other component
// </NeuSquare>

//TODO: May need to create custom function apart from RegularNeumorphic for each type of box & positioning within
// At least one for the grid view, one for the buttons

export type NeuSquareProps = ViewProps & {
    height?: number;
    width?: number;
    borderRadius?: number;
    lightColor?: string;
    darkColor?: string;
    children?: any;
};

export type NeuProps = NeuSquareProps & {
    buttonTypeString: string;
    children: any;
};

export type ButtonType =
    | "Flat"
    | "Unpressed"
    | "Pressed"
    | "Convex"
    | "Concave";

let RegularNeumorphic = (
    {
        height,
        width,
        borderRadius,
        lightColor,
        darkColor = "#F5F5FA",
        children,
        ...otherProps
    }: NeuSquareProps,
    config?: any,
) => {
    let backgroundColour = useThemeColor(
        { light: lightColor, dark: darkColor },
        "background",
    );

    console.log(children);

    let baseComponent = ({}) => {
        return (
            <View
                style={[
                    {
                        height: height,
                        width: width,
                        backgroundColor: backgroundColour,
                        borderRadius: borderRadius,
                    },
                    otherProps,
                ]}
            >
                {children}
            </View>
        );
    };

    return Neumorphic(baseComponent, config);
};

export function NeuSquare({
    height,
    width,
    borderRadius,
    lightColor,
    darkColor,
    buttonTypeString,
    children,
    ...otherProps
}: NeuProps) {
    let buttonType: NeumorphConfigShapes = NeumorphConfigShapes.Flat;

    switch (buttonTypeString.toUpperCase()) {
        case "FLAT":
            buttonType = NeumorphConfigShapes.Flat;
            break;
        case "UNPRESSED":
        case "CONCAVE":
            buttonType = NeumorphConfigShapes.Convex;
            break;
        case "PRESSED":
        case "CONVEX":
            buttonType = NeumorphConfigShapes.Concave;
            break;
        default:
            console.log("Unrecognised");
            buttonType = NeumorphConfigShapes.Flat;
            break;
    }

    let NeuConfig = {
        distance: 50,
        intensity: 0.15,
        blur: 50,
        shape: buttonType,
    };

    let NeumorphicBox = RegularNeumorphic(
        {
            height,
            width,
            borderRadius,
            lightColor,
            darkColor,
            children,
        },
        NeuConfig,
    );

    return (
        <View {...otherProps} className="">
            <NeumorphicBox></NeumorphicBox>
        </View>
    );
}
