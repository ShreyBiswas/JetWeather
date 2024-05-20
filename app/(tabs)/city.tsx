import Ionicons from "@expo/vector-icons/Ionicons";
import {
    StyleSheet,
    Image,
    Platform,
    ScrollView,
    View,
    Text,
} from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRoute } from "@react-navigation/native";

import { OpenWeatherHandler } from "@/scripts/OpenWeatherHandler";
import { useEffect, useState, useRef, useCallback } from "react";
import { useFocusEffect } from "expo-router";
import moment from "moment";

// this is the city view, where you can see the weather for a city of interest eg London

export default function CityView() {
    const route = useRoute();
    const city = route.params.city;

    let [rerender, setRerender] = useState(false); // call setRerender(!rerender) to force a rerender
    let OpenWeather = useRef<OpenWeatherHandler>();

    //* Initially Load & Connect to OpenWeather API whenever focus switches to this screen
    useFocusEffect(
        useCallback(() => {
            OpenWeather.current = new OpenWeatherHandler(
                "fd23f4a9eec018ffc0d8db9243190913",
            );
            console.log("Connected to OpenWeather API, fetching data...");

            let cities = ["London", "New York", "Tokyo", "Sydney"];
            Promise.all(
                cities.map((city) =>
                    OpenWeather.current?.addCity(city).then(() => {}),
                ),
            ).then(() => {
                console.log("Finished fetching data for all cities");
                setRerender(!rerender);
            });
        }, []),
    );

    let forecast = OpenWeather.current?.getForecast5DayByCity(city);

    forecast = forecast?.slice(0, 5); // only show the next 5 three-hour gaps

    let weatherDataByHour = forecast?.map(
        (data: {
            time: Date;
            type: string;
            temperature: number;
            feelsLike: number;
            cloudPrediction: string;
        }) => {
            return {
                time: moment(data.time).format("HH:mm"),
                temperature: data.temperature + "°C",
                condition: data.type,
                feelsLike: data.feelsLike + "°C",
            };
        },
    );

    let currentWeather = OpenWeather.current?.getCurrentWeatherDataByCity(city);

    let ioniconMap = new Map<string, string>([
        ["Clear", "sunny"],
        ["Clouds", "cloudy"],
        ["Rain", "rainy"],
        ["Snow", "snow"],
        ["Mist", "cloudy"],
        ["Fog", "cloudy"],
        ["Drizzle", "rainy"],
        ["Thunderstorm", "thunderstorm"],
        ["Haze", "cloudy"],
        ["Smoke", "cloudy"],
        ["Dust", "cloudy"],
        ["Sand", "cloudy"],
        ["Ash", "cloudy"],
        ["Squall", "cloudy"],
        ["Tornado", "cloudy"],
    ]);
    let iconName = currentWeather
        ? ioniconMap.get(currentWeather.type)
        : "sunny";

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
                <ThemedText type="title">{city}</ThemedText>
                <View className="flex-row items-center space-x-2 p-4 text-lg">
                    <Ionicons name={iconName} size={24} color="black" />
                    {currentWeather ? (
                        <Text>{currentWeather.temperature}°C</Text>
                    ) : (
                        <Text>Loading...</Text>
                    )}
                    {currentWeather ? (
                        <Text>{currentWeather.type}</Text>
                    ) : (
                        <View></View>
                    )}
                </View>
                <View>
                    {weatherDataByHour ? (
                        weatherDataByHour?.map(
                            (weather: {
                                time: string;
                                temperature: string;
                                condition: string;
                                feelsLike: string;
                            }) => (
                                <View
                                    key={weather.time}
                                    className="flex-row justify-between p-4"
                                >
                                    <Text>{weather.time}</Text>
                                    <Text>{weather.temperature}</Text>
                                    <Text>{weather.condition}</Text>
                                </View>
                            ),
                        )
                    ) : (
                        <Text className="my-5">Loading...</Text>
                    )}
                </View>
                <Collapsible title="More Info">
                    {currentWeather ? (
                        <Text className="font-bold">
                            Feels Like: {currentWeather.feelsLike}
                            °C
                        </Text>
                    ) : (
                        <Text>"Loading"</Text>
                    )}
                    <Text>You should pack an umbrella and a light jacket.</Text>
                </Collapsible>
            </ThemedView>
        </ParallaxScrollView>
    );
}
