import { Text, View, Button, TouchableOpacity } from "react-native";
import { NeuSquare } from "@/components/NeuSquare";


export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">

      <NeuSquare height={100} width={100} lightColor="red" darkColor="blue" />

      <Text className="
        text-2xl
        text-gray-500
        font-bold
      ">Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
