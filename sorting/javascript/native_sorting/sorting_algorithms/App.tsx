import * as React from "react";
import { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { quicksort, bubblesort, insertionsort, mergesort } from "./sortingAlgorithms";

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

  const handleSort = (algorithm) => {
    let array = numbers.split(', ').map(Number);
    let sortedArray;
  
    switch (algorithm) {
      case "quicksort":
          sortedArray = quicksort(array);
          break;
        case "bubblesort":
          sortedArray = bubblesort(array);
          break;
        case "insertionsort":
          sortedArray = insertionsort(array);
          break;
        case "mergesort":
          sortedArray = mergesort(array);
          break;
        default:
          sortedArray = [];
  }
  setSortedNumbers(sortedArray);
};

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        style={{
          backgroundColor: "#B5C0D0",
          padding: SPACING,
          margin: SPACING,
          borderWidth: 1,
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
          backgroundColor: "#EED3D9",
          padding: SPACING,
          marginHorizontal: SPACING,
          borderRadius: 15,
          alignItems: "center",
        }}
        onPress={()=> handleSort('quicksort')}
        accessibilityLabel="quicksort button"
      >
        <Text>quicksort</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: "#EED3D9",
          padding: SPACING,
          marginHorizontal: SPACING,
          borderRadius: 15,
          alignItems: "center",
        }}
        onPress={()=> handleSort('bubblesort')}
        accessibilityLabel="bubblesort button"
      >
        <Text>bubblesort</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: "#EED3D9",
          padding: SPACING,
          marginHorizontal: SPACING,
          borderRadius: 15,
          alignItems: "center",
        }}
        onPress={()=> handleSort('insertionsort')}
        accessibilityLabel="insertionsort button"
      >
        <Text>insertionsort</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: "#EED3D9",
          padding: SPACING,
          marginHorizontal: SPACING,
          borderRadius: 15,
          alignItems: "center",
        }}
        onPress={()=> handleSort('mergesort')}
        accessibilityLabel="mergesort button"
      >
        <Text>mergesort</Text>
      </Pressable>


      <Text style={{ marginTop: 20 }}>
        Sorted Numbers: {sortedNumbers.join(", ")}
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


