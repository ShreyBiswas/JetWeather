import Ionicons from "@expo/vector-icons/Ionicons";
import {
    StyleSheet,
    Image,
    Platform,
    ScrollView,
    View,
    Text,
} from "react-native";

import { NeuSwitchingButton } from "@/components/NeuComponents/NeuSwitchingButton";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import { useFocusEffect } from "expo-router";
import { useCallback, useState, useRef } from "react";
import { OpenWeatherHandler } from "@/scripts/OpenWeatherHandler";

type WeatherInfo = {
    city: string;
    temperature: string;
    condition: string;
};

// let mockWeatherData: WeatherInfo[] = [
//     { city: "New York", temperature: "9°C", condition: "Cloudy" },
//     { city: "London", temperature: "7°C", condition: "Rainy" },
//     { city: "Tokyo", temperature: "16°C", condition: "Sunny" },
//     { city: "Sydney", temperature: "22°C", condition: "Sunny" },
//     // Add more cities as needed
// ];
let preWeatherData: WeatherInfo[] = [
    { city: "New York", temperature: "Loading...", condition: "" },
    { city: "London", temperature: "Loading...", condition: "" },
    { city: "Tokyo", temperature: "Loading...", condition: "" },
    { city: "Sydney", temperature: "Loading...", condition: "" },
    // Add more cities as needed
];

export default function TabTwoScreen() {
    let [rerender, setRerender] = useState(false); // call setRerender(!rerender) to force a rerender
    let OpenWeather = useRef<OpenWeatherHandler>();

    //* Initially Load & Connect to OpenWeather API whenever focus switches to this screen
    useFocusEffect(
        useCallback(() => {
            OpenWeather.current = new OpenWeatherHandler(
                "fd23f4a9eec018ffc0d8db9243190913",
            );
            console.log("Connected to OpenWeather API");

            let cities = ["London", "New York", "Tokyo", "Sydney"];
            Promise.all(
                cities.map((city) =>
                    OpenWeather.current?.addCity(city).then(() => {
                        console.log("Fetching data for " + city);
                    }),
                ),
            ).then(() => {
                console.log("Finished fetching data for all cities");
                setRerender(!rerender);
            });
        }, []),
    );

    let weatherData: WeatherInfo[];

    if (OpenWeather.current) {
        weatherData = OpenWeather.current.getCities().map((city) => {
            let currentWeather =
                OpenWeather.current.getCurrentWeatherDataByCity(city);

            return {
                city: city,
                temperature: currentWeather?.temperature + "°C",
                condition: currentWeather?.type,
            };
        });
    } else {
        weatherData = preWeatherData;
    }

    // group 2 columns per row
    const groupedWeatherData = weatherData.reduce((acc, curr, idx) => {
        if (idx % 2 === 0) {
            acc.push([curr]);
        } else {
            acc[acc.length - 1].push(curr);
        }
        return acc;
    }, [] as WeatherInfo[][]);

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
            headerImage={
                <Image
                    source={require("@/assets/images/map.png")}
                    style={{ width: "100%", height: "100%" }}
                />
            }
        >
            <ThemedView>
                <ThemedText type="title">Cities</ThemedText>
            </ThemedView>

            <ScrollView className="p-4">
                {groupedWeatherData.map((group, idx) => (
                    <View
                        key={idx}
                        className="flex-row justify-between bg-transparent"
                    >
                        {group.map((city) => (
                            <NeuSwitchingButton
                                key={city.city}
                                height={120}
                                width={120}
                                borderRadius={20}
                                lightColor="#F5F5FA"
                                styling={{
                                    flex: 1,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: 5,
                                }}
                                destinationScreen="(tabs)/city"
                                destinationCity={city.city}
                            >
                                <Text className="text-xl font-bold">
                                    {city.city}
                                </Text>
                                <Text className="text-l">
                                    {city.temperature}
                                </Text>
                                <Text className="text-l">{city.condition}</Text>
                            </NeuSwitchingButton>
                        ))}
                    </View>
                ))}
                <NeuSwitchingButton
                    height={120}
                    width={120}
                    borderRadius={20}
                    lightColor="#F5F5FA"
                    styling={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 10,
                    }}
                    destinationScreen="(tabs)/addCity"
                >
                    <Text className="text-xl font-bold">+ Add City</Text>
                </NeuSwitchingButton>
            </ScrollView>
        </ParallaxScrollView>
    );
}
