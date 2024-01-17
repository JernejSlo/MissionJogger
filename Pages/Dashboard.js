import React from 'react';import { View, Text, StyleSheet, FlatList } from 'react-native';

const Dashboard = ({ username, location, activities, rank, connections }) => {
    return (
        <View style={styles.container}>
            <View style={styles.dashboardHeader}>
                <Text style={styles.headerText}>Dashboard</Text>
            </View>
            <View style={styles.dashboardContent}>
                <View style={styles.activitySection}>
                    <Text style={styles.sectionHeader}>Activities</Text>
                    <FlatList
                        data={activities}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <Text style={styles.activityText}>{item.name}</Text>
                        )}
                    />
                </View>
                <View style={styles.infoSection}>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Username:</Text>
                        <Text style={styles.value}>{username}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Location:</Text>
                        <Text style={styles.value}>{location}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Rank:</Text>
                        <Text style={styles.value}>{rank}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Connections:</Text>
                        <Text style={styles.value}>{connections.length}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    dashboardHeader: {
        height: 150,
        backgroundColor: '#008CBA',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    dashboardContent: {
        flex: 1,
        padding: 20,
    },
    activitySection: {
        marginBottom: 20,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    activityText: {
        fontSize: 16,
        marginBottom: 5,
    },
    infoSection: {
        flex: 1,
    },
    infoRow: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    label: {
        width: 100,
        fontSize: 16,
        fontWeight: 'bold',
    },
    value: {
        flex: 1,
        fontSize: 16,
    },
});

export default Dashboard;