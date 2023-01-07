import React, { FC, useEffect, useState } from 'react';
import { Image, Text, View,StyleSheet } from 'react-native';
import { formatearCantidad } from '../helpers';
import { stylesGlobal } from '../styles';
import { IGastos} from '../interfaces';

interface Props {
  gastos:IGastos[],
  presupuesto:number
}

export const ControlPresupuesto :FC<Props> = ({presupuesto,gastos}:Props) => {
  const [disponible, setDisponible] = useState<number>(0);
  const [gastado, setGastado] = useState<number>(0);

  useEffect(() => {
    const totalGastado = gastos.reduce((total,gasto)=>gasto.cantidad+total,0);
    setDisponible(presupuesto-totalGastado);
    setGastado(totalGastado);
  }, [gastos])

  return (
   <View style={styles.container} >
      <View style={styles.container_graphic}>
        <Image style={styles.img} source={ require('../img/grafico.jpg')} />
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