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

// this is the logon screen

export default function LogonScreen() {
    //
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
                <ThemedText type="title">Log in</ThemedText>
            </ThemedView>
        </ParallaxScrollView>
    );
}