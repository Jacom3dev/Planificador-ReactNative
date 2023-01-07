import React, { FC } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { formatearCantidad } from '../helpers';
import { IGastos } from '../interfaces';
import { stylesGlobal } from '../styles';

interface Props {
  gasto:IGastos
}
export const Gasto: FC<Props> = ({gasto}:Props) => {

  const {id,name,cantidad,categoria} = gasto;

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>{categoria}</Text>
          <Text>{name}</Text>
        </View>
        {formatearCantidad(cantidad)}
      </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    ...stylesGlobal.container,
    marginBottom: 20
  }
});
