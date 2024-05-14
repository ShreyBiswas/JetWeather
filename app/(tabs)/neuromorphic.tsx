export default function NeuromorphicScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <NeuSquare
        height={100}
        width={100}
        lightColor="red"
        darkColor="blue"
      />
  
      <Text
        className="
  text-2xl
  font-bold
  text-gray-500
  "
      >
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  )
}