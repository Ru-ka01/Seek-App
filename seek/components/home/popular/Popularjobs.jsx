import React from 'react'
import { 
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator, 
  FlatList } from 'react-native'
import { useState } from 'react'
import styles from './popularjobs.style'
import {COLORS,SIZES} from '../../../constants'; 
import  PopularJobCard  from '../../common/cards/popular/PopularJobCard';
import { useRouter } from 'expo-router';
import useFetch from '../../../hook/useFetch'


const Popularjobs = () => {

  const router =useRouter();

  const {data,isLoading,error}=useFetch('search',{
    query:'React developer',
    num_pages: '1', 
  })
  // console.log(data)
  const [selectedJob,setSelectedjob]=useState()

  const handleCardPress=(item)=>{
    router.push(`/job-details/${item.job_id}`);
    setSelectedjob(item.job_id)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>Popularjobs</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>
          show all
        </Text>
      </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary}/>
        ):error ?(
          <Text>someting went wrong</Text>
        ):(
        <FlatList
        horizontal={true}
        data={data}
        renderItem={({item})=>(
          <PopularJobCard
            selectedJob={selectedJob}
            handleCardPress={handleCardPress}
            item={item}
          />
        )}
        keyExtractor={(item)=>item.job_id}
        contentContainerStyle={{columnGap:SIZES.medium}}

        />
        )}
      </View>
    </View>
  )
}

export default Popularjobs