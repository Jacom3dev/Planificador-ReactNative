import React, { FC, useState } from 'react';
import { View, StyleSheet, Alert, Pressable, Image, Modal, Text, ScrollView } from 'react-native';
import { ControlPresupuesto, Formulario, Header, ListadoGastos, Presupuesto } from './components';
import { IGastos,IGasto} from './interfaces';


export const Planificador : FC = () => {
  const [presupuesto, setPresupuesto] = useState<number>(0);
  const [isValid, setisValid] = useState<boolean>(false);
  const [gastos, setGastos] = useState<IGastos[]>([]);
  const [gasto, setGasto] = useState<IGasto>({
    name:'',
    cantidad:0,
    categoria:''
  });
  const [modal, setModal] = useState<boolean>(false);


  const handlePresupuesto = (presupuesto:number) =>{
    if (presupuesto>0) {
      setisValid(true);
    }else {
      Alert.alert('Error','El presupuesto no puede ser 0 o menor',[{text:'Ok'}]);
    }
  }


  const handleGasto = (gasto:IGasto)=>{
    if (Object.values(gasto).includes('')) {
      Alert.alert('Error','Todos los campos son obligatorios',[{text:'Ok'}]);
    }else {
      const ramdom  = Math.random().toString(36).substring(2,11);
      setGastos([...gastos,{id:ramdom,...gasto}]);
      setGasto({
        name:'',
        cantidad:0,
        categoria:''
      })
      setModal(false);
    }
  }

  return (
    <View style={styles.container}>

      <ScrollView>
        <View style={styles.header}>
          <Header/>
          {isValid
            ?<ControlPresupuesto gastos={gastos} presupuesto={presupuesto}/>
            :<Presupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              handlePresupuesto={handlePresupuesto}
            />
          }
        </View>
        {isValid&&(
          <ListadoGastos gastos={gastos}/>
        )}
      </ScrollView>

      {modal&&(
          <Modal visible={modal} animationType='slide'>
            <Formulario gasto={gasto} setGasto={setGasto} setModal={setModal} handleGasto={handleGasto}/>
          </Modal>
        )
      }
      
      {isValid && (
        <Pressable style={styles.container_btn} onPress={()=>setModal(!modal)}>
          <Image style={styles.img} source={require('./img/nuevo-gasto.png')} />
        </Pressable>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#F5F5F5',
    flex: 1
  },
  header:{
    backgroundColor: '#3B82F6',
    minHeight: 400
  },
  container_btn:{
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 10,
    right: 20,
    zIndex:100
  },
  img:{
    width: 60,
    height: 60,
  }
})