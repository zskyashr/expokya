import { Text, View } from 'react-native';

export default function About() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Tentang Aplikasi</Text>
      <Text style={{ marginTop: 10 }}>
        Aplikasi ini dibuat untuk memenuhi keperluan tugas. Di dalam aplikasi ini terdapat tiga halaman utama yaitu:
      </Text>
      <Text style={{ marginTop: 5 }}>
        1. Home: Menampilkan informasi tentang Universitas Muhammadiyah Makassar.{"\n"}
        2. About: Menjelaskan tujuan dibuatnya aplikasi serta fungsi dari setiap halaman.{"\n"}
        3. Profil: Menampilkan data diri mahasiswa, termasuk nama, NIM, kelas, jurusan, fakultas, dan foto yang diambil dari file lokal.
      </Text>
    </View>
  );
}