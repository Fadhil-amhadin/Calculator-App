import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green'
    },
    displayContainer: {
      width: "100%",
      marginTop: "5%",
      marginBottom: "-4%"
    },
    displayText: {
      fontSize: 23,
      color: "white",
      fontWeight: "bold",
      alignSelf: "center"
    },
    result: {
      flex: 2,
      alignItems: "center",
      justifyContent: "center"
    },
    box: {
      width: "90%",
      height: "65%",
      borderRadius: 15,
      backgroundColor: "white",
      marginBottom: "2%",
      justifyContent: "center",
      alignItems: "flex-end"
    },
    resultText: {
      fontSize: 35,
      padding: 10
    },
    buttons: {
      flex: 7,
      flexDirection: "row",
      backgroundColor: "lightgreen"
    },
    numbers: {
      flex: 3,
      marginBottom: "15%",
      margin: 10
    },
    row: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
    },
    number: {
      flex: 1,
      backgroundColor: "limegreen",
      borderRadius: 10,
      margin: 5,
      justifyContent: "center",
      alignItems: "center"
    },
    operator: {
      flex: 1,
      backgroundColor: "green",
      borderRadius: 10,
      margin: 5,
      justifyContent: "center",
      alignItems: "center"
    },
    pressableText: {
      fontSize: 40,
      fontWeight: "bold",
      paddingVertical: "18%"
    },
  });