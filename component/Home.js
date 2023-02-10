import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable,StyleSheet, Button } from 'react-native';
const Home = (props) => {
    const navigation = props.navigation;
    const route = props.route;    

    const dataHome = [{
      id:1,
      name:'Phạm Quang Thắng',
      diaChi: 'Thanh Hoa',
      Sdt: '0799167356',
      Email:'thangpqph27877@gmail.com',
      checkdata: 1
    }]
  
const click = ()=>{

    
     navigation.navigate('Profile',{dataHome:dataHome});
     
}
  return (
    <View style={styles.container} >
      
       <Button
            title='Profile'
            onPress={()=>{click()}}

       />
    </View>
  );
};
const styles = StyleSheet.create({
  container:{ 
    flex: 1, alignItems: 'center', justifyContent: 'center',
    padding: 50
  }
});
export default Home;
