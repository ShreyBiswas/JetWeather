import { Text, View, Image } from "react-native";
import {
    NeuOutsetSquare,
    NeuInsetSquare,
} from "@/components/NeuComponents/NeuSquare";
import {
    NeuButtonToggle,
    NeuButtonSelector,
    NeuButtonTemporary,
} from "@/components/NeuComponents/NeuButton";

//* This is a screen to test the neumorphic components
// Use the below as examples for implementing any of them.

export default function NeuromorphicScreen() {
    return (
        <View className="flex-1 items-center justify-center">
            {/* centres the box for viewing */}
            <NeuOutsetSquare
                height={100}
                width={100}
                borderRadius={20}
                lightColor="#F5F5FA"
                buttonTypeString="Unpressed"
                styling={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text className="text-l">Outset Square</Text>
                <Image
                    source={require("../../assets/images/map.png")}
                    className="h-5 w-5"
                />
            </NeuOutsetSquare>

            <NeuInsetSquare
                height={100}
                width={100}
                borderRadius={20}
                lightColor="#F5F5FA"
                buttonTypeString="Unpressed"
                styling={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text className="text-l">Inset Square</Text>
                <Image
                    source={require("../../assets/images/map.png")}
                    className="h-5 w-5"
                />
            </NeuInsetSquare>

            <NeuButtonToggle
                height={100}
                width={100}
                borderRadius={20}
                lightColor="#F5F5FA"
                styling={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
                pressResponse={(buttonState: string) =>
                    console.log("Button Press " + buttonState)
                }
            >
                <Text className="text-l">Permanent</Text>
                <Image
                    source={require("../../assets/images/map.png")}
                    className="h-5 w-5"
                />
            </NeuButtonToggle>
            <NeuButtonTemporary
                height={100}
                width={100}
                borderRadius={20}
                lightColor="#F5F5FA"
                styling={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
                pressResponse={() =>
                    console.log("Temporary Button Pressed and Released")
                }
            >
                <Text className="text-l">Temporary</Text>
                <Image
                    source={require("../../assets/images/map.png")}
                    className="h-5 w-5"
                />
            </NeuButtonTemporary>

            <NeuButtonSelector
                nItems={3}
                labels={["One", "Two", "Three"]}
                defaultSelected={1}
                styling={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: 50,
                    width: "90%",
                }}
                pressedColour="#D5D5F0"
                pressResponse={(buttonIndex: number) =>
                    console.log("Button Pressed: " + buttonIndex)
                }
                buttonProps={{
                    height: 100,
                    width: 100,
                    borderRadius: 20,
                    lightColor: "#F5F5FA",
                    styling: {
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    },
                }}
                textStyling={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#7878AB",
                }}
            ></NeuButtonSelector>
        </View>
    );
}
