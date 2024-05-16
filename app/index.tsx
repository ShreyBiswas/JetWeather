import { Image, StyleSheet, Platform, View, Text, TouchableOpacity } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useNavigation } from "@react-navigation/native";

const flights = [
    {
        id: "SQ123",
        departureCode: "JFK",
        arrivalCode: "LAX",
        dateTime: "2024-05-14 15:30",
    },
    {
        id: "BA456",
        departureCode: "LAX",
        arrivalCode: "ORD",
        dateTime: "2024-05-15 12:00",
    },
    {
        id: "AF789",
        departureCode: "CDG",
        arrivalCode: "FRA",
        dateTime: "2024-05-16 09:20",
    },
    // Add more flights as needed
];

export default function HomeScreen() {
    const navigator = useNavigation();
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
                <ThemedText type="title">Welcome back, Bob!</ThemedText>
            </ThemedView>
            <ThemedView>
                <ThemedText className="text-lg">Here are your upcoming flights:</ThemedText>

                <ThemedView className="flex-1 p-4">
                    {flights.map((flight) => (
                        <TouchableOpacity
                            key={flight.id}
                            onPress={() => {
                                navigator.navigate("(tabs)/flight", { flightId: flight.id });
                            }}
                        >
                            <View className="rounded-lg p-4 bg-white shadow-md my-2 border border-gray-200"

                            >
                                <Text className="text-lg font-bold">
                                    {flight.departureCode} ➔ {flight.arrivalCode}
                                </Text>
                                <Text>{flight.dateTime}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ThemedView>
            </ThemedView>
        </ParallaxScrollView>
    );
}