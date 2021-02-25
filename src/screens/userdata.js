import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

 const userdata =(props) =>
{
 const item=props.navigation.getParam('item', 'no-item');
 
 return (
    <View>
     
        

           <Text style={styles.text}>User Data</Text>
       
           <View style={styles.button}>
            
           <View style={styles.buttons}>
            <Text style={styles.texts}>name:{item.name.first}</Text>
            </View>
            <View style={styles.buttons}>
            <Text  style={styles.texts}>gender:{item.gender}</Text>
            </View>
            <View style={styles.buttons}>
            <Text style={styles.texts}>Location:</Text>
            <Text style={styles.texts}>street:{item.location.street.name}</Text>
            <Text  style={styles.texts}>number:{item.location.street.number}</Text>
            <Text  style={styles.texts}>city:{item.location.city}</Text>
            <Text  style={styles.texts}>state:{item.location.state}</Text>
            <Text  style={styles.texts}>country:{item.location.country}</Text>
            <Text  style={styles.texts}>postcode:{item.location.postcode}</Text>
            </View>
            <View style={styles.buttons}>
            <Text  style={styles.texts}>date of birth:{item.dob.date}</Text>
            <Text  style={styles.texts}>age:{item.dob.age}</Text>
             </View>
             <View style={styles.buttons}>
    
            <Text  style={styles.texts}>phone:{item.phone}</Text>
            <Text  style={styles.texts}>cell:{item.cell}</Text>
            </View>
            
         </View>
  </View>
   
 );
};
 
 const styles=StyleSheet.create({

  texts:{
      fontSize:20
  },
  textss:{
    fontSize:30
},
  text: {
    fontSize: 30,
    left:100,
    fontWeight:'bold'
  },
  button: {
    width: 510,
    marginTop: 20,
   backgroundColor: "#ddd",
    padding: 10,
   borderRadius: 5,

   
 },
 buttons: {
    width: 410,
    marginTop: 20,
   backgroundColor: "lightyellow",
    padding: 10,
   borderRadius: 5,

   
 },


});

export default userdata;


   
 