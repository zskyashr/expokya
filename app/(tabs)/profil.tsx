import { Image, ScrollView, Text } from 'react-native';

export default function Profil() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Image
        source={require('../../assets/images/fotoku.jpg')}
        style={{ width: 200, height: 200 }}
      />
      <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 5 }}>
        Nama: Zaskya Aulia Ashar
      </Text>
      <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 5 }}>
        Nim: 105841105722
      </Text>
      <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 5 }}>
        Kelas: 6B
      </Text>
      <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 5 }}>
        Jurusan: Teknik Informatika
      </Text>
      <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 5 }}>
        Fakultas: Teknik
      </Text>
    </ScrollView>
  );
}