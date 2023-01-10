import React, { FC ,useEffect,useState} from 'react';
import { Image, Text, View,StyleSheet } from 'react-native';
import { formatearCantidad } from '../helpers';
import { stylesGlobal } from '../styles';
import CircularProgress from 'react-native-circular-progress-indicator'

interface Props {
  presupuesto:number,
  disponible: number,
  gastado: number
}

export const ControlPresupuesto :FC<Props> = ({presupuesto,disponible,gastado}:Props) => {
  const [value, setValue] = useState(0);

  useEffect(()=>{
    if (presupuesto>0) { 
      
      setValue(((presupuesto-disponible)/presupuesto)*100)
    }
  },[presupuesto,disponible])
 
  return (
   <View style={styles.container} >
      <View style={styles.container_graphic}>
        <CircularProgress
          value={value}
          duration={1000}
          radius={150}
          valueSuffix={'%'}
          title={'Gastado'}
          inActiveStrokeColor={'#f5f5f5'}
          inActiveStrokeWidth={20}
          activeStrokeColor={'#3b82f6'}
          activeStrokeWidth={20}
          titleStyle={{fontWeight:'bold',fontSize:20}}
          titleColor={'#64748B'}
        />
      </View>

      <View style={styles.container_text}>
        <Text style={styles.value}>
          <Text style={styles.label}>Presupuesto:</Text>{' '}
          {formatearCantidad(presupuesto)}
        </Text>
        <Text style={styles.value}>
          <Text style={styles.label}>Disponible:</Text>{' '}
          {formatearCantidad(disponible)}
        </Text>
        <Text style={styles.value}>
          <Text style={styles.label}>Gastado:</Text>{' '}
          {formatearCantidad(gastado)}
        </Text>
      </View>
   </View>
  )
}


const styles = StyleSheet.create({
  container:{
   ... stylesGlobal.container
  },
  container_graphic:{
    alignItems: 'center'
  },
  container_text:{
    marginTop: 50,

  },
  value:{
    fontSize:24,
    textAlign: 'center',
    marginBottom:10
  },
  label:{
    fontWeight: '700',
    color: '#3B82F6'
  },
  img:{
    width: 250,
    height:250
  }
})