import { View, Text, type ViewProps } from "react-native";
import Neumorphic, {
    NeumorphConfigShapes,
} from "../neumorphicComponents/Neumorphic";
import { useThemeColor } from "@/hooks/useThemeColor";

import { LinearGradient } from "expo-linear-gradient"; //! REMOVE

export type NeuSquareProps = ViewProps & {
    height?: number;
    width?: number;
    lightColor?: string;
    darkColor?: string;
};

let RegularNeumorphic = (component: any, config?: any) => {
    let reactComponent = ({}) => {
        return (
            <View
                style={{
                    height: 200,
                    width: 100,
                    backgroundColor: "#FFFFFF",
                }}
            ></View>
        );
    };

    return Neumorphic(reactComponent, config);
};

export function NeuSquare({
    height,
    width,
    lightColor,
    darkColor,
    ...otherProps
}: NeuSquareProps) {
    // const backgroundColour = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    let NeuConfig = {
        distance: 50,
        intensity: 0.15,
        blur: 60,
        shape: NeumorphConfigShapes.Flat,
    };

    let NeumorphicBox = RegularNeumorphic({}, NeuConfig);

    console.log(NeumorphicBox());

    return (
        <View {...otherProps}>
            <View
                style={[
                    {
                        elevation: 24,
                        shadowColor: "#d9d9d9",
                        shadowOffset: { width: 0, height: 0 }, //! FAKE DATA
                        shadowOpacity: 1,
                    },
                    {
                        height: 200,
                        width: 100,
                        // borderColor: "#FF0000",
                        // borderWidth: 1,
                        backgroundColor: "#0000",
                    },
                ]}
            >
                <View
                    style={{
                        elevation: 24,
                        shadowColor: "#ffffff",
                        shadowOffset: { width: 50, height: 50 }, //! FAKE DATA
                        shadowOpacity: 1,
                        shadowRadius: 60,
                        height: 200,
                        // borderColor: "#00FF00",
                        // borderWidth: 1,
                        backgroundColor: "#0000",
                    }}
                >
                    <LinearGradient
                        start={{ x: -0.707, y: 0.707 }}
                        end={{ x: 0.707, y: -0.707 }}
                        colors={["#ffffff", "#d9d9d9"]}
                        style={{
                            height: 200,
                            // borderColor: "#0000FF",
                            // borderWidth: 1,
                            backgroundColor: "#0000",
                        }}
                    />
                </View>
            </View>
            <Text>asd</Text>
            <NeumorphicBox />
        </View>
    );
}
