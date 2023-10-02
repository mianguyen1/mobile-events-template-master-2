// AlcometerApp.js
import React, { useState } from 'react';
import { View, Text, TextInput, Switch, StyleSheet, TouchableOpacity } from 'react-native';

export default function AlcometerApp() {
  const [weight, setWeight] = useState('');
  const [beers, setBeers] = useState('');
  const [time, setTime] = useState('');
  const [gender, setGender] = useState('male');
  const [darkMode, setDarkMode] = useState(false);
  const [bac, setBAC] = useState(null);

  const calculateBAC = () => {
    const calculatedBAC = 0.05; 
    setBAC(calculatedBAC);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <View style={[styles.container, darkMode ? styles.darkMode : null]}>
      <Text style={styles.header}>Alcometer</Text>
      <TextInput
        style={styles.input}
        placeholder="Weight (in kg)"
        onChangeText={(text) => setWeight(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Beers"
        onChangeText={(text) => setBeers(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Time (in hours)"
        onChangeText={(text) => setTime(text)}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Gender:</Text>
      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[styles.genderButton, gender === 'male' ? styles.selectedGender : null]}
          onPress={() => setGender('male')}
        >
          <Text style={styles.genderText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.genderButton, gender === 'female' ? styles.selectedGender : null]}
          onPress={() => setGender('female')}
        >
          <Text style={styles.genderText}>Female</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.calculateButton} onPress={calculateBAC}>
        <Text style={styles.calculateText}>Calculate BAC</Text>
      </TouchableOpacity>
      {bac !== null && <Text style={styles.result}>Your BAC: {bac.toFixed(2)}</Text>}
      <View style={styles.darkModeToggleContainer}>
        <Text style={styles.darkModeLabel}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  darkMode: {
    backgroundColor: '#333333',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#333333',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333333',
  },
  genderContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  genderButton: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 10,
  },
  selectedGender: {
    backgroundColor: '#333333',
  },
  genderText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  calculateButton: {
    backgroundColor: '#007AFF',
    width: '80%',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  calculateText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  darkModeToggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  darkModeLabel: {
    fontSize: 16,
    color: '#333333',
    marginRight: 10,
  },
});
