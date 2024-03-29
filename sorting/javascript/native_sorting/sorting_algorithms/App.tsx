import * as React from "react";
import { useState } from "react";
import {
  Linking,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { quicksort } from "./sortingAlgorithms/quicksort";
import { mergesort } from "./sortingAlgorithms/mergesort";
import { bubblesort } from "./sortingAlgorithms/bubblesort";
import { insertionsort } from "./sortingAlgorithms/insertionsort";

console.log(quicksort);
console.log(mergesort);
console.log(insertionsort);
console.log(bubblesort);

const SPACING = 24;
const FONT_SIZE = 24;

function HomeScreen() {
  console.log(quicksort);
  console.log(mergesort); 
  console.log(insertionsort);
  console.log(bubblesort);
  const [numbers, setNumbers] = useState("");
  const [sortedNumbers, setSortedNumbers] = useState([]);
  const [sortingTime, setSortingTime] = useState(null);
  const [algorithm, setAlgorithm] = useState("");



  const handleSort = (algorithm) => {
    const startTime = performance.now();
    let array = numbers.split(", ").map(Number);
    let sortedArray;
    let algorithmName;

    switch (algorithm) {
      case "quicksort":
        sortedArray = quicksort(array);
        algorithmName = "quicksort";
        break;
      case "bubblesort":
        sortedArray = bubblesort(array);
        algorithmName = "bubblesort";
        break;
      case "insertionsort":
        sortedArray = insertionsort(array);
        algorithmName = "insertionsort";
        break;
      case "mergesort":
        sortedArray = mergesort(array);
        algorithmName = "mergesort";
        break;
      default:
        sortedArray = [];
        algorithmName = "unknown";  
    }
    const endTime = performance.now(); 
    setSortingTime((endTime - startTime) / 1000);
    setSortedNumbers(sortedArray);
    setAlgorithm(algorithmName);




  };

  return (
    <View
      style={{
        flex: 1,  
        alignItems: "center",
      }}
    >
      <TextInput
        style={{
          backgroundColor: "#b5c0d07b",
          padding: SPACING,
          margin: SPACING,
          borderWidth: 1,
          borderRadius: 10,
          fontSize: FONT_SIZE,
        }}
        value={numbers}
        onChangeText={setNumbers}
        placeholder="enter some numbers"
        accessibilityLabel="add some numbers here to be sorted"
      />

      {/*  buttons for the sorting */}

      <Pressable
        style={{
          backgroundColor: "#eed3d9a2",
          padding: SPACING,
          margin: 1,
          borderRadius: 15,
          alignItems: "center",
        }}
        onPress={() => handleSort("quicksort")}
        accessibilityLabel="quicksort button"
      >
        <Text>quicksort</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: "#eed3d9a2",
          padding: SPACING,
          margin: 1,
          borderRadius: 15,
          alignItems: "center",
        }}
        onPress={() => handleSort("bubblesort")}
        accessibilityLabel="bubblesort button"
      >
        <Text>bubblesort</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: "#eed3d9a2",
          padding: SPACING,
          margin: 1,
          borderRadius: 15,
          alignItems: "center",
        }}
        onPress={() => handleSort("insertionsort")}
        accessibilityLabel="insertionsort button"
      >
        <Text>insertionsort</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: "#eed3d9a2",
          padding: SPACING,
          margin: 1,
          borderRadius: 15,
          alignItems: "center",
        }}
        onPress={() => handleSort("mergesort")}
        accessibilityLabel="mergesort button"
      >
        <Text>mergesort</Text>
      </Pressable>

      {sortedNumbers.length > 0 && sortingTime && algorithm && (

      <Text style={{ justifyContent: 'space-between', marginTop: 20, padding: 10,  borderRadius:20, borderWidth:1, borderColor: '#ccc', borderStyle: 'solid', textAlign: 'center', backgroundColor: '#ccd3ca9a'}}>
        <Text style={{fontSize: FONT_SIZE, color: '#2a2a2a'}}>sorted numbers: {sortedNumbers.join(", ")}</Text> {"\n"}{"\n"}
        sorted in {"\n"} {sortingTime} {"\n"} seconds, using a '{algorithm}' algorithm
      </Text>
      )}

      <Text         style={{
          backgroundColor: "#6f756ece",
          borderRadius: 15,
          paddingVertical: 5,
          paddingHorizontal: 30,
          margin: SPACING*4,
        
          alignItems: "center",
        }}>

          powered by      <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('http://boag.dev')}>
        Бог
        </Text>
  



        </Text>

   
</Text>



    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}