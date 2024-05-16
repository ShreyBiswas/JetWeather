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

// this is the city view, where you can see the weather for a city of interest eg London

export default function CityView() {

    const route = useRoute();
    const city = route.params.city;
    
    const weatherDataByHour = [
        { time: "12:00", temperature: "15°C", condition: "Cloudy" },
        { time: "15:00", temperature: "16°C", condition: "Cloudy" },
        { time: "18:00", temperature: "14°C", condition: "Cloudy" },
        { time: "21:00", temperature: "12°C", condition: "Cloudy" },
    ];

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
                    <Ionicons name="cloudy" size={24} color="black" />
                    <Text className="text-lg">15°C</Text>
                    <Text className="text-lg">Cloudy</Text>
                </View>
                <View>
                    {weatherDataByHour.map((weather) => (
                        <View key={weather.time} className="flex-row justify-between p-4">
                            <Text>{weather.time}</Text>
                            <Text>{weather.temperature}</Text>
                            <Text>{weather.condition}</Text>
                        </View>
                    ))}
                </View>
                <Collapsible title="More Info">
                    <Text className="font-bold">
                        Feels like: 9°C
                    </Text>
                    <Text>
                        You should pack an umbrella and a light jacket.
                    </Text>
                </Collapsible>

            </ThemedView>
        </ParallaxScrollView>
    );
}