/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Input = ({
  handleApiRequest,
}: {
  handleApiRequest: (name: string) => void;
}) => {
  const [searchText, setSearchText] = useState('');
  const handleTextChange = (text: any) => {
    setSearchText(text);
  };
  const handleSearch = () => {
    handleApiRequest(searchText);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSearch}>
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="gray"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={styles.icon}>
          <Path d="M21 21l-6-6" />
          <Path d="M15 10a5 5 0 1 0-10 0 5 5 0 0 0 10 0z" />
        </Svg>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="gray"
        onChangeText={handleTextChange}
        value={searchText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    paddingVertical: 10,
    borderColor: 'transparent',
  },
});

export default Input;
