import { View, Text, type ViewProps } from "react-native";
import Neumorphic, {
    NeumorphConfigShapes,
} from "../../neumorphicLibrary/Neumorphic";
import { useThemeColor } from "@/hooks/useThemeColor";

// USAGE:
// <NeuSquare
//      height={100}
//      width={100}
//      lightColor="#F5F5FA"
//      darkColor="#F4F4FA"
//      borderRadius={20}
//      buttonTypeString="Unpressed" // or Flat or Pressed
//      styling={{ // align components within the box
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//      }}
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
    children?: any;
    styling?: any;
};

export type NeuProps = NeuSquareProps & {
    buttonTypeString: string;
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
        lightColor = "#F5F5FA",
        children,
        styling,
    }: NeuSquareProps,
    config?: any,
) => {
    let backgroundColour = useThemeColor(
        { light: lightColor, dark: "#F8F8FF" },
        "background",
    );

    let baseComponent = ({}) => {
        return (
            <View
                style={{
                    height: height,
                    width: width,
                    backgroundColor: backgroundColour,
                    borderRadius: borderRadius,
                    ...styling,
                }}
                className="height:${height} flex-1 items-center justify-center p-2"
            >
                {children}
            </View>
        );
    };

    return Neumorphic(baseComponent, config);
};

export function NeuOutsetSquare({
    height,
    width,
    borderRadius,
    lightColor,

    buttonTypeString,
    children,
    styling,
}: NeuProps) {
    let buttonType: NeumorphConfigShapes = NeumorphConfigShapes.Flat;

    switch (buttonTypeString.toUpperCase()) {
        case "FLAT":
            buttonType = NeumorphConfigShapes.Flat;
            break;
        case "UNPRESSED":
        case "CONCAVE":
            buttonType = NeumorphConfigShapes.Concave;
            break;
        case "PRESSED":
        case "CONVEX":
            buttonType = NeumorphConfigShapes.Convex;
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
            children,
            styling,
        },
        NeuConfig,
    );

    return (
        <View className="">
            <NeumorphicBox></NeumorphicBox>
        </View>
    );
}

export function NeuInsetSquare({
    height,
    width,
    borderRadius,
    lightColor,
    buttonTypeString,
    children,
    styling,
}: NeuProps) {
    let buttonType: NeumorphConfigShapes = NeumorphConfigShapes.Flat;

    switch (buttonTypeString.toUpperCase()) {
        case "FLAT":
            buttonType = NeumorphConfigShapes.Flat;
            break;
        case "UNPRESSED":
        case "CONCAVE":
            buttonType = NeumorphConfigShapes.Concave;
            break;
        case "PRESSED":
        case "CONVEX":
            buttonType = NeumorphConfigShapes.Convex;
            break;
        default:
            console.log("Unrecognised");
            buttonType = NeumorphConfigShapes.Flat;
            break;
    }

    buttonType = NeumorphConfigShapes.Pressed;

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
            children,
            styling,
        },
        NeuConfig,
    );

    return (
        <View className="">
            <NeumorphicBox></NeumorphicBox>
        </View>
    );
}
