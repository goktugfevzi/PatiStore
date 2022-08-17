import React,{useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import item_data from './items_data.json';
import NewItems from './companents/NewItems';

const App = () => {
  const renderItem = ({ item }) => <NewItems props={item}></NewItems>;
  const [name,setName] = useState("Default")
return (
  <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>URUNLER</Text>
      <FlatList
      ListHeaderComponent={() => (<TextInput style={styles.text_input} onChangeText={(a)=>setName(a)} placeholder="Enter your Item" keyboardType='url'>
      </TextInput>) }
      numColumns={2}
      columnWrapperStyle={styles.row}
      horizontal={false}
      keyExtractor={item => item.id.toString()}
        data={item_data}
        renderItem={renderItem}
      />
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    margin:5,
    padding:5,
    flex: 1,
    backgroundColor: 'white',
    marginLeft:10,
  },
  text_input:{
    borderRadius:10,
    backgroundColor:'#eceff1',
    marginBottom:10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#696969',
  },
  row: { 
    flex: 1, 
    justifyContent: "space-around",
  },
});
export default App;