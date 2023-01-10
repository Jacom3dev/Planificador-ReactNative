import React, { Dispatch, FC, SetStateAction } from 'react'
import { View,StyleSheet, Text } from 'react-native';
import { Gasto } from './Gasto';
import { IGasto } from '../interfaces';

interface Props {
    gastos:IGasto[],
    setModal: Dispatch<SetStateAction<boolean>>,
    setGasto: Dispatch<SetStateAction<IGasto>>,
}
export const ListadoGastos: FC<Props> = ({gastos,setModal,setGasto}:Props) => {
  return (
   <View style={styles.container}>
        <Text style={styles.title}>Gastos</Text>
        {gastos.length == 0?
            <Text style={styles.sudtitle}>No hay Gastos</Text>
        :
        gastos.map(gasto=>(
            <Gasto key={gasto.id} gasto={gasto} setModal={setModal} setGasto={setGasto}/>
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