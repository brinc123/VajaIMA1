import { useState } from 'react';
import { Image, StyleSheet, Pressable } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import TretjaScreen from './tretja';

export default function HomeScreen() {
  const [prikaziOpis, setPrikaziOpis] = useState(false);
  const [prikaziTretjo, setPrikaziTretjo] = useState(false);

  if (prikaziTretjo) {
    return (

           <ThemedView style={styles.container}>
        <ThemedText>obožujem raziskovanje novih krajev,fotografijo, ter doomscrolanje po fb marketplace.</ThemedText>
        <Image source={require('../../assets/images/slika.jpg')} style={styles.slika} />
      </ThemedView>
    )
  }

  if (prikaziOpis) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>aplikacija prikazuje posnetke s potovanj.</ThemedText>
        <Image source={require('../../assets/images/croppedDSC00537.jpg')} style={styles.slika} />
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Brin.</ThemedText>
      <ThemedText type="code">Pogled v življenje</ThemedText>
      
      <Pressable onPress={() => setPrikaziOpis(true)}>
        <ThemedText style={{ color: 'white', fontSize: 18, marginTop: 30 }}>
          opis
        </ThemedText>
      </Pressable>

      <Pressable onPress={() => setPrikaziTretjo(true)}>
        <ThemedText style={{ color: 'white', fontSize: 18, marginTop: 10 }}>
          o meni
        </ThemedText>
      </Pressable>

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  slika: {
    width: 900,
    height: 540,
    borderRadius: 8,
  },
});