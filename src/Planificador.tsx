import React, { FC, useEffect, useState } from 'react';
import { View, StyleSheet, Alert, Pressable, Image, Modal, Text, ScrollView } from 'react-native';
import { ControlPresupuesto, Formulario, Header, ListadoGastos, Presupuesto } from './components';
import {IGasto} from './interfaces';


export const Planificador : FC = () => {
  const [presupuesto, setPresupuesto] = useState<number>(0);
  const [isValid, setisValid] = useState<boolean>(false);
  const [gastos, setGastos] = useState<IGasto[]>([]);
  const [gasto, setGasto] = useState<IGasto>({
    id: '',
    name:'',
    cantidad:0,
    categoria:'',
    date: new Date
  });
  const [modal, setModal] = useState<boolean>(false);
  const [disponible, setDisponible] = useState<number>(0);
  const [gastado, setGastado] = useState<number>(0);

  

  const handlePresupuesto = (presupuesto:number) =>{
    if (presupuesto>0) {
      setisValid(true);
    }else {
      Alert.alert('Error','El presupuesto no puede ser 0 o menor',[{text:'Ok'}]);
    }
  }


  const handleGasto = (gasto:IGasto)=>{  
    if (Object.values(gasto).slice(1).includes('')) {
      Alert.alert('Error','Todos los campos son obligatorios',[{text:'Ok'}]);
      return;
    }
    if (gasto.cantidad>disponible) {
      Alert.alert('Error','No tienes dinero suficiente',[{text:'Ok'}]);
      return;
    }
    
    if (gasto.id) {        
      setGastos(gastos.map(g=>g.id == gasto.id?gasto:g));
    }else {
      const ramdom  = Math.random().toString(36).substring(2,11);
      setGastos([...gastos,{...gasto,id:ramdom}]);
    }
    setModal(false);
    setGasto({
      id: '',
      name:'',
      cantidad:0,
      categoria:'',
      date: new Date
    })
  }

  const deleteGasto = (id:string)=>{
    setGastos(gastos.filter(g=>g.id != id));
    setGasto({
      id: '',
      name:'',
      cantidad:0,
      categoria:'',
      date: new Date
    })
    setModal(false);

  }

  useEffect(() => {
    const totalGastado = gastos.reduce((total,gasto)=>gasto.cantidad+total,0);
    setDisponible(presupuesto-totalGastado);  
    setGastado(totalGastado);
  }, [gastos,presupuesto])

  return (
    <View style={styles.container}>

      <ScrollView>
        <View style={styles.header}>
          <Header/>
          {isValid
            ?<ControlPresupuesto presupuesto={presupuesto} disponible={disponible} gastado={gastado} />
            :<Presupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              handlePresupuesto={handlePresupuesto}
            />
          }
        </View>
        {isValid&&(
          <ListadoGastos gastos={gastos} setModal={setModal} setGasto={setGasto}/>
        )}
      </ScrollView>

      {modal&&(
          <Modal visible={modal} animationType='slide'>
            <Formulario gasto={gasto} setGasto={setGasto} setModal={setModal} handleGasto={handleGasto} deleteGasto={deleteGasto}/>
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