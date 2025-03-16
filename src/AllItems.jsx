import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AllItems = ({data}) => {
  return (
    <View>
     <View style = {styles.headingContainer}>
        <Text style = {styles.headingText}>Coin Name</Text>
        <Text style = {styles.headingText}>Quantity</Text>
     </View>
     <FlatList
     data={data}
     keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
            <View style = {[styles.itemContainer,{backgroundColor: item.stock < 40 ? '#FFCCCC' : '#D7F6BFFF'}]}>
                <Text>{item.coin}</Text>
                <Text>{item.stock}</Text>
            </View>
        )}
     />
    </View>


  )
}

export default AllItems

const styles = StyleSheet.create({
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
    }
})