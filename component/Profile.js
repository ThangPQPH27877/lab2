import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable,StyleSheet,FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const Profile = (props) => {
  const navigation = props.navigation;
  const route = props.route;
  const dataProfile = [...route.params.dataHome];
   
  
  const clickEdit = ()=>{
    navigation.navigate('EditProfile',{dataProfile:dataProfile});
  }
  return (
    <View style={styles.container} >
        <View style={styles.image}>
            <Image
                style={{ width: 100, height: 100 ,borderRadius:100}}
                source={{ uri: 'https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/294067087_1414518758957541_6648472532142271917_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=Z_pnLuhBbp0AX9T0c9p&_nc_ht=scontent.fhan3-3.fna&oh=00_AfD2I3eWhahka1MnSKc2meLc_njbhRvIwUBeQ8PFw_IaRA&oe=63EB1BEB' }}
            />
        </View>
        <View style={styles.info}>
            <Pressable  onPress={()=>{clickEdit()}}>
               
                <FontAwesome name="edit" size={30} style={styles.text_edit} />
            </Pressable>
        </View>
        <View style={styles.FlatList}>
        <FlatList
       
        data={dataProfile}
        renderItem={({item}) => 
        <View style={styles.info1}>
          
          <Text style={styles.text}>Họ và tên: {item.name}</Text>
          <Text style={styles.text}>Địa chỉ: {item.diaChi} </Text>
          <Text style={styles.text}>Số Điện thoại: {item.Sdt} </Text>
          <Text style={styles.text}>Email: {item.Email} </Text>
         
        </View>}
        keyExtractor={(item) => item.id}
      />
        </View>
       
    </View>
  );
};
const styles = StyleSheet.create({
  textInput:{
    borderWidth: 1,
    padding:7,
    borderRadius:5,
    marginTop: 10
  },
  image:{
      width: '100%',
     
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
     
  },
  FlatList:{
      padding:10,
      fontSize:20,
     
  },
  text:{
    fontSize:20,
    lineHeight:35,
    fontWeight:'bold'
  },
  info:{
    marginTop:10,

  },
  info1:{
    marginTop:10,
    borderWidth: 1,
    padding:7,
    borderRadius:5
  },
  text_edit:{
    textAlign: 'right',
    paddingRight:20,
    fontSize:30,
    fontWeight:'bold',
    color:'red',
  }
});

export default Profile;
