import * as React from "react";
import { useState } from "react";
import { Linking, Pressable, Text, TextInput, TextProps, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { quicksort } from "./sortingAlgorithms/quicksort";
import { mergesort } from "./sortingAlgorithms/mergesort";
import { bubblesort } from "./sortingAlgorithms/bubblesort";
import { insertionsort } from "./sortingAlgorithms/insertionsort";

const PADDING = 18;
const MARGIN = 12;
const FONT_SIZE = 24;
const BUTTON_SIZE = 300;

function SortingScreen() {
  const [numbers, setNumbers] = useState("");
  const [sortedNumbers, setSortedNumbers] = useState<number[]>([]);
  const [sortingTime, setSortingTime] = useState(0);
  const [algorithm, setAlgorithm] = useState("");

  const handleSort = (algorithm: string) => {
    try {
      if (!isValidInput(numbers)) {
        throw new Error ("please enter comma-separated numbers");
      }

      const startTime = performance.now();
      let array = numbers.split(", ").map(Number);
      let sortedArray: number[];
      let algorithmName: string;

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
      setSortingTime((endTime - startTime) * 1000);
      setSortedNumbers(sortedArray);
      setAlgorithm(algorithmName);
    } catch (error) { 
      if (error instanceof Error){
        console.error(error.message);
      } else {
        console.error("An unknown error occurred");
      }
    }
  };

  const isValidInput = (input: String) => {
    if (!input.trim()) {
      return false;
    }
    const parts = input.split(",");
    return (
      parts.length > 1 && parts.every((part) => !isNaN(Number(part.trim())))
    );
  };

  return (
    <View
      style={{
        flex: 1,
        padding: PADDING,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: FONT_SIZE,
          textAlign: "center",
          fontWeight: '700',
          textShadowRadius: 10,
          textShadowOffset: { height: 2, width: 1 },
          textShadowColor: "#F5E8DD",
        }}
      >
        NUMBER COMMA NUMBER {"\n"}
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            fontWeight: '400',
          }}
        >
          a sorting app{"\n"}
        </Text>
      </Text>

      <TextInput
        style={{
          backgroundColor: "#ffffffc9",
          padding: PADDING,
          margin: MARGIN,
          borderWidth: 1,
          borderRadius: 10,
          fontSize: FONT_SIZE,
        }}
        value={numbers}
        onChangeText={setNumbers}
        placeholder="enter some numbers"
        accessibilityLabel="add some numbers here to be sorted"
      />



      {/*  pressable buttons for the sorting, one per algo */}

      <Pressable
        style={{
          backgroundColor: "#ead9dda1",
          padding: PADDING,
          margin: MARGIN,
          borderRadius: 15,
          alignItems: "center",
        }}
        onPress={() => handleSort("quicksort")}
        accessibilityLabel="quicksort button"
      >
        <Text style={{ fontWeight: '400', fontSize: FONT_SIZE }}>quicksort</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: "#ead9dda1",
          padding: PADDING,
          margin: MARGIN,
          borderRadius: 15,
          alignItems: "center",
        }}
        onPress={() => handleSort("bubblesort")}
        accessibilityLabel="bubblesort button"
      >
        <Text style={{ fontWeight: 400, fontSize: FONT_SIZE }}>bubblesort</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: "#ead9dda1",
          padding: PADDING,
          margin: MARGIN,
          borderRadius: 15,
          alignItems: "center",
        }}
        onPress={() => handleSort("insertionsort")}
        accessibilityLabel="insertionsort button"
      >
        <Text style={{ fontWeight: '400', fontSize: FONT_SIZE }}>
          insertionsort
        </Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: "#ead9dda1",
          padding: PADDING,
          margin: MARGIN,
          borderRadius: 15,
          alignItems: "center",
        }}
        onPress={() => handleSort("mergesort")}
        accessibilityLabel="mergesort button"
      >
        <Text style={{ fontWeight: '400', fontSize: FONT_SIZE }}>mergesort</Text>
      </Pressable>

      {sortedNumbers.length > 0 && sortingTime && algorithm && (
        <View>
          <Text
            style={{
              justifyContent: "space-between",
              width: BUTTON_SIZE,
              marginTop: MARGIN * 3,
              padding: 10,
              borderRadius: 20,
              borderWidth: 2,
              textAlign: "center",
              backgroundColor: "#e8e8e89a",
            }}
          >
            {sortedNumbers.join(", ")}
          </Text>

          <Text
            style={{
              fontSize: 10,
              textAlign: "center",
              color: "#2a2a2a",
              borderStyle: "solid",
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "#d7d7d0",
              padding: PADDING / 3,
              margin: MARGIN / 2,
            }}
          >
            {algorithm}ed in {sortingTime.toFixed(4)}μs
          </Text>
        </View>
      )}

      <Text
        style={{
          position: "absolute",
          bottom: 0,
          backgroundColor: "#deefd495",
          borderStyle: "solid",
          borderColor: "#000",
          borderRadius: 50,
          paddingVertical: 6,
          paddingHorizontal: 10,
          marginVertical: PADDING,
        }}
      >
        {" "}
        built by{" "}
        <Text
          style={{ color: "#0202daee" }}
          onPress={() => Linking.openURL("http://boag.dev")}
        >
          Бог
        </Text>
      </Text>
    </View>
  );
}




// the settings tab isnt really necessary, but built it anyway for practice and because i prefer the symmetry 

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Ionicons
        name="ban"
        color="#cb465f"
        size={100}
        style={{ padding: PADDING, margin: MARGIN }}
      />
      <Text>settings adjusted automatically based on user profile</Text>
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
            let iconName: string;
            if (route.name === "sortem") {
              iconName = focused ? "funnel" : "funnel-outline";
            } else if (route.name === "settings") {
              iconName = focused ? "settings" : "settings-outline";
            } else {
              iconName = focused ? "alert" : "alert-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#cb465f",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="sortem" component={SortingScreen} />
        <Tab.Screen name="settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
