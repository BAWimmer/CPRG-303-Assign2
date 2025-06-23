import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function ProfileScreen() {
  // Mock data for history videos
  const historyVideos = [
    {
      id: 1,
      title: "Made up video title - One Minute Overview",
      channel: "Channel Name",
      thumbnail: "https://picsum.photos/seed/picture1/320/180",
      duration: "1:23",
    },
    {
      id: 2,
      title: "Weather in the Winter - Snow on Trees",
      channel: "Snow in June",
      thumbnail: "https://picsum.photos/seed/picture2/320/180",
      duration: "8:45",
    },
    {
      id: 3,
      title: "Fake Video Name - Nothing to See Here",
      channel: "Fake Channel Name",
      thumbnail: "https://picsum.photos/seed/picture3/320/180",
      duration: "12:34",
    },
    {
      id: 4,
      title: "Another Fake Video - Just for Fun",
      channel: "Fun Channel",
      thumbnail: "https://picsum.photos/seed/picture4/320/180",
      duration: "5:00",
    },
  ];

  // Mock data for playlists
  const playlists = [
    {
      id: 1,
      title: "Liked videos",
      privacy: "Private",
      videoCount: 54,
      thumbnail: "https://picsum.photos/seed/liked/320/180",
      icon: <Entypo name="thumbs-up" size={24} color="white" />,
    },
    {
      id: 2,
      title: "Watch later",
      privacy: "Private",
      videoCount: 8,
      thumbnail: "https://picsum.photos/seed/watchlater/320/180",
      icon: <Feather name="clock" size={24} color="white" />,
    },
    {
      id: 3,
      title: "Favorites",
      privacy: "Public",
      videoCount: 12,
      thumbnail: "https://picsum.photos/seed/favorites/320/180",
      icon: <AntDesign name="star" size={24} color="white" />,
    },
    {
      id: 4,
      title: "My Playlist",
      privacy: "Private",
      videoCount: 20,
      thumbnail: "https://picsum.photos/seed/myplaylist/320/180",
      icon: <Entypo name="music" size={24} color="white" />,
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0F0F0F" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerIconButton}>
            <Text style={styles.headerIcon}>
              <Feather name="cast" size={24} color="white" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIconButton}>
            <Text style={styles.headerIcon}>
              <Feather name="bell" size={24} color="white" />
            </Text>
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationText}>2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIconButton}>
            <Feather name="search" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIconButton}>
            <Text style={styles.headerIcon}>
              <AntDesign name="setting" size={24} color="white" />
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView style={styles.scrollView}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileHeader}>
            <View style={styles.profileAvatar}>
              <Text style={styles.profileInitial}>P</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Profile Name</Text>
              <Text style={styles.profileHandle}>
                @profilename99 • View channel
              </Text>
            </View>
          </View>

          {/* Account Options */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            <View style={styles.accountOptions}>
              <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.optionIcon}>
                  <MaterialIcons
                    name="switch-account"
                    size={24}
                    color="white"
                  />
                </Text>
                <Text style={styles.optionText}>Switch account</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.optionIcon}>
                  <FontAwesome name="google" size={24} color="white" />
                </Text>
                <Text style={styles.optionText}>Google Account</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.optionIcon}>
                  <MaterialCommunityIcons
                    name="incognito"
                    size={24}
                    color="white"
                  />
                </Text>
                <Text style={styles.optionText}>Turn on Incognito</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.optionIcon}>
                  <FontAwesome5 name="share" size={24} color="white" />
                </Text>
                <Text style={styles.optionText}>Share Channel</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        {/* History Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>History</Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            {historyVideos.map((video) => (
              <TouchableOpacity key={video.id} style={styles.historyCard}>
                <View style={styles.historyThumbnailContainer}>
                  <Image
                    source={{ uri: video.thumbnail }}
                    style={styles.historyThumbnail}
                  />
                  <View style={styles.durationBadge}>
                    <Text style={styles.durationText}>{video.duration}</Text>
                  </View>
                  <TouchableOpacity style={styles.cardMoreButton}>
                    <Text style={styles.moreButtonText}>⋮</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.historyInfo}>
                  <Text style={styles.historyTitle} numberOfLines={2}>
                    {video.title}
                  </Text>
                  <Text style={styles.historyChannel}>{video.channel}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Playlists Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Playlists</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            {playlists.map((playlist) => (
              <TouchableOpacity key={playlist.id} style={styles.playlistCard}>
                <View style={styles.playlistThumbnailContainer}>
                  <Image
                    source={{ uri: playlist.thumbnail }}
                    style={styles.playlistThumbnail}
                  />
                  <View style={styles.darkOverlay} />
                  <View style={styles.playlistOverlay}>
                    <Text style={styles.playlistIcon}>{playlist.icon}</Text>
                    <Text style={styles.playlistCount}>
                      {playlist.videoCount}
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.cardMoreButton}>
                    <Text style={styles.moreButtonText}>⋮</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.playlistInfo}>
                  <Text style={styles.playlistTitle} numberOfLines={1}>
                    {playlist.title}
                  </Text>
                  <Text style={styles.playlistPrivacy}>{playlist.privacy}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>
              <Foundation name="play-video" size={24} color="white" />
            </Text>
            <Text style={styles.menuText}>Your videos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>
              <MaterialCommunityIcons
                name="movie-open"
                size={24}
                color="white"
              />
            </Text>
            <Text style={styles.menuText}>Your movies & TV</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>
              <AntDesign name="youtube" size={24} color="white" />
            </Text>
            <Text style={styles.menuText}>Get YouTube Premium</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>
              <Foundation name="graph-bar" size={24} color="white" />
            </Text>
            <Text style={styles.menuText}>Time watched</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>
              <AntDesign name="questioncircleo" size={24} color="white" />
            </Text>
            <Text style={styles.menuText}>Help & Feedback</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#0F0F0F",
  },
  headerIconButton: {
    marginLeft: 20,
    padding: 4,
    position: "relative",
  },
  headerIcon: {
    fontSize: 20,
    color: "white",
  },
  notificationBadge: {
    position: "absolute",
    top: -2,
    right: -2,
    backgroundColor: "#FF0000",
    borderRadius: 10,
    minWidth: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
  },
  profileSection: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#00BCD4",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  profileInitial: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  profileHandle: {
    color: "#AAAAAA",
    fontSize: 14,
  },
  accountOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#272727",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    flex: 1,
    marginHorizontal: 4,
  },
  optionIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  optionText: {
    color: "white",
    fontSize: 12,
    flex: 1,
  },
  section: {
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    flex: 1,
  },
  addButton: {
    backgroundColor: "#272727",
    borderRadius: 20,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  addButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  viewAllButton: {
    backgroundColor: "#272727",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  viewAllText: {
    color: "white",
    fontSize: 14,
  },
  horizontalScroll: {
    paddingHorizontal: 16,
  },
  historyCard: {
    width: 160,
    marginRight: 12,
  },
  historyThumbnailContainer: {
    position: "relative",
    marginBottom: 8,
  },
  historyThumbnail: {
    width: 160,
    height: 90,
    borderRadius: 8,
  },
  durationBadge: {
    position: "absolute",
    bottom: 4,
    right: 4,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 2,
  },
  durationText: {
    color: "white",
    fontSize: 10,
    fontWeight: "500",
  },
  cardMoreButton: {
    position: "absolute",
    top: 4,
    right: 4,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 12,
    padding: 4,
  },
  moreButtonText: {
    color: "white",
    fontSize: 12,
  },
  historyInfo: {
    paddingRight: 8,
  },
  historyTitle: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16,
    marginBottom: 2,
  },
  historyChannel: {
    color: "#AAAAAA",
    fontSize: 11,
  },
  playlistCard: {
    width: 160,
    marginRight: 12,
  },
  playlistThumbnailContainer: {
    position: "relative",
    marginBottom: 8,
  },
  darkOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 1,
  },
  playlistThumbnail: {
    width: 160,
    height: 90,
    borderRadius: 8,
  },
  playlistOverlay: {
    position: "absolute",
    bottom: 8,
    left: 8,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 2,
  },
  playlistIcon: {
    fontSize: 16,
    marginRight: 4,
  },
  playlistCount: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  playlistInfo: {
    paddingRight: 8,
  },
  playlistTitle: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 2,
  },
  playlistPrivacy: {
    color: "#AAAAAA",
    fontSize: 11,
  },
  menuSection: {
    marginTop: 32,
    paddingHorizontal: 16,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#272727",
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 16,
    width: 24,
  },
  menuText: {
    color: "white",
    fontSize: 16,
    flex: 1,
  },
});
