import React from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {

  //filler user uploads
  const uploads = [

    {
      id: 1,
      thumbnail: "https://picsum.photos/seed/upload3/320/180",
      title: "User Interface Guide",
      duration: "10:34"
    },

    {
      id: 2,
      thumbnail: "https://picsum.photos/seed/upload2/320/180",
      title: "Top 5 Expo Tips",
      duration: "8:32"
    },

    {
      id: 3,
      thumbnail: "https://picsum.photos/seed/upload1/320/180",
      title: "Beginner's Guide to Expo",
      duration: "23:10"
    },

  ]
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="0F0F0F" />

      <SafeAreaView style={styles.safeArea}>
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/d/d0/YouTube_full-color_icon_%282017%29.webp",
                }}
                style={styles.youtubeIcon}
                resizeMode="contain"
              />
              <Text style={styles.youtubeText}>YouTube</Text>
            </View>
  
            <View style={styles.headerIcons}>
              <TouchableOpacity style={styles.headerIconButton}>
                <Text style={styles.headerIcon}>📺</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerIconButton}>
                <Text style={styles.headerIcon}>🔔</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerIconButton}>
                <Text style={styles.headerIcon}>🔍</Text>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView>

            {/*profile header*/}
            <View style={styles.profHeader}>
              <Image 
              source= {{ uri: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"}}
              style={styles.avatar}/>
              <Text style={styles.userName}>@lebronjames</Text>
              <Text style={styles.userDesc}>
                React Native Dev
              </Text>
              <View style={styles.statsContainer}>
                <View style={styles.stat}>
                  <Text style={styles.statNum}>10.3M</Text>
                  <Text style={styles.statLabel}>Subscribers</Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statNum}>45</Text>
                  <Text style={styles.statLabel}>Videos</Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statNum}>100.2B</Text>
                  <Text style={styles.statLabel}>Views</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editButtonText}>Edit Profile</Text>
              </TouchableOpacity>
            </View>

            {/*user upload section*/}
            <View style={styles.uploadsSection}>
              <Text style={styles.sectionTitle}>Uploads</Text>
              {uploads.map((upload) => (
                <View key={upload.id} style={styles.videoCard}>
                  <Image
                    source={{ uri: upload.thumbnail }}
                    style={styles.videoThumbnail}
                  />
                  <View style={styles.durationBadge}>
                    <Text style={styles.durationText}>{upload.duration}</Text>
                  </View>
                  <Text style={styles.videoTitle}>{upload.title}</Text>
                </View>
              ))}
            </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
  },
  safeArea: {
    backgroundColor: "#0F0F0F",
  },
  profHeader: {
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#222",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  userDesc: {
    color: "#AAAAAA",
    fontSize: 14,
    textAlign: "center",
    marginTop: 4,
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginVertical: 12,
  },
  stat: {
    alignItems: "center",
  },
  statNum: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  statLabel: {
    color: "#AAAAAA",
    fontSize: 12,
  },
  editButton: {
    backgroundColor: "#272727",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  editButtonText: {
    color: "#3EA6FF",
    fontWeight: "bold",
    fontSize: 14,
  },
  uploadsSection: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  sectionTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  videoCard: {
    marginBottom: 16,
  },
  videoThumbnail: {
    width: "100%",
    height: 180,
    borderRadius: 8,
  },
  videoTitle: {
    color: "white",
    fontSize: 14,
    marginTop: 6,
  },
  durationBadge: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "rgba(0,0,0,0.8)",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 2,
  },
  durationText: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerIconButton: {
    marginLeft: 20,
    padding: 4,
  },
  headerIcon: {
    fontSize: 20,
    color: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
    paddingVertical: 8,
    backgroundColor: "#0F0F0F",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  youtubeIcon: {
    width: 32,
    height: 22,
    marginRight: 8,
  },
  youtubeText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

});
