import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CalculatorScreen = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [prevValue, setPrevValue] = useState(null);
  const [shouldDisplayResult, setShouldDisplayResult] = useState(false);

  const handleButtonPress = (value) => {
    switch (value) {
      case "AC":
        clearAll();
        break;
      case "Back":
        backspace();
        break;
      case "=":
        calculateResult();
        break;
      default:
        handleInput(value);
        break;
    }
  };

  const clearAll = () => {
    setDisplayValue("0");
    setOperator(null);
    setPrevValue(null);
    setShouldDisplayResult(false);
  };

  const backspace = () => {
    if (displayValue.length === 1) {
      setDisplayValue("0");
    } else {
      setDisplayValue(displayValue.slice(0, -1));
    }
    setShouldDisplayResult(false);
  };

  const calculateResult = () => {
    if (prevValue !== null) {
      let calculatedResult = parseFloat(prevValue);

      switch (operator) {
        case "+":
          calculatedResult += parseFloat(displayValue);
          break;
        case "-":
          calculatedResult -= parseFloat(displayValue);
          break;
        case "*":
          calculatedResult *= parseFloat(displayValue);
          break;
        case "/":
          calculatedResult /= parseFloat(displayValue);
          break;
        default:
          break;
      }

      setDisplayValue(calculatedResult.toString());
      setOperator(null);
      setPrevValue(calculatedResult);
      setShouldDisplayResult(true);
    }
  };

  const handleInput = (value) => {
    let newDisplayValue = displayValue;

    if (displayValue === "0" || operator || shouldDisplayResult) {
      newDisplayValue = `${value}`;
      setShouldDisplayResult(false);
    } else {
      newDisplayValue = `${displayValue}${value}`;
    }

    setDisplayValue(newDisplayValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{shouldDisplayResult ? displayValue : `${prevValue || ""} ${operator || ""} ${displayValue}`}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.signsRow}>
          <TouchableOpacity
            style={styles.signButton}
            onPress={() => handleButtonPress("AC")}
          >
            <Text style={styles.signText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signButton}
            onPress={() => handleButtonPress("Back")}
          >
            <Text style={styles.signText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signButton}
            onPress={() => handleButtonPress("%")}
          >
            <Text style={styles.signText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signButton}
            onPress={() => handleButtonPress("/")}
          >
            <Text style={styles.signText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          {[7, 8, 9, "*"].map((value) => (
            <TouchableOpacity
              key={value}
              style={styles.button}
              onPress={() => handleButtonPress(value.toString())}
            >
              <Text style={styles.buttonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.buttonRow}>
          {[4, 5, 6, "-"].map((value) => (
            <TouchableOpacity
              key={value}
              style={styles.button}
              onPress={() => handleButtonPress(value.toString())}
            >
              <Text style={styles.buttonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.buttonRow}>
          {[1, 2, 3, "+"].map((value) => (
            <TouchableOpacity
              key={value}
              style={styles.button}
              onPress={() => handleButtonPress(value.toString())}
            >
              <Text style={styles.buttonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.zeroButton]}
            onPress={() => handleButtonPress("0")}
          >
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress(".")}
          >
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.equalButton]}
            onPress={() => {
              handleButtonPress("=");
              calculateResult();
            }}
          >
            <Text style={[styles.buttonText, styles.resultText]}> = </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-end",
  },
  signsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  signButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f56c42",
  },
  signText: {
    color: "#fff",
    fontSize: 24,
  },
  display: {
    color: "#fff",
    fontSize: 48,
    textAlign: "right",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
    margin: 5,
    borderRadius: 5,
    padding: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  zeroButton: {
    flex: 2,
  },
  equalButton: {
    backgroundColor: "#f56c42",
  },
  resultText: {
    color: "white",
  },
});

export default CalculatorScreen;
