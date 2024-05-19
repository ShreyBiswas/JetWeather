import { Text, View, Image } from "react-native";

import { useEffect, useState } from "react";
import { useFocusEffect } from "expo-router";

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
    let [rerender, setRerender] = useState(false); // call setRerender(!rerender) to force a rerender
    let [connected, setConnected] = useState(false);

    let OpenWeather: OpenWeatherHandler;

    //* Initially Load & Connect to OpenWeather API
    useEffect(() => {
        OpenWeather = new OpenWeatherHandler(
            "fd23f4a9eec018ffc0d8db9243190913",
        );

        let cities = ["London", "Tokyo", "New York", "Sidney"];

        for (let city of cities) {
            OpenWeather.addCity(city)
                .then(() => {
                    console.log("Fetching data for " + city);
                    console.log(OpenWeather.currentWeatherData);
                })
                .then(() => {
                    setConnected(true); // rerenders the screen
                });
        }
    }, []);

    useFocusEffect(() => {
        if (!connected) {
            return;
        }

        console.log("Focus switched back, updating Weather Data...");

        OpenWeather.updateCurrentWeatherData();
        OpenWeather.updateForecast5Day();

        setRerender(!rerender);
    }); //* Update Weather Data whenever focus switches to this screen

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
                <Text className="text-l">{{}}</Text>
                <Image
                    source={require("../../assets/images/map.png")}
                    className="h-5 w-5"
                />
            </NeuOutsetSquare>
        </View>
    );
}
