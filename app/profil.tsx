import { Image, ScrollView, Text, View } from 'react-native';

export default function TabProfil() {
  return (
    <ScrollView 
      contentContainerStyle={{ 
        flexGrow: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 20, 
        backgroundColor: '#f5f5f5' 
      }}
    >
      <Image 
        source={require('../assets/images/fotoku.jpg')} 
        style={{ width: 150, height: 150, borderRadius: 75, marginBottom: 16 }} 
      />

      <Text style={{ 
        fontSize: 22, 
        fontWeight: 'bold', 
        marginBottom: 16, 
        color: '#333',
        textAlign: 'center'
      }}>
        Biodata Mahasiswa
      </Text>

      <View style={{ 
        backgroundColor: '#fff', 
        padding: 16, 
        borderRadius: 10, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 4, 
        elevation: 4, 
        width: '90%',
        alignItems: 'center'
      }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
          Zaskya Aulia Ashar
        </Text>
        <Text style={{ marginBottom: 4 }}>NIM: 105841105722</Text>
        <Text style={{ marginBottom: 4 }}>Kelas: 6-B</Text>
        <Text style={{ marginBottom: 4 }}>Jurusan: Teknik Informatika</Text>
        <Text style={{ marginBottom: 4 }}>Fakultas: Teknik</Text>
      </View>
    </ScrollView>
  );
}