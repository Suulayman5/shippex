import {Platform, SafeAreaView, StatusBar, StyleSheet, View,  } from 'react-native'
import React from 'react'
import {defaultTo} from 'lodash';
import { scaledSize } from '../utils';

import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginHorizontal: scaledSize(16),flex: 1,}}>
          {children}
      </View>
    </SafeAreaView>
  )
}

export default Layout

const styles = StyleSheet.create({
    container: {
        flex: 1,
            paddingTop:
      Platform.OS === 'ios'
        ? defaultTo(StatusBar.currentHeight, 0) + scaledSize(8)
        : defaultTo(StatusBar.currentHeight, 0) + scaledSize(0),
        // paddingHorizontal:Platform.OS === 'ios'? scaledSize(24): scaledSize(16),
        backgroundColor: '#ffffff',
        // justifyContent: 'center',
        // alignItems: 'center',
    }
})