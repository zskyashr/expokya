// Interface untuk data mahasiswa
export interface Student {
    id: string;
    name: string;
    nim: string;
    foto: string;
    prodi?: string;
    semester?: number;
    fakultas?: string;
    kelas?: string;
    status?: string;
    tahunMasuk?: string;
    ipk?: number;
}

// Data mahasiswa dengan informasi tambahan
export const students: Student[] = [
    { 
        id: '1', 
        name: 'BASO HAMZAH', 
        nim: '105841106922',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841106922_.jpg?1751871539',
        prodi: 'S1 Informatika',
        semester: 6,
        fakultas: 'Teknik',
        kelas: 'B',
        status: 'Aktif',
        tahunMasuk: '2022',
        ipk: 3.85,
    },
    {
        id: '2',
        name: 'FAUZIAH',
        nim: '105841107022',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107022_.jpg?1751871540',
        prodi: 'S1 Informatika',
        semester: 6,
        fakultas: 'Teknik',
        kelas: 'A',
        status: 'Aktif',
        tahunMasuk: '2022',
        ipk: 3.92,
    },
    {
        id: '3',
        name: 'ZALNA NUR ISLAMIAH',
        nim: '105841107122',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107122_.jpg?1751871541',
        prodi: 'S1 Informatika',
        semester: 6,
        fakultas: 'Teknik',
        kelas: 'A',
        status: 'Aktif',
        tahunMasuk: '2022',
        ipk: 3.78,
    },
    {
        id: '4',
        name: 'AHMAD RIZKI',
        nim: '105841107222',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107222_.jpg?1751871542',
        prodi: 'S1 Informatika',
        semester: 6,
        fakultas: 'Teknik',
        kelas: 'B',
        status: 'Aktif',
        tahunMasuk: '2022',
        ipk: 3.65,
    },
    {
        id: '5',
        name: 'SITI NURHALIZA',
        nim: '105841107322',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107322_.jpg?1751871543',
        prodi: 'S1 Informatika',
        semester: 6,
        fakultas: 'Teknik',
        kelas: 'A',
        status: 'Aktif',
        tahunMasuk: '2022',
        ipk: 3.89,
    },
    {
        id: '6',
        name: 'MUHAMMAD FADLI',
        nim: '105841107422',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107422_.jpg?1751871544',
        prodi: 'S1 Informatika',
        semester: 6,
        fakultas: 'Teknik',
        kelas: 'B',
        status: 'Aktif',
        tahunMasuk: '2022',
        ipk: 3.72,
    },
    {
        id: '7',
        name: 'NURUL AZIZAH',
        nim: '105841107522',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107522_.jpg?1751871545',
        prodi: 'S1 Informatika',
        semester: 6,
        fakultas: 'Teknik',
        kelas: 'A',
        status: 'Aktif',
        tahunMasuk: '2022',
        ipk: 3.94,
    },
    {
        id: '8',
        name: 'DIMAS PRATAMA',
        nim: '105841107622',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107622_.jpg?1751871546',
        prodi: 'S1 Informatika',
        semester: 6,
        fakultas: 'Teknik',
        kelas: 'B',
        status: 'Aktif',
        tahunMasuk: '2022',
        ipk: 3.68,
    },
    {
        id: '9',
        name: 'SARAH AMELIA',
        nim: '105841107722',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107722_.jpg?1751871547',
        prodi: 'S1 Informatika',
        semester: 6,
        fakultas: 'Teknik',
        kelas: 'A',
        status: 'Aktif',
        tahunMasuk: '2022',
        ipk: 3.87,
    },
    {
        id: '10',
        name: 'IRFAN SETIAWAN',
        nim: '105841107822',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107822_.jpg?1751871548',
        prodi: 'S1 Informatika',
        semester: 6,
        fakultas: 'Teknik',
        kelas: 'B',
        status: 'Aktif',
        tahunMasuk: '2022',
        ipk: 3.76,
    }
];

// Fungsi helper untuk mendapatkan mahasiswa berdasarkan ID
export const getStudentById = (id: string): Student | undefined => {
    return students.find(student => student.id === id);
};

// Fungsi helper untuk mendapatkan semua mahasiswa
export const getAllStudents = (): Student[] => {
    return students;
};

// Fungsi helper untuk mendapatkan mahasiswa secara random
export const getRandomStudent = (): Student => {
    const randomIndex = Math.floor(Math.random() * students.length);
    return students[randomIndex];
};