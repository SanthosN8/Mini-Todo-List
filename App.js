import React, { useState } from "react";
import { StyleSheet, Text,View,Image, Button,Alert,CheckBox,TouchableOpacity } from "react-native";

const App = () => {


  return (
    <View style={styles.container}>

     <View> 
      <Text style={styles.heading}>
        To do List
      </Text>
     </View>
      
     <View style={styles.logo}> 
      <Image 
       source={{
       width:150,
       height:140,
        uri:"https://media.istockphoto.com/vectors/    todo-list-banner-design-man-holds-a-pencil-and-notes-completed-tasks-vector-id1269034924?k=20&m=1269034924&s=612x612&w=0&h=4K1zjhyxWXB7rFKKvu46SVB896Gljo_JQsuPe7AhS8U=",
      }}/>
     </View>
     

     <View style={styles.todobutton}>
        <Button
        title="ADD"
        onPress={() => Alert.alert('You are going to add a new task!')}
         />
        <Button title="SAVE" 
          onPress={() => Alert.alert('Changes are saved')}
         />
     </View>

    <View style={styles.todotask}>
     <View style={styles.task}>
         <View style={styles.taskalign}>
          <TouchableOpacity style={styles.box}></TouchableOpacity>
              <Text style={styles.text}>Task 1</Text>
         </View>
         <View style={styles.circle}></View>
     </View>

     <View style={styles.task}>
         <View style={styles.taskalign}>
          <TouchableOpacity style={styles.box}></TouchableOpacity>
              <Text style={styles.text}>Task 2</Text>
         </View>
         <View style={styles.circle}></View>
     </View>

     <View style={styles.task}>
         <View style={styles.taskalign}>
          <TouchableOpacity style={styles.box}></TouchableOpacity>
              <Text style={styles.text}>Task 3</Text>
         </View>
         <View style={styles.circle}></View>
     </View>

     <View style={styles.task}>
         <View style={styles.taskalign}>
           <TouchableOpacity style={styles.box}></TouchableOpacity>
            <Text style={styles.text}>Task 4</Text>
         </View>
         <View style={styles.circle}></View>
     </View>

       <View style={styles.task}>
         <View style={styles.taskalign}>
           <TouchableOpacity style={styles.box}></TouchableOpacity>
             <Text style={styles.text}>Task 5</Text>
         </View>
         <View style={styles.circle}></View>
       </View>
     
   </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:'#e6f9ff'
  },
  heading:{
    color:'#4d79ff',
    fontSize:25,
    marginLeft:20,
    marginTop:100
    
  },
  logo:{
    marginLeft:100,
    
  },
  
  todobutton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight:20,
    marginLeft:20,
    marginBottom:28,
  },

  todotask:{
     marginBottom:80,
  },

  task: {
    backgroundColor: '#fff',
    padding: 15,
    width:310,
    borderRadius: 7,
    marginLeft:25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom:25,
  },
  taskalign: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  box: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderRadius: 2,
    marginRight: 15,


  },
  text: {
    fontSize:18,
  },
  circle: {
    width: 11,
    height: 11,
    borderColor: '#800000',
    borderWidth: 2,
    borderRadius: 8,
    marginBottom:18

  },

  
  
});

export default App;
