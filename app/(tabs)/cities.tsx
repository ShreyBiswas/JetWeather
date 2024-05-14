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

type WeatherInfo = {
    city: string;
    temperature: string;
    condition: string;
};

const mockWeatherData: WeatherInfo[] = [
    { city: "New York", temperature: "9°C", condition: "Cloudy" },
    { city: "London", temperature: "7°C", condition: "Rainy" },
    { city: "Tokyo", temperature: "16°C", condition: "Sunny" },
    { city: "Sydney", temperature: "22°C", condition: "Sunny" },
    // Add more cities as needed
];

export default function TabTwoScreen() {
    const weatherData = mockWeatherData;

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
                {weatherData.map((info, index) => (
                    <View key={index} className="flex-row items-center p-4 bg-white shadow-md my-2 border border-gray-200 rounded-lg">
                        <Text className="flex-1 font-bold text-lg">{info.city}</Text>
                        <Text className="font-bold pr-2">
                            {info.temperature}
                        </Text>
                        <Text className="text-gray-500">
                            {info.condition}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </ParallaxScrollView>
    );
}