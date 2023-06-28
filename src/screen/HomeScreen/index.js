import { View, Text } from 'react-native'
import React,{useEffect} from 'react'

const HomeScreen = () => {
    useEffect(() => {
     getData()
    }, [])

    const getData = async()=>{
        
    }
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen