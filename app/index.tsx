import { NeuSquare } from "@/components/NeuSquare";

import { Image, StyleSheet, Platform, View, Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const flights = [
    {
        id: 1,
        departureCode: "JFK",
        arrivalCode: "LAX",
        dateTime: "2024-05-14 15:30",
    },
    {
        id: 2,
        departureCode: "LAX",
        arrivalCode: "ORD",
        dateTime: "2024-05-15 12:00",
    },
    {
        id: 3,
        departureCode: "CDG",
        arrivalCode: "FRA",
        dateTime: "2024-05-16 09:20",
    },
    // Add more flights as needed
];

export default function HomeScreen() {
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
                <ThemedText type="title">JetWeather</ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText className="text-lg">Upcoming Flights</ThemedText>
                <ThemedView style={styles.flightList}>
                    {flights.map((flight) => (
                        <View key={flight.id} style={styles.flightRow}>
                            <Text>
                                {flight.departureCode} ➔ {flight.arrivalCode}
                            </Text>
                            <Text>{flight.dateTime}</Text>
                        </View>
                    ))}
                </ThemedView>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
});
