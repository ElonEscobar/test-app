import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Contact Us</ThemedText>
      </ThemedView>
      <ThemedText>
        We are located at duka moja, near the intersection of North Airport Road
        and Airport Road.
      </ThemedText>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">FAQ</ThemedText>
      </ThemedView>
      <Collapsible title="Who are we?">
        <ThemedText>
          We are a vibrant coffee haven, dedicated to serving exceptional,
          ethically sourced brews and delicious bites. Our cozy atmosphere
          invites you to relax, connect, and savor every moment.{" "}
        </ThemedText>
      </Collapsible>

      <Collapsible
        title="What are your opening hours?
"
      >
        <ThemedText>
          Our café is open from 7 AM to 7 PM on weekdays and from 8 AM to 8 PM
          on weekends.
        </ThemedText>
      </Collapsible>

      <Collapsible
        title="What types of coffee do you serve?
"
      >
        <ThemedText>
          We offer a wide variety of coffee options, including espresso, drip
          coffee, cold brew, and specialty lattes, along with seasonal blends.
        </ThemedText>
      </Collapsible>
      <Collapsible
        title="Do you offer any food items?
"
      >
        <ThemedText>
          Yes, we have a selection of pastries, sandwiches, and light snacks
          available to complement your coffee.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Can I order online for pickup?">
        <ThemedText>Online delivery is coming soon to Kofee Café</ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});

// import { View, Text, StyleSheet } from 'react-native'
// import React from 'react'

// const contact = () => {
//   return (
//     <View>
//       <Text style={styles.text}>contact</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   text: {
//     color: "white",
//     fontSize: 42,
//     fontWeight: "bold",
//     textAlign: "center",
//     backgroundColor: "rgba(0,0,0,0.5)",
//     marginBottom: 12,
//   },
// })

// export default contact
