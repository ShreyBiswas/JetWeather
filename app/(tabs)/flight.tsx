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

// this is the flight screen for seeing the weather for both the start and end cities of a flight

export default function FlightScreen() {

    const route = useRoute();
    const flightId = route.params.flightId;
    const departureCode = route.params.departureCode;
    const arrivalCode = route.params.arrivalCode;

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
                <ThemedText type="title">Flight {flightId}</ThemedText>
                <View className="flex-row justify-between mt-8">
                    <View className="flex-1 items-center">
                        <Text className="text-xl font-bold mb-2">{departureCode}</Text>
                        <View className="flex-row items-center space-x-2">
                            <Ionicons name="cloudy" size={24} color="black" />
                            <Text className="text-lg">15°C</Text>
                            <Text className="text-lg">Cloudy</Text>
                        </View>
                    </View>
                    <View className="flex-1 items-center">
                        <Text className="text-xl font-bold mb-2">{arrivalCode}</Text>
                        <View className="flex-row items-center space-x-2">
                            <Ionicons name="sunny" size={24} color="black" />
                            <Text className="text-lg">30°C</Text>
                            <Text className="text-lg">Sunny</Text>
                        </View>
                    </View>
                </View>
            </ThemedView>
        </ParallaxScrollView>
    );
}