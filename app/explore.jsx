import {
  StyleSheet,
  Image,
  View,
  Text,
  Platform,
  Appearance,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
// render in container
import { MENU_ITEMS } from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";

export default function TabTwoScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  const styles = createStyles(theme, colorScheme);
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

  return (
    <Container>
      <FlatList
        data={MENU_ITEMS}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <ThemedView style={styles.titleContainer}>
              <ThemedText type="title">Explore our Menu</ThemedText>
            </ThemedView>
            <ThemedText>
              Explore our wide range of brews and delicacies.
            </ThemedText>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.menuContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.text}>{item.desc}</Text>
              <Text style={[styles.text, styles.price]}>
                Price: {item.price} $
              </Text>
            </View>
            <View style={styles.imgContainer}>
              <Image source={MENU_IMAGES[item.id - 1]} style={styles.img} />
            </View>
          </View>
        )}
      />
    </Container>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    contentContainer: {
      paddingTop: 10,
      paddingBottom: 20,
      backgroundColor: theme.background,
      justifyContent: 'center',
      alignItems: 'center',

    },
    titleContainer:{
      marginVertical: 6
    },

    text: {
      fontSize: 16,
      fontStyle: "italic",
      textAlign: "center",
      wordWrap: 'wrap',
      marginVertical: 2,
      
    },
    price: {
      fontWeight: "bold",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
   
    },
    imgContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    img: {
      borderRadius: 8,
      
    },
    textContainer: {
      alignItems: "center",
    },
    menuContainer: {
      borderColor: "#91C497",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      maxWidth: 350,
      borderRadius: 8,
      padding: 10,
      backgroundColor: colorScheme === "dark" ? "papayawhip" : "#000",
      marginTop: 20,
    },
  });
}
