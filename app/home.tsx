import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function HomeScreen() {
  
  const filterTabs = ["All", "Gaming", "Sports", "NBA", "Live", "News", "Comedy"];

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
      title: "Lebron's Retirement Plans",
      channel: "NBA News",
      views: "5.6M views",
      timeAgo: "5 days ago",
      duration: "21:36",
      thumbnail: "https://picsum.photos/seed/basketball/320/180",
    },
    {
      id: 3,
      title: "Top 10 Hiking Trails in the World",
      channel: "Adventure Seekers",
      views: "2.1M views",
      timeAgo: "1 week ago",
      duration: "15:42",
      thumbnail: "https://picsum.photos/seed/hiking/320/180",
    },
    {
      id: 4,
      title: "The Future of Space Exploration",
      channel: "Space News",
      views: "1.2M views",
      timeAgo: "2 weeks ago",
      duration: "12:30",
      thumbnail: "https://picsum.photos/seed/space/320/180",
    }
    ];
    
    const shorts = [
      {
        id: 1,
        thumbnail: "https://picsum.photos/seed/hiking/150/250",
        duration: "0:41",
      },
      {
        id: 2,
        thumbnail: "https://picsum.photos/seed/soccer/150/250",
        duration: "0:35",
      },
      {
        id: 3,
        thumbnail: "https://picsum.photos/seed/computer/150/250",
        duration: "1:52",
      },
    ];

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
      </SafeAreaView>
            
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
          
      {/* Video One */}
      <ScrollView style={styles.scrollView}>
        {videos.slice(0, 1).map((video) => (
          <View key={video.id} style={styles.videoContainer}>
            <View style={styles.thumbnailWrapper}>
              <Image source={{ uri: video.thumbnail }} style={styles.thumbnailFull} />
              <View style={styles.durationBadge}>
                <Text style={styles.durationText}>{video.duration}</Text>
              </View>
          </View>
          <View style={styles.videoInfo}>
            <Text style={styles.videoTitle}>{video.title}</Text>
            <Text style={styles.videoChannel}>{video.channel}</Text>
            <Text style={styles.videoStats}> {video.views} • {video.timeAgo} </Text>
          </View>
        </View>
      ))}

        {/* Section Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Breaking News</Text>
        </View>

        {/* Breaking News Video*/}
        <View style={styles.videoContainer}>
          <View style={styles.thumbnailWrapper}>
            <Image
              source={{ uri: videos[1].thumbnail }}
              style={styles.thumbnailFull}
            />
          <View style={styles.durationBadge}>
            <Text style={styles.durationText}>{videos[1].duration}</Text>
          </View>
        </View>
        <View style={styles.videoInfo}>
          <Text style={styles.videoTitle}>{videos[1].title}</Text>
          <Text style={styles.videoChannel}>{videos[1].channel}</Text>
          <Text style={styles.videoStats}> {videos[1].views} • {videos[1].timeAgo} </Text>
        </View>
      </View>

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

      {/* Videos */}
      {videos.slice(2).map((video) => (
        <View key={video.id} style={styles.videoContainer}>
          <View style={styles.thumbnailWrapper}>
            <Image source={{ uri: video.thumbnail }} style={styles.thumbnailFull} />
            <View style={styles.durationBadge}>
              <Text style={styles.durationText}>{video.duration}</Text>
            </View>
          </View>
          <View style={styles.videoInfo}>
            <Text style={styles.videoTitle}>{video.title}</Text>
            <Text style={styles.videoChannel}>{video.channel}</Text>
            <Text style={styles.videoStats}>{video.views} • {video.timeAgo}</Text>
          </View>
        </View>
      ))}

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
  videoContainer: {
    padding: 16,
  },
  videoChannel: {
    color: "#AAAAAA",
    fontSize: 14,
    marginTop: 2,
    marginBottom: 2,
  },
  videoInfo: {
    marginLeft: 12,
  },
  videoTitle: {
    color: "white",
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  videoDuration: {
    color: "#AAAAAA",
    fontSize: 12,
    marginTop: 2,
  },
  videoStats: {
    color: "#AAAAAA",
    fontSize: 12,
    marginTop: 2,
  },
  thumbnail: {
    width: 120,
    height: 90,
    borderRadius: 8,
  },
  thumbnailWrapper: {
    position: "relative",
  },
  thumbnailFull: {
    width: "100%",
    height: 200,
    borderRadius: 0,
  },
  durationBadge: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "#000000cc",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  durationText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  sectionHeader: {
    padding: 16,
  },
  sectionTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  shortsHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  shortsLogo: {
    width: 32,
    height: 22,
    marginRight: 8,
  },
  shortsTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  shortsContainer: {
    paddingLeft: 16,
    paddingRight: 8,
    paddingBottom: 16,
  },
  shortItem: {
    marginRight: 16,
    position: "relative",
  },
  shortThumbnail: {
    width: 150,
    height: 250,
    borderRadius: 8,
  },
  shortDurationBadge: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "#000000cc",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  shortDurationText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  shortMoreButton: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#000000cc",
    padding: 4,
    borderRadius: 20,
  },
  moreButtonText: {
    color: "white",
    fontSize: 16,
  },
  shortTitle: {
    color: "white",
    fontSize: 14,
    marginTop: 4,
  },
  shortChannel: {
    color: "#AAAAAA",
    fontSize: 12,
    marginTop: 2,
  },
  shortStats: {
    color: "#AAAAAA",
    fontSize: 12,
    marginTop: 2,
  },
  shortInfo: {
    marginLeft: 8,
    width: 150,
  },
});
