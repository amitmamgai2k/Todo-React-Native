import { Pressable, StyleSheet, Text, TextInput, View, FlatList } from 'react-native'
import React , { useState } from 'react'
import { PlusCircle, Edit, Trash2 } from 'lucide-react-native';



const Create = ({data}) => {
    const [coin, setCoin] = useState('')
    const [quantity, setQuantity] = useState('')
  return (
    <View style = {styles.container}>
        <TextInput placeholder = 'Enter Coin Name' style = {styles.input} value={coin} onChangeText ={(item)=>setCoin(item)}/>
        <TextInput placeholder = 'Enter Quantity' style = {styles.input} value={quantity} onChangeText={(item)=>setQuantity(item)}/>
        <Pressable style = {{backgroundColor: '#24a0ed', padding: 10, borderRadius: 10, alignItems: 'center', marginTop: 10}}>
            <Text>Add Coin </Text>
        </Pressable>
         <View>
             <View style = {styles.headingContainer}>
                <Text style = {styles.headingText}> All Coins in Stock</Text>

             </View>
             <FlatList
             data={data}
             keyExtractor={(item)=>item.id}
                renderItem={({item})=>(
                    <View style = {[styles.itemContainer,{backgroundColor: item.stock < 40 ? '#FFCCCC' : '#D7F6BFFF'}]}>
                        <Text>{item.coin}</Text>
                        <Text>{item.stock}</Text>
                        <View style = {{flexDirection: 'row', gap: 12}}>
                            <Pressable style={styles.buttonED}><Text>Edit</Text></Pressable>
                            <Pressable><Text>Delete</Text></Pressable>
                        </View>

                    </View>
                )}
             />
            </View>

    </View>
  )
}

export default Create

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: '4%',

    },
    input:{
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        paddingStart: 10,
        paddingEnd: 10,
        marginBottom: 10,
        backgroundColor: '#f9f9f9'
    },
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,

    },
    headingText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    itemContainer: {
        flexDirection: 'row',
        paddingEnd: 20,
        paddingStart: 20,
        justifyContent: 'space-between',
        padding: 12,

        marginBottom: 6,
        borderRadius: 10
    },
    buttonED: {
        backgroundColor: '',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center'
    }

})