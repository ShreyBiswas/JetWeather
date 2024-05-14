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
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Cities</ThemedText>
            </ThemedView>

            <ScrollView contentContainerStyle={styles.container}>
                {weatherData.map((info, index) => (
                    <View key={index} style={styles.box}>
                        <Text style={styles.city}>{info.city}</Text>
                        <Text style={styles.temperature}>
                            {info.temperature}
                        </Text>
                        <Text style={styles.condition}>{info.condition}</Text>
                    </View>
                ))}
            </ScrollView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: "#808080",
        bottom: -90,
        left: -35,
        position: "absolute",
    },
    titleContainer: {
        flexDirection: "row",
        gap: 8,
    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: 10,
        gap: 10,
    },
    box: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    city: {
        fontSize: 16,
        fontWeight: "bold",
    },
    temperature: {
        fontSize: 14,
    },
    condition: {
        fontSize: 12,
    },
});
