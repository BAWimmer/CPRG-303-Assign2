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

import Feather from "@expo/vector-icons/Feather";

export default function SubscriptionsScreen() {
  // Subscribed channels mock data
  const subscribedChannels = [
    {
      id: 1,
      name: "NHL",
      avatar: "https://picsum.photos/seed/NHL/60/60",
      isLive: false,
    },
    {
      id: 2,
      name: "Computer",
      avatar: "https://picsum.photos/seed/computer/60/60",
      isLive: false,
    },
    {
      id: 3,
      name: "Cooking",
      avatar: "https://picsum.photos/seed/cooking/60/60",
      isLive: true,
    },
    {
      id: 4,
      name: "Hiking",
      avatar: "https://picsum.photos/seed/hiking/60/60",
      isLive: true,
    },
    {
      id: 5,
      name: "Cats",
      avatar: "https://picsum.photos/seed/cats/60/60",
      isLive: false,
    },
  ];

  // Mock data for videos
  const videos = [
    {
      id: 1,
      title: "Unique Travel Destinations You Must Visit in 2025",
      channel: "Travelling Tips",
      views: "114K views",
      timeAgo: "4 days ago",
      duration: "27:53",
      thumbnail: "https://picsum.photos/seed/lake/320/180",
    },
    {
      id: 2,
      title: "Meals for University Students - Quick and Easy Recipes",
      channel: "Food Channel",
      views: "3.9K views",
      timeAgo: "1 day ago",
      duration: "15:42",
      thumbnail: "https://picsum.photos/seed/food/320/180",
    },
    {
      id: 3,
      title: "Best Gaming Moments of 2025 - Epic Compilation",
      channel: "GameHighlights",
      views: "2.1M views",
      timeAgo: "2 weeks ago",
      duration: "12:34",
      thumbnail: "https://picsum.photos/seed/gaming-moments/320/180",
    },
    {
      id: 4,
      title: "How to Build the Perfect PC Setup in 2025",
      channel: "TechReviewer",
      views: "845K views",
      timeAgo: "5 days ago",
      duration: "18:22",
      thumbnail: "https://picsum.photos/seed/pc-setup/320/180",
    },
  ];

  // Mock data for shorts
  const shorts = [
    {
      id: 1,
      thumbnail: "https://picsum.photos/seed/hiking/150/250",
      duration: "0:41",
    },
    {
      id: 2,
      thumbnail: "https://picsum.photos/seed/cooking/150/250",
      duration: "0:28",
    },
    {
      id: 3,
      thumbnail: "https://picsum.photos/seed/soccer/150/250",
      duration: "0:15",
    },
    {
      id: 4,
      thumbnail: "https://picsum.photos/seed/basketball/150/250",
      duration: "0:33",
    },
    {
      id: 5,
      thumbnail: "https://picsum.photos/seed/computer/150/250",
      duration: "0:52",
    },
  ];

  const filterTabs = ["All", "Today", "Videos", "Shorts", "Live", "Posts"];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0F0F0F" />
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
              <Text style={styles.headerIcon}>
                <Feather name="cast" size={24} color="white" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIconButton}>
              <Text style={styles.headerIcon}>
                <Feather name="bell" size={24} color="white" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIconButton}>
              <Text style={styles.headerIcon}>
                <Feather name="search" size={24} color="white" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      <ScrollView style={styles.scrollView}>
        {/* Subscribed Channels Row */}
        <View style={styles.channelsContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.channelsScroll}
          >
            {subscribedChannels.map((channel) => (
              <TouchableOpacity key={channel.id} style={styles.channelItem}>
                <View style={styles.avatarContainer}>
                  <Image
                    source={{ uri: channel.avatar }}
                    style={styles.avatar}
                  />
                  {channel.isLive && <View style={styles.liveIndicator} />}
                </View>
                <Text style={styles.channelName} numberOfLines={1}>
                  {channel.name}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.channelItem}>
              <View style={styles.allButton}>
                <Text style={styles.allButtonText}>All</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Filter Tabs */}
        <View style={styles.filterContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.filterScroll}
          >
            {filterTabs.map((tab, index) => (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.filterTab,
                  index === 0 && styles.activeFilterTab,
                ]}
              >
                <Text
                  style={[
                    styles.filterText,
                    index === 0 && styles.activeFilterText,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Most relevant</Text>
        </View>

        {/* Video List */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.videosContainer}
        >
          {videos.map((video) => (
            <TouchableOpacity key={video.id} style={styles.videoCard}>
              <View style={styles.thumbnailContainer}>
                <Image
                  source={{ uri: video.thumbnail }}
                  style={styles.thumbnail}
                />
                <View style={styles.durationBadge}>
                  <Text style={styles.durationText}>{video.duration}</Text>
                </View>
              </View>
              <View style={styles.videoInfo}>
                <Text style={styles.videoTitle} numberOfLines={2}>
                  {video.title}
                </Text>
                <Text style={styles.channelName}>{video.channel}</Text>
                <Text style={styles.videoMeta}>
                  {video.views} • {video.timeAgo}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Shorts Section */}
        <View style={styles.shortsHeader}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/d/d0/YouTube_full-color_icon_%282017%29.webp",
            }}
            style={styles.shortsLogo}
            resizeMode="contain"
          />
          <Text style={styles.shortsTitle}>Shorts</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.shortsContainer}
        >
          {shorts.map((short) => (
            <TouchableOpacity key={short.id} style={styles.shortItem}>
              <Image
                source={{ uri: short.thumbnail }}
                style={styles.shortThumbnail}
              />
              <View style={styles.shortDurationBadge}>
                <Text style={styles.shortDurationText}>{short.duration}</Text>
              </View>
              <TouchableOpacity style={styles.shortMoreButton}>
                <Text style={styles.moreButtonText}>⋮</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  channelsContainer: {
    paddingVertical: 12,
  },
  channelsScroll: {
    paddingHorizontal: 16,
  },
  channelItem: {
    alignItems: "center",
    marginRight: 16,
    width: 64,
  },
  avatarContainer: {
    position: "relative",
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginBottom: 4,
  },
  liveIndicator: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#FF0000",
    borderWidth: 2,
    borderColor: "#0F0F0F",
  },
  channelName: {
    color: "#AAAAAA",
    fontSize: 12,
    textAlign: "left",
  },
  allButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#272727",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  allButtonText: {
    color: "#3EA6FF",
    fontSize: 14,
    fontWeight: "bold",
  },
  filterContainer: {
    paddingVertical: 8,
  },
  filterScroll: {
    paddingHorizontal: 16,
  },
  filterTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: "#272727",
  },
  activeFilterTab: {
    backgroundColor: "white",
  },
  filterText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
  activeFilterText: {
    color: "black",
  },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  sectionTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  videosContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  videoCard: {
    width: 300,
    marginRight: 16,
    backgroundColor: "#0F0F0F",
  },
  thumbnailContainer: {
    position: "relative",
    marginBottom: 8,
  },
  thumbnail: {
    width: 300,
    height: 168,
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
    fontSize: 12,
    fontWeight: "500",
  },
  videoInfo: {
    flex: 1,
    paddingRight: 8,
  },
  videoTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 18,
    marginBottom: 4,
  },
  videoMeta: {
    color: "#AAAAAA",
    fontSize: 12,
    marginTop: 2,
  },
  cardMoreButton: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 12,
    padding: 4,
  },
  moreButtonText: {
    color: "white",
    fontSize: 16,
  },
  shortsHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 16,
  },
  shortsLogo: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  shortsTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  shortsContainer: {
    paddingHorizontal: 16,
  },
  shortItem: {
    position: "relative",
    marginRight: 12,
  },
  shortThumbnail: {
    width: 140,
    height: 250,
    borderRadius: 12,
  },
  shortDurationBadge: {
    position: "absolute",
    bottom: 8,
    left: 8,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 2,
  },
  shortDurationText: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
  },
  shortMoreButton: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 12,
    padding: 4,
  },
});
