import { Ionicons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
    Animated,
    FlatList,
    Image,
    RefreshControl,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { getAllStudents } from '../../data/student';

export default function Students() {
    const [searchQuery, setSearchQuery] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    
    // Get students from data file
    const students = getAllStudents();
    

    
    const fabAnim = useRef(new Animated.Value(1)).current;
    
    // Animate FAB on mount
    useEffect(() => {
        Animated.sequence([
            Animated.timing(fabAnim, {
                toValue: 1.1,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(fabAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start();
    }, [fabAnim]);
    
    // Filter students based on search query
    const filteredStudents = useMemo(() => {
        if (!searchQuery.trim()) return students;
        return students.filter(student => 
            student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            student.nim.includes(searchQuery)
        );
    }, [searchQuery, students]);

    const onRefresh = async () => {
        setRefreshing(true);
        // Simulate refresh delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setRefreshing(false);
    };

    const toggleSearch = () => {
        setShowSearch(!showSearch);
        if (showSearch) {
            setSearchQuery('');
        }
    };
    const renderStudent = ({ item }: { item: typeof students[0] }) => (
        <Link 
            href={{ pathname: "/user/[Id]", params: { Id: item.id } }} // pastikan sesuai nama file
            asChild
        >
            <TouchableOpacity style={styles.studentCard}>
                <View style={styles.avatarContainer}>
                    <Image 
                        source={{ uri: item.foto }}
                        style={styles.avatar}
                        resizeMode="cover"
                    />
                    <View style={styles.statusIndicator}>
                        <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
                    </View>
                </View>
                <View style={styles.studentInfo}>
                    <View style={styles.nameContainer}>
                        <Ionicons name="person-circle-outline" size={16} color="#2196F3" style={styles.nameIcon} />
                        <Text style={styles.studentName}>{item.name}</Text>
                    </View>
                    <View style={styles.nimContainer}>
                        <Ionicons name="id-card-outline" size={14} color="#666" style={styles.nimIcon} />
                        <Text style={styles.studentNim}>NIM: {item.nim}</Text>
                    </View>
                </View>
                <View style={styles.actionContainer}>
                    <Ionicons name="chevron-forward" size={24} color="#666" />
                </View>
            </TouchableOpacity>
        </Link>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerIconContainer}>
                    <Ionicons name="school" size={32} color="#2196F3" />
                </View>
                <Text style={styles.headerTitle}>Daftar Mahasiswa</Text>
                <View style={styles.headerSubtitleContainer}>
                    <Ionicons name="people" size={16} color="#666" style={styles.countIcon} />
                    <Text style={styles.headerSubtitle}>
                        Total: {filteredStudents.length} mahasiswa
                    </Text>
                </View>
                
                {/* Search Toggle Button */}
                <TouchableOpacity 
                    style={styles.searchToggle}
                    onPress={toggleSearch}
                    activeOpacity={0.7}
                >
                    <Ionicons name={showSearch ? "close" : "search"} size={24} color="#2196F3" />
                </TouchableOpacity>
            </View>
            
            {/* Search Bar */}
            {showSearch && (
                <View style={styles.searchContainer}>
                    <View style={styles.searchInputContainer}>
                        <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Cari nama atau NIM mahasiswa..."
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                            placeholderTextColor="#999"
                        />
                        {searchQuery.length > 0 && (
                            <TouchableOpacity onPress={() => setSearchQuery('')}>
                                <Ionicons name="close-circle" size={20} color="#999" />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            )}
            
            <FlatList
                data={filteredStudents}
                renderItem={renderStudent}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={['#2196F3']}
                        tintColor="#2196F3"
                    />
                }
                ListEmptyComponent={() => (
                    <View style={styles.emptyContainer}>
                        <Ionicons name="search" size={64} color="#ccc" />
                        <Text style={styles.emptyText}>Tidak ada mahasiswa ditemukan</Text>
                        <Text style={styles.emptySubtext}>Coba kata kunci lain</Text>
                    </View>
                )}
            />
            
            {/* Floating Action Button for Quick Navigation */}
            <Animated.View style={[styles.fab, { transform: [{ scale: fabAnim }] }]}>
                <TouchableOpacity 
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => router.push('../(tabs)/profile')} // pastikan nama file sesuai
                    activeOpacity={0.8}
                >
                    <Ionicons name="person" size={20} color="#fff" />
                    <Text style={styles.fabText}>Profile</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#fff',
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        position: 'relative',
    },
    searchToggle: {
        position: 'absolute',
        top: 20,
        right: 20,
        padding: 8,
        borderRadius: 20,
        backgroundColor: '#f0f8ff',
    },
    headerIconContainer: {
        marginBottom: 8,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2196F3',
        marginTop: 5,
        fontFamily: 'fontBas',
    },
    headerSubtitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    countIcon: {
        marginRight: 6,
    },
    headerSubtitle: {
        fontSize: 16,
        color: '#666',
        fontFamily: 'fontBas',
    },
    searchContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    searchInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'fontBas',
        color: '#333',
    },
    listContainer: {
        padding: 15,
    },
    studentCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    avatarContainer: {
        position: 'relative',
        marginRight: 15,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#e0e0e0',
    },
    statusIndicator: {
        position: 'absolute',
        bottom: -2,
        right: -2,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 1,
    },
    studentInfo: {
        flex: 1,
    },
    actionContainer: {
        padding: 5,
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    nameIcon: {
        marginRight: 6,
    },
    studentName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        fontFamily: 'fontBas',
        flex: 1,
    },
    nimContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nimIcon: {
        marginRight: 6,
    },
    studentNim: {
        fontSize: 14,
        color: '#666',
        fontFamily: 'fontBas',
    },
    fab: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#2196F3',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    fabText: {
        fontSize: 10,
        color: '#fff',
        fontFamily: 'fontBas',
        fontWeight: 'bold',
        marginTop: 2,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 50,
    },
    emptyText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#666',
        marginBottom: 8,
        fontFamily: 'fontBas',
    },
    emptySubtext: {
        fontSize: 14,
        color: '#999',
        fontFamily: 'fontBas',
    },
});