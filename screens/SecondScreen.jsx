import { View, Text, Image, Pressable } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./secondscreen.style";

export default function SecondScreen({ navigation }) {
  const image = {
    silver: require("../assets/vs_silver.png"),
    red: require("../assets/vs_red.png"),
    black: require("../assets/vs_black.png"),
    blue: require("../assets/vs_blue.png"),
  };
  const [color, setColor] = useState("silver");

  return (
    <View style={styles.container}>
      <View style={styles.productSection}>
        <View>
          <Image style={styles.stretch} source={image[color]} />
        </View>
        <Text style={styles.productText}>
          Điện Thoại Vsmart Joy 3 Hàng Chính Hãng
        </Text>
      </View>

      <View style={styles.chooseColorSection}>
        <View>
          <Text style={styles.chooseColorText}>Chọn một màu bên dưới</Text>
        </View>
        <View style={styles.chooseColorContainer}>
          <Pressable
            style={styles.silver}
            onPress={() => {
              setColor("silver");
            }}
          ></Pressable>
          <Pressable
            style={styles.red}
            onPress={() => {
              setColor("red");
            }}
          ></Pressable>
          <Pressable
            style={styles.black}
            onPress={() => {
              setColor("black");
            }}
          ></Pressable>
          <Pressable
            style={styles.blue}
            onPress={() => {
              setColor("blue");
            }}
          ></Pressable>
        </View>
        <View style={styles.chooseColorButton}>
          <Pressable
            style={styles.button}
            onPress={() => {
              navigation.navigate({
                name: "First",
                params: { color },
              });
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: "15px" }}>XONG</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
