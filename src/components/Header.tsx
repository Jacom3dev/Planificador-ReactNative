import React, { FC } from 'react';
import { StyleSheet, SafeAreaView,Text } from 'react-native';

export const Header :FC = () => {
  return (
    <SafeAreaView >
      <Text style={styles.text} >Planificador de gastos</Text>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  text:{
    textAlign: 'center',
    fontSize: 30,
    color: '#FFF',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    paddingTop: 20
  }
});