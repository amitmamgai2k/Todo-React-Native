import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import AllItems from './AllItems'
import Create from './Create';
import LowStock from './LowStock';




const HomeScreen = () => {
    const [view, setview] = useState(0)
    const [data, setdata] = useState([
        {
            id: 1,
            coin: 'Bitcoin',
            stock: 75
        },
        {
            id: 2,
            coin: 'Ethereum',
            stock: 20
        },
        {
            id: 3,
            coin: 'Ripple',
            stock: 95
        },
        {
            id: 4,
            coin: 'Litecoin',
            stock: 40
        },
        {
            id: 5,
            coin: 'Cardano',
            stock: 10
        }
    ]

    )
  return (

    <View style={styles.container}>
        <Text style={styles.title}>Stock Dashboard</Text>
        <View style = {styles.buttonContainer}>
        <Pressable style = {[styles.button, view===0 ?{backgroundColor: '#98FB98'}:null]} onPress={()=>setview(0)}>
                <Text style={styles.buttonText}>All Coins</Text>
            </Pressable>
            <Pressable style = {[styles.button, view===1 ?{backgroundColor: '#98FB98'}:null]}  onPress={()=>setview(1)}>
                <Text style={styles.buttonText}>Low Stock</Text>
            </Pressable>
            <Pressable style = {[styles.button, view===2 ?{backgroundColor: '#98FB98'}:null]} onPress={()=>setview(2)}>
                <Text style={styles.buttonText}>Add Coin</Text>
            </Pressable>
        </View>
        {
            view===0 && <AllItems data={data} />

        }
        {
            view===1 && <LowStock data={data.filter((item)=>item.stock<40)} />
        }
        {
            view===2 && <Create  data={data} setdata={setdata}/>
        }

    </View>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        padding:'4%',

    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginTop: '5%',
    },
    buttonContainer:{
        marginTop: '5%',
        flexDirection: 'row',
        gap: '5%',
        marginVertical: '5%'
    },
    button:{
        borderColor:'yellow',
        borderWidth: 1,
        paddingVertical:3.5,
        paddingHorizontal: 3,
        borderRadius: 50,
        width: '30%',
        alignItems: 'center'
    },

})