import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const rock = require("./signs/rock.png");
const paper = require("./signs/paper.png");
const scissors = require("./signs/scissors.png");

const bgColors = ["pink", "purple", "green"]

const randomImage = () => {
  const emoji = [rock, scissors, paper];
  const random = Math.floor(Math.random() * emoji.length)
  return emoji[random];
}

const PlayScreen = () => {
	const [counter, setCounter] = useState(3);

	useEffect(() => {
		console.log(counter);
		if (counter === 0) return;
		let timeout = setTimeout(() => {
			setCounter((prev) => prev - 1);
		}, 1000);
		return () => {
			clearTimeout(timeout);
		};
	}, [counter]);

	return (
		<View style={StyleSheet.compose({backgroundColor: bgColors[counter-1]}, styles.container)}>
			{counter < 1 ? (
				<>
					<Image source={randomImage()} style={styles.sign} />
          <View style={styles.button}>
            <Button title="Play again" onPress={() => setCounter(3)} />
          </View>
					
				</>
			) : (
				<Text style={styles.counter}>{counter}</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	counter: {
    fontSize: 150,
    color: "white"
	},
	sign: {
		width: 200,
		height: 200,
  },
  button: {
    position: "absolute",
    bottom: 40
  }
});
export default PlayScreen;
