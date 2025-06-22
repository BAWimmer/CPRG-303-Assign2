import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Navbar = ({title, onPress}: {title:string, onPress: ()=> void}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Navbar

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
  },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
})