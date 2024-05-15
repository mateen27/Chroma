import { useState } from 'react';
import { View , Text , StyleSheet , Pressable} from 'react-native';
const App = () => {
  const[bgColor , setBgColor] = useState(`rgb(127 , 0 , 255)`);

  function bgColorChanger(){
    // for generating Random Color's
    const randomColor = `rgb(${Math.floor(Math.random()*256)} , ${Math.floor(Math.random()*256)} , ${Math.floor(Math.floor(Math.random() * 256))})`
    setBgColor(randomColor);
  }

  function resetColor(){
    //  for resetting the Color
    setBgColor(`rgb(127 , 0 , 255)`);
  }
  return(
      <View style = {[styles.container , {backgroundColor : bgColor}]}>
        <Text style = {styles.heading}>Background Changer App</Text>
        <View>
          <Pressable onPress={bgColorChanger}><Text style = {styles.buttonStyle}>Click Me!</Text></Pressable>
        </View>
        <View>
          <Pressable onPress={resetColor}><Text style = {styles.resetButton}>Reset</Text></Pressable>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container : {
      flex:1 , 
      justifyContent : 'center' , 
      alignItems : 'center' , 
    }, 
    
    heading : {
      fontSize : 25 ,
      color : 'white'
    } ,

    buttonStyle : {
      fontSize : 18 ,
      padding : 20 , 
      margin : 10 , 
      backgroundColor : 'black' , 
      color : 'white' , 
      borderRadius : 10
    } ,

    resetButton : {
      padding : 15 ,
      fontWeight : 'bold' ,
      color : 'white' ,
      backgroundColor : 'orange' ,
      borderRadius : 10 ,
      color : 'black' , 
    }
})

export default App;