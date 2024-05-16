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

import { OpenWeatherHandler } from "@/scripts/OpenWeatherHandler";

//* This is a screen to test the neumorphic components
// Use the below as examples for implementing any of them.

export default function NeuromorphicScreen() {
    let OpenWeather = new OpenWeatherHandler("API_KEY_HERE");
    console.log(OpenWeather.getWeatherByCity("London"));

    console.log;

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
        </View>
    );
}
