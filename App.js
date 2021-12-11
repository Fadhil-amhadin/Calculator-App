import styles from './styles';
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  const [calcText, setCalcText] = useState("")
  const [resultText, setResultText] = useState("0")
  
  // ==================== event handler ==================== //
  const handleNumberPress = (text) => {
    setCalcText(calcText + text)
  }
  const handleOperationPress = (text) => {
    if(text !== "="){
      setCalcText(calcText + ` ${text} `)
    }else{
      try {
        const tempCont = eval(calcText)
        setCalcText("")
        setResultText(tempCont)
      } catch (error) {
        setCalcText("")
        setResultText("error")
      }
    }
  }
  // ==================== button object ==================== //
  const items = [
    {name: "1"}, {name: "2"}, {name: "-"}, {name: "+"},
    {name: "3"}, {name: "4"}, {name: "/"}, {name: "*"},
    {name: "5"}, {name: "6"}, {name: "%"}, {name: "="},
    {name: "7"}, {name: "8"}, {name: "9"}, {name: "0"},
  ]
  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>Calculator</Text>
      </View>
      {/* ==================== output ==================== */}
      <View style={styles.result}>
        <View style={styles.box}>
          <Text style={styles.resultText}>{calcText === ""? resultText : calcText}</Text>
        </View>
      </View>
      {/* ==================== input ==================== */}
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <FlatList
          numColumns={4}
          keyExtractor={(item, index) => index.toString()}
            data={items}
            renderItem={({item}) => (
              !isNaN(item.name) ?
              <TouchableOpacity style={styles.number} onPress={() => handleNumberPress(item.name)}>
                <Text style={styles.pressableText}>{item.name}</Text>
              </TouchableOpacity> :
              <TouchableOpacity style={styles.operator} onPress={() => handleOperationPress(item.name)}>
                <Text style={styles.pressableText}>{item.name}</Text>
              </TouchableOpacity>
            )}/>
        </View>
      </View>
    </View>
  );
}