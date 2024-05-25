import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
      <Link href="/" style={{color: 'blue'}}>Back to Home</Link>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})