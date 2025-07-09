
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HelloWave } from '@/src/components/common/HelloWave';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFB6C1', dark: '#FF6B9D' }}
      headerImage={
        <Image
          source={require('@/assets/images/splash-icon.png')} // You'll need to add this image
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Baby Clothes Shop</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Featured Products</ThemedText>
        <ThemedText>
          Discover our latest collection of adorable baby clothes,
          perfect for your little ones.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">New Arrivals</ThemedText>
        <ThemedText>
          Check out our newest items that just arrived in the store.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Special Offers</ThemedText>
        <ThemedText>
          Don&apos;t miss out on our current promotions and discounts.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});