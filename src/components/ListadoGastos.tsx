import React, { FC } from 'react'
import { View,StyleSheet, Text } from 'react-native';
import { Gasto } from './Gasto';
import { IGastos } from '../interfaces';

interface Props {
    gastos:IGastos[]
}
export const ListadoGastos: FC<Props> = ({gastos}:Props) => {
  return (
   <View style={styles.container}>
        <Text style={styles.title}>Gastos</Text>
        {gastos.length == 0?
            <Text style={styles.sudtitle}>No hay Gastos</Text>
        :
        gastos.map(gasto=>(
            <Gasto key={gasto.id} gasto={gasto}/>
        ))
        }
   </View>
  )
}


const styles = StyleSheet.create({
    container:{
        marginTop:60,
        marginBottom: 100
    },
    title:{
        color: '#64748B',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '700',
        marginTop: 20
    },
    sudtitle:{
        marginVertical: 20,
        paddingBottom: 10,
        textAlign: 'center',
        fontSize: 20
    }
});