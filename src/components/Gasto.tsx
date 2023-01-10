import React, { Dispatch, FC, SetStateAction } from 'react'
import { Text, View, StyleSheet,Image, Pressable } from 'react-native';
import { formatearCantidad, formatearFecha } from '../helpers';
import { IGasto } from '../interfaces';
import { stylesGlobal } from '../styles';

interface Props {
  gasto:IGasto,
  setModal: Dispatch<SetStateAction<boolean>>,
  setGasto:Dispatch<SetStateAction<IGasto>>,
}

const iconos = {
  ahorro: require('../img/icono_ahorro.png'),
  casa: require('../img/icono_casa.png'),
  comida: require('../img/icono_comida.png'),
  gastos: require('../img/icono_gastos.png'),
  ocio: require('../img/icono_ocio.png'),
  salud: require('../img/icono_salud.png'),
  suscripciones: require('../img/icono_suscripciones.png'),
  '': ''
}
export const Gasto: FC<Props> = ({gasto,setModal,setGasto}:Props) => {

  const {id,name,cantidad,categoria,date} = gasto;

  const handleClick = () =>{
    setModal(true); 
    setGasto(gasto)
  }

  return (
   <Pressable onLongPress={()=>handleClick()}>
      <View style={styles.container}>
        <View style={styles.content} >
          <View style={styles.container_img}>
            <Image style={styles.img} source={iconos[categoria]} />

            <View style={styles.container_text}>
              <Text style={styles.category}>{categoria}</Text>
              <Text style={styles.gasto}>{name}</Text>
              <Text style={styles.date}>Fecha: {formatearFecha(date)}</Text>
            </View>
          </View>
        
          <Text style={styles.cantidad}>{formatearCantidad(cantidad)}</Text>
      </View>
        
    </View>
   </Pressable>
  )
}

const styles = StyleSheet.create({
  container:{
    ...stylesGlobal.container,
    marginBottom: 20
  },
  content:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  container_img:{
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  container_text:{
    flex: 1
  },
  category:{
    color: '#94A3B8',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 5 
  },
  gasto:{
    fontSize: 22,
    color: '#64748B',
    marginBottom: 5
  },
  img:{
    width: 80,
    height: 80,
    marginRight: 20
  },
  cantidad:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  date: {
    fontWeight: '700',
    color: '#DB2777'
  }
});
