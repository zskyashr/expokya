import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
        <Text style={styles.subtitle}>UNISMUH MAKASSAR</Text>
      </View>

      {/* Gambar dan Informasi Pertama */}
      <View style={styles.section}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/unismuh1.png')}
            style={styles.image}
            resizeMode="cover"
            onLoad={() => console.log('✅ Unismuh1.png berhasil dimuat!')}
            onError={(error) => {
              console.log('❌ Gagal memuat unismuh1.png:', error);
            }}
          />
          <View style={styles.imageOverlay}>
            <Text style={styles.imageLabel}>🏛️ Kampus Unismuh Makassar</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.description}>
            Unismuh Makassar adalah perguruan tinggi swasta yang berkomitmen dalam menghasilkan lulusan yang berkualitas, berakhlak mulia, dan berdaya saing tinggi. Dengan visi menjadi universitas unggul yang berbasis nilai-nilai Islam, Unismuh Makassar terus mengembangkan program pendidikan yang inovatif dan relevan dengan kebutuhan zaman.
          </Text>
        </View>
      </View>

      {/* Gambar dan Informasi Kedua */}
      <View style={styles.section}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/unismuh2.png')}
            style={styles.image}
            resizeMode="cover"
            onLoad={() => console.log('✅ Unismuh2.png berhasil dimuat!')}
            onError={(error) => {
              console.log('❌ Gagal memuat unismuh2.png:', error);
            }}
          />
          <View style={styles.imageOverlay}>
            <Text style={styles.imageLabel}>🏆 Akreditasi Unggul Unismuh</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.description}>
            UNISMUH MAKASSAR MERAIH AKREDITASI UNGGUL! Pencapaian gemilang ini merupakan bukti komitmen universitas dalam memberikan pendidikan berkualitas tinggi. Dengan akreditasi unggul, Unismuh Makassar semakin mantap dalam melangkah maju sebagai institusi pendidikan yang terdepan di Indonesia Timur.
          </Text>
        </View>
      </View>

      {/* Informasi Tambahan */}
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Keunggulan Unismuh Makassar:</Text>
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.bulletText}>Akreditasi Unggul</Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.bulletText}>Berbasis Nilai-nilai Islam</Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.bulletText}>Fasilitas Modern dan Lengkap</Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.bulletText}>Dosen Berkualitas dan Berpengalaman</Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.bulletText}>Program Studi Terakreditasi</Text>
        </View>
      </View>

      {/* Quick Navigation */}
      <View style={styles.navSection}>
        <Text style={styles.navTitle}>Navigasi Cepat</Text>
        
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => router.push('../(tabs)/students')}
        >
          <Ionicons name="people" size={24} color="#fff" />
          <View style={styles.navButtonContent}>
            <Text style={styles.navButtonText}>Daftar Mahasiswa</Text>
            <Text style={styles.navButtonSubtext}>Lihat semua mahasiswa</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#fff" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => router.push('../(tabs)/profile')}
        >
          <Ionicons name="person" size={24} color="#fff" />
          <View style={styles.navButtonContent}>
            <Text style={styles.navButtonText}>Profil Mahasiswa</Text>
            <Text style={styles.navButtonSubtext}>Data pribadi & akademik</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2196F3',
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 5,
    fontFamily: 'fontBas',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Font2-Cursive-Bold',
  },
  section: {
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  // ✨ AREA FOTO DIPERBESAR - Pilih salah satu ukuran di bawah:
  // Opsi 1: Sedang (350px) - AKTIF SEKARANG
  imageContainer: {
    width: '100%',
    height: 1000,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  // Opsi 2: Besar (400px) - Uncomment untuk menggunakan
  // imageContainer: {
  //   width: '100%',
  //   height: 400,
  //   backgroundColor: '#ffffff',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   position: 'relative',
  //   overflow: 'hidden',
  // },
  // Opsi 3: Sangat Besar (450px) - Uncomment untuk menggunakan  
  // imageContainer: {
  //   width: '100%',
  //   height: 450,
  //   backgroundColor: '#ffffff',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   position: 'relative',
  //   overflow: 'hidden',
  // },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f8f9fa',
    // ✨ Gunakan 'contain' untuk menampilkan gambar lengkap
    // atau 'cover' untuk mengisi seluruh area (default)
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(33, 150, 243, 0.9)',
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  imageLabel: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'fontBas',
    textAlign: 'center',
  },
  textContainer: {
    padding: 20,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: '#333',
    textAlign: 'justify',
    fontFamily: 'fontBas',
  },
  infoSection: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 15,
    fontFamily: 'fontBas',
  },
  bulletPoint: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 16,
    color: '#2196F3',
    fontWeight: 'bold',
    marginRight: 5,
  },
  bulletText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    fontFamily: 'fontBas',
  },
  navSection: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  navTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 15,
    fontFamily: 'fontBas',
  },
  navButton: {
    backgroundColor: '#2196F3',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
  },
  navButtonContent: {
    flex: 1,
    marginLeft: 15,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'fontBas',
  },
  navButtonSubtext: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    marginTop: 2,
    fontFamily: 'fontBas',
  },
});