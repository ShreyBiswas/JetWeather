import Ionicons from "@expo/vector-icons/Ionicons";
import {
    StyleSheet,
    Image,
    Platform,
    ScrollView,
    View,
    Text,
} from "react-native";
import {
    NeuOutsetSquare,
    NeuInsetSquare,
} from "@/components/NeuComponents/NeuSquare";
import {
    NeuButtonPermanent,
    NeuButtonSelector,
    NeuButtonTemporary,
} from "@/components/NeuComponents/NeuButton";
import { 
    NeuSwitchingButton 
} from "@/components/NeuComponents/NeuSwitchingButton";

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
    
    // group 2 columns per row
    const groupedWeatherData = weatherData.reduce(
        (acc, curr, idx) => {
            if (idx % 2 === 0) {
                acc.push([curr]);
            } else {
                acc[acc.length - 1].push(curr);
            }
            return acc;
        },
        [] as WeatherInfo[][]
    );

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
                    <View key={idx} className="flex-row justify-between">
                        {group.map((city) => (
                            <NeuSwitchingButton
                                key={city.city}
                                height={120}
                                width={120}
                                borderRadius={20}
                                lightColor="#D5D5F0"
                                buttonTypeString="Unpressed"
                                styling={{
                                    flex: 1,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: 10,
                                }}
                                destinationScreen="(tabs)/city"
                                destinationCity={city.city}
                            >
                                <Text className="text-xl font-bold">{city.city}</Text>
                                <Text className="text-l">{city.temperature}</Text>
                                <Text className="text-l">{city.condition}</Text>
                            </NeuSwitchingButton>
                        ))}
                    </View>
                ))}
            </ScrollView>
        </ParallaxScrollView>
    );
}