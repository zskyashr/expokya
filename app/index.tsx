import { Image, ScrollView, Text, View } from 'react-native';

export default function TabHome() {
  return (
    <ScrollView 
      contentContainerStyle={{ 
        flexGrow: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 20, 
        backgroundColor: '#f5f5f5' // latar belakang lembut
      }}
    >
      <Text style={{ 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 16, 
        color: '#333', 
        textAlign: 'center' 
      }}>
        Universitas Muhammadiyah Makassar
      </Text>

      <Image 
        source={require('../assets/images/logounismuh.jpg')} 
        style={{ 
          width: 300, 
          height: 200,  
          marginBottom: 12,
          borderRadius: 10, 
        }} 
        resizeMode="cover" 
      />

      <View style={{ 
        backgroundColor: '#fff', 
        padding: 16, 
        borderRadius: 10, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 4, 
        elevation: 4, // Android
        width: '100%'
      }}>
        <Text style={{ 
          textAlign: 'center', 
          fontSize: 16, 
          color: '#555' 
        }}>
          Universitas Muhammadiyah Makassar, yang lebih dikenal dengan nama Unismuh Makassar, 
          adalah salah satu perguruan tinggi swasta ternama di Indonesia Timur. Berdiri sejak tahun 1963, 
          kampus ini terletak di Jalan Sultan Alauddin No. 259, Makassar, Sulawesi Selatan. 
          Dengan semangat “Ilmu Amaliah, Amal Ilmiah, dan Akhlakul Karimah”, 
          Unismuh berkomitmen mencetak lulusan yang unggul dalam bidang akademik sekaligus memiliki akhlak mulia. 
          Memiliki berbagai fakultas dan program studi, Unismuh Makassar aktif mengembangkan pendidikan, penelitian, dan pengabdian kepada masyarakat, 
          serta menjadi pusat pengembangan ilmu pengetahuan berbasis nilai-nilai Islam.
        </Text>
      </View>
    </ScrollView>
  );
}