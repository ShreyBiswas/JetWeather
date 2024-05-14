import { Text, View } from "react-native";
import { NeuSquare } from "@/components/NeuSquare";

export default function NeuromorphicScreen() {
    return (
        <View className="flex-1 items-center justify-center">
            <NeuSquare
                height={100}
                width={100}
                lightColor="#F5F5FA"
                darkColor="#F4F4FA"
                borderRadius={20}
                buttonTypeString="Unpressed"
            >
                <Text className="text-black-500 text-xl font-bold">asdfg</Text>
            </NeuSquare>

            <Text
                className="
  text-black-500
  text-2xl
  font-bold
  "
            >
                Edit app/index.tsx to edit this screen.
            </Text>
        </View>
    );
}
