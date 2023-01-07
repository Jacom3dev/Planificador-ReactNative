import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { SafeAreaView, Text,View,TextInput,Pressable,StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { stylesGlobal } from '../styles';
import { IGasto } from '../interfaces';

interface Props {
    gasto: IGasto,
    setGasto: Dispatch<SetStateAction<IGasto>>
    setModal: Dispatch<SetStateAction<boolean>>;
    handleGasto:  (gasto: IGasto) => void;
}

export const Formulario: FC<Props> = ({gasto,setGasto,setModal,handleGasto}:Props) => {

    
    const {name,cantidad,categoria} = gasto;

    const reset = ()=>{
        setGasto({
            name:'',
            cantidad:0,
            categoria:''
        })
    }

  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Pressable style={styles.btn_close} onPress={()=>{setModal(state=>!state);reset()}}>
                <Text style={styles.btn_close_text}>Cancelar</Text>
            </Pressable>
        </View>
        <View style={styles.form}>
            <Text style={styles.title}>Nuevo gasto</Text>
            <View style={styles.container_input}>
                <Text style={styles.label}>Nombre gasto:</Text>
                <TextInput
                    placeholder='Nombre del gasto Ej:Comida'
                    style={styles.input}
                    value={name.toString()}
                    onChangeText={value=>setGasto({...gasto,name:value})}
                />
            </View>

            <View style={styles.container_input}>
                <Text style={styles.label}>Cantidad gasto:</Text>
                <TextInput
                    keyboardType='numeric'
                    placeholder='Cantidad del gasto Ej:300'
                    style={styles.input}
                    value={cantidad.toString()}
                    onChangeText={value=>setGasto({...gasto,cantidad:+value})}
                />
            </View>

            <View style={styles.container_input}>
                <Text style={styles.label}>Categoria gasto:</Text>
                <Picker selectedValue={categoria} onValueChange={value=>setGasto({...gasto,categoria:value})} style={styles.input}>
                    <Picker.Item label='-- Seleccione --' value=""/>
                    <Picker.Item label='Ahorro' value="ahorro"/>
                    <Picker.Item label='Comida' value="comida"/>
                    <Picker.Item label='Casa' value="casa"/>
                    <Picker.Item label='Gastos varios' value="gastos"/>
                    <Picker.Item label='Ocio' value="ocio"/>
                    <Picker.Item label='Salud' value="salud"/>
                    <Picker.Item label='Suscripciones' value="suscripciones"/>
                </Picker>
            </View>
            <Pressable style={styles.btn} onPress={()=>handleGasto(gasto)}>
                <Text style={styles.btn_text}>Agregar Gasto</Text>
            </Pressable>
        </View>   

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#1E40Af',
        flex: 1
    },
    title:{
        textAlign:'center',
        fontSize:28,
        marginBottom:30,
        color: '#64748B'
    },
    form:{
        ...stylesGlobal.container
    },
    container_input:{
        marginVertical:10
    },
    label:{
        color: '#64748B',
        textTransform:'uppercase',
        fontSize:16,
        fontWeight:'bold'
    },
    input:{
        backgroundColor: '#F5F5F5',
        padding:10,
        borderRadius:10,
        marginTop:10
    },
    btn:{
        backgroundColor: '#3B82F6',
        padding: 10,
        marginTop: 20
    },
    btn_text:{
        textAlign:'center',
        color: '#FFF',
        fontWeight:'bold',
        textTransform: 'uppercase'
    },
    btn_close:{
        backgroundColor: '#DB2777',
        padding: 15,
        marginTop: 30,
        marginHorizontal: 10,
        borderRadius: 10
    },
    btn_close_text:{
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#FFF'
    },
});
