import React from 'react'
import { useState } from 'react'
import { Image } from 'expo-image'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native'
import { useRouter } from 'expo-router'
import {icons,SIZES} from '../../../constants';
import styles from './welcome.style'
import { SafeAreaView } from 'react-native-safe-area-context'
const jobTypes=["Full-time","Part-time","Contract"]



const Welcome = ({searchTerm,setSearchTerm,handleClick}) => {

  const router= useRouter();
  const [activeJobType, setActiveJobType]=useState('Full-time')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}> Hello Ruka</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}
          value={searchTerm}
          onChangeText={(text)=>setSearchTerm(text)}
          placeholder='what are you looking for?' />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            contentFit='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
{/* 
     <ScrollView>
     {jobTypes.map((item,index)=>(
      <View key={index}>
        <Text>{item}</Text>
      </View>
     ))}
     </ScrollView> */}

     <View style={styles.tabsContainer}>
      <FlatList
      horizontal={true}
        data={jobTypes}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.tab(activeJobType,item)}
            onPress={()=>{
              setActiveJobType(item); 
              router.push(`/search/${item}`)
            }}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ) }
        keyExtractor={item=>item}
        contentContainerStyle={{columnGap:SIZES.small}}
      />
     </View>
        
      

    </View>

  )
}

export default Welcome