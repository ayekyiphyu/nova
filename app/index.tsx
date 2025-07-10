import * as React from 'react';
import { StyleSheet, Text, View } from "react-native";


export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Header Title</Text>
      </View>

      <View style={styles.main}>
        <Text style={styles.title}>My React Expo</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Develop by AYEKYIPHYU. All rights reserved.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },

  header: {
    width: '100%',
    paddingVertical: 12,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  footer: {
    width: '100%',
    paddingVertical: 12,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
});
