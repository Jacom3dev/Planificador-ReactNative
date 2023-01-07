import React, {Dispatch,FC,SetStateAction} from 'react';
import { Text, View,TextInput,Pressable,StyleSheet } from 'react-native'
import { stylesGlobal } from '../styles';

interface Props {
    presupuesto:number,
    setPresupuesto:Dispatch<SetStateAction<number>>,
    handlePresupuesto: (presupuesto: number) => void
}
export const Presupuesto : FC<Props> = ({presupuesto,setPresupuesto,handlePresupuesto}:Props) => {

  return (
    <View style={styles.container}>
        <Text style={styles.label} >Defininir presupuesto</Text>
        <TextInput
            keyboardType='numeric'
            placeholder='Agrega tu presupuesto Ej: 300'
            style={styles.input}
            value={presupuesto.toString()}
            onChangeText={v=>setPresupuesto(+v)}
        />
        <Pressable
            style={styles.btn}
            onPress={()=>handlePresupuesto(presupuesto)}
        >
            <Text style={styles.btn_text}>Agregar presupuesto</Text>
        </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        ...stylesGlobal.container
    },
    label:{
        textAlign:'center',
        fontSize: 24,
        color: '#3B82F6'
    },
    input:{
        backgroundColor: '#F5F5F5',
        padding:10,
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 30
    },
    btn:{
        marginTop: 30,
        backgroundColor: '#1048A4',
        padding:10,
        borderRadius: 10
    },
    btn_text:{
        color: '#FFF',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
});