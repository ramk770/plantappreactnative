import { SafeAreaView } from "react-native";
import { View, StyleSheet, Text, Image } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'
import { TextInput,TouchableOpacity } from "react-native";
import { useState } from "react";

import { FlatList,Dimensions } from "react-native";
const width = Dimensions.get('window').width / 2 - 30;

const data=[{
  name: "Spider Plant",
  price: 9.99,
  like: true,
  about: "The Spider Plant is a resilient and easy-to-care-for plant, producing spider-like plantlets that dangle from the mother plant.",
  img: require('./assets/plant2.jpeg')
},
{
  id: 2,
  name: "Monstera Deliciosa",
  price: 29.5,
  like: false,
  about: "The Monstera Deliciosa, known for its unique leaves with natural holes, is a popular and stylish indoor plant.",
  img: require('./assets/plant5.jpeg')
},
{
  id: 3,
  name: "ZZ Plant",
  price: 17.25,
  like: true,
  about: "The ZZ Plant is a low-maintenance plant with glossy green leaves that can tolerate low light conditions.",
  img: require('./assets/plant3.jpeg')
},
{
  id: 4,
  name: "Aloe Vera",
  price: 12.75,
  like: true,
  about: "Aloe Vera is a succulent plant known for its medicinal properties and soothing gel contained in its leaves.",
  img: require('./assets/plant1.jpg')
},
{
  id: 5,
  name: "Jade Plant",
  price: 14.99,
  like: false,
  about: "The Jade Plant, or Money Plant, is a symbol of good luck and prosperity and is easy to care for.",
  img: require('./assets/plant2.jpeg')
},
{
  id: 6,
  name: "Philodendron",
  price: 11.25,
  like: true,
  about: "The Philodendron is a versatile and popular indoor plant with various leaf shapes and sizes.",
  img: require('./assets/plant3.jpeg')
},
{
  id: 7,
  name: "Snake Plant",
  price: 18.5,
  like: true,
  about: "The Snake Plant, or Mother-in-Law's Tongue, is a hardy plant known for its air-purifying qualities.",
  img: require('./assets/plant4.jpg')
},
{
  id: 8,
  name: "Fiddle Leaf Fig",
  price: 24.99,
  like: false,
  about: "The Fiddle Leaf Fig is a trendy plant with large, fiddle-shaped leaves that requires bright, indirect light.",
  img: require('./assets/plant5.jpeg')
}
]





const Homes = ({navigation}) => {

    const [catergoryIndex, setCategoryIndex] = useState(0);

    const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];
  
    const CategoryList = () => {
      return (
        <View style={styless.categoryContainer}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => setCategoryIndex(index)}>
              <Text
                style={[
                  styless.categoryText,
                  catergoryIndex === index && styless.categoryTextSelected,
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    };
    const handles = (plant) => {
    console.log('hello')
    navigation.push('detail',plant)
    }
    const Card = ({plant}) => {
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('detail' ,plant)}>
          <View style={styless.card}>
            <View style={{alignItems: 'flex-end'}}>
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: plant.like
                    ? 'rgba(245, 42, 42,0.2)'
                    : 'rgba(0,0,0,0.2) ',
                }}>
                <Ionicons
                 name="star-outline"
                  size={18}
                  color={plant.like ? 'red' : 'black'}
                />
              </View>
            </View>
  
            <View
              style={{
                height: 100,
                alignItems: 'center',
              }}>
              <Image
                source={plant.img}
                style={{flex: 1, resizeMode: 'contain'}}
              />
            </View>
  
            <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
              {plant.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text style={{fontSize: 19, fontWeight: 'bold'}}>
                ${plant.price}
              </Text>
              <View
                style={{
                  height: 25,
                  width: 25,
                  backgroundColor: 'green',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>
                  +
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    };


    return ( 
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
       <View style={styless.header}>
           <View >
             <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'flex-start'}}>
             Welcome To
             </Text>
             <Text style={{fontSize:38,fontWeight: 'bold',color: 'green',alignSelf:'flex-start'}}>
                Plant Shop
             </Text>
           </View>
           <Ionicons name="cart-outline" size={38} />
           
</View>
<View style={{marginTop: 30,flexDirection: 'row'}} >
    <View style={styless.Container}>
        <Ionicons name="search-outline" size={28} style={{marginLeft:20}} />
        <TextInput placeholder="Search" style={styless.input} /> 
    </View>
    <View style={styless.sortBtn}>
        <Ionicons  name="reorder-four-outline"  size={28} color={'white'} />
    </View>

</View>
<CategoryList />
<FlatList
        columnWrapperStyle={{justifyContent: 'space-around'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={data}
        renderItem={({item}) => {
          return <Card plant={item} />;
        }}
      />
        </SafeAreaView>
     
     );
}
const styless = StyleSheet.create({
  header: {
    marginTop:48,

    flexDirection:'row',
    justifyContent:'space-around',

  },
  Container: {
    height: 50,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color:'black',
    borderColor:'black'
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
  categoryTextSelected: {
    color: 'green',
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: 'green',
  },
  card: {
    height: 225,
    backgroundColor: 'lightgrey',
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  // 2 div image data
  listContainer: {
    padding: 10,
},
cardContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 3,
},
image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
},
title: {
    fontSize: 16,
    fontWeight: 'bold',
},
author: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
},
iconContainer: {
    flexDirection: 'row',
},
icon: {
    marginHorizontal: 10,
},

})
 
export default Homes;
