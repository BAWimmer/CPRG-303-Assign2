import Feather from "@expo/vector-icons/Feather";
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

export default function HomeScreen() {
  const filterTabs = [
    "All",
    "New to you",
    "Gaming",
    "Weather",
    "Food",
    "Sports",
    "Podcasts",
    "Music",
    "News",
    "Movies",
    "TV Shows",
    "Live Streams",
  ];

  // Mock video data with comments
  const videos = [
    {
      id: 1,
      title: "Funny Cat Videos Compilation",
      channel: "Funny Cats",
      views: "2.1M views",
      timeAgo: "3 days ago",
      duration: "15:34",
      thumbnail: "https://picsum.photos/seed/picture1/320/180",
      channelAvatar: "https://picsum.photos/seed/channel1/40/40",
      showComments: true,
      commentCount: 184,
      comments: [
        {
          id: 1,
          username: "M",
          text: "These cats are hilarious! My favorite is the one at 3:45 where the cat jumps off the counter. Thanks for the laughs!",
          avatar: "https://picsum.photos/seed/user1/40/40",
        },
      ],
    },
    {
      id: 2,
      title: "Best Travel Destinations This Year",
      channel: "Travel Vlog",
      views: "845K views",
      timeAgo: "1 week ago",
      duration: "22:15",
      thumbnail: "https://picsum.photos/seed/travel/320/180",
      channelAvatar: "https://picsum.photos/seed/channel2/40/40",
      showComments: false,
    },
    {
      id: 3,
      title: "Quick Cooking Tips for Beginners",
      channel: "Chef's Corner",
      views: "156K views",
      timeAgo: "2 days ago",
      duration: "8:42",
      thumbnail: "https://picsum.photos/seed/cooking1/320/180",
      channelAvatar: "https://picsum.photos/seed/channel3/40/40",
      showComments: true,
      commentCount: 92,
      comments: [
        {
          id: 1,
          username: "HomeChef",
          text: "This really helped me! I've been struggling with knife skills and your technique is so much easier.",
          avatar: "https://picsum.photos/seed/user3/40/40",
        },
      ],
    },
    {
      id: 4,
      title: "Relaxing Nature Sounds for Sleep",
      channel: "Nature Bliss",
      views: "95K views",
      timeAgo: "5 days ago",
      duration: "18:27",
      thumbnail: "https://picsum.photos/seed/picture2/320/180",
      channelAvatar: "https://picsum.photos/seed/channel4/40/40",
      showComments: false,
    },
  ];

  // Mock breaking news data
  const breakingNews = [
    {
      id: 1,
      duration: "0:52",
      thumbnail: "https://picsum.photos/seed/news1/320/180",
      source: "CityNews",
    },
    {
      id: 2,
      duration: "1:15",
      thumbnail: "https://picsum.photos/seed/news2/320/180",
      source: "CBC News",
    },
    {
      id: 3,
      duration: "2:30",
      thumbnail: "https://picsum.photos/seed/news3/320/180",
      source: "Global News",
    },
    {
      id: 4,
      duration: "1:45",
      thumbnail: "https://picsum.photos/seed/news4/320/180",
      source: "CTV News",
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
              <Text style={styles.headerIcon}>
                <Feather name="cast" size={24} color="white" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIconButton}>
              <View style={styles.notificationContainer}>
                <Feather name="bell" size={24} color="white" />
                <View style={styles.notificationBadge}>
                  <Text style={styles.notificationText}>2</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIconButton}>
              <Text style={styles.headerIcon}>
                <Feather name="search" size={24} color="white" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
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

        {/* TikTok Sponsored Content */}
        <View style={styles.sponsoredContainer}>
          <View style={styles.sponsoredHeader}>
            <Image
              source={{ uri: "https://picsum.photos/seed/tiktok/40/40" }}
              style={styles.sponsoredAvatar}
            />
            <View style={styles.sponsoredInfo}>
              <Text style={styles.sponsoredTitle}>
                Fun times start with TikTok. | TikTok
              </Text>
              <Text style={styles.sponsoredSubtitle}>
                Always curious? Try for yourself by downloading TikTok today.
              </Text>
              <View style={styles.sponsoredMeta}>
                <Text style={styles.sponsoredLabel}>Sponsored</Text>
                <Text style={styles.sponsoredRating}>• 4.4★</Text>
                <Text style={styles.sponsoredPrice}>FREE</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.sponsoredMore}>
              <Feather name="more-vertical" size={20} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.sponsoredContent}>
            <Image
              source={{ uri: "https://picsum.photos/seed/couple/400/250" }}
              style={styles.sponsoredImage}
            />
            <View style={styles.sponsoredOverlay}>
              <Text style={styles.sponsoredOverlayText}>hosting</Text>
            </View>
            <Image
              source={{ uri: "https://picsum.photos/seed/tiktok-logo/30/30" }}
              style={styles.tiktokLogo}
            />
          </View>

          <View style={styles.sponsoredButtons}>
            <TouchableOpacity style={styles.watchButton}>
              <Text style={styles.watchButtonText}>Watch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.installButton}>
              <Text style={styles.installButtonText}>Install</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Regular Videos */}
        <View style={styles.videosContainer}>
          {videos.map((video) => (
            <View key={video.id} style={styles.videoWrapper}>
              <TouchableOpacity style={styles.videoItem}>
                <View style={styles.thumbnailContainer}>
                  <Image
                    source={{ uri: video.thumbnail }}
                    style={styles.videoThumbnail}
                  />
                  <View style={styles.durationBadge}>
                    <Text style={styles.durationText}>{video.duration}</Text>
                  </View>
                </View>

                <View style={styles.videoDetails}>
                  <Image
                    source={{ uri: video.channelAvatar }}
                    style={styles.channelAvatar}
                  />
                  <View style={styles.videoInfo}>
                    <Text style={styles.videoTitle} numberOfLines={2}>
                      {video.title}
                    </Text>
                    <Text style={styles.channelName}>{video.channel}</Text>
                    <Text style={styles.videoMeta}>
                      {video.views} • {video.timeAgo}
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.videoMore}>
                    <Feather name="more-vertical" size={16} color="#AAAAAA" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>

              {/* Comments Section - Only show if showComments is true */}
              {video.showComments && (
                <View style={styles.commentsContainer}>
                  <View style={styles.commentsHeader}>
                    <Text style={styles.commentsTitle}>
                      Comments {video.commentCount}
                    </Text>
                    <TouchableOpacity>
                      <Feather name="more-vertical" size={16} color="#AAAAAA" />
                    </TouchableOpacity>
                  </View>

                  {video.comments?.map((comment) => (
                    <View key={comment.id} style={styles.commentItem}>
                      <View style={styles.commentAvatar}>
                        <Text style={styles.commentAvatarText}>
                          {comment.username.charAt(0)}
                        </Text>
                      </View>
                      <View style={styles.commentContent}>
                        <Text style={styles.commentText} numberOfLines={3}>
                          <Text style={styles.commentUsername}>
                            {comment.username}
                          </Text>
                          {", "}
                          {comment.text}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Breaking News Section */}
        <View style={styles.breakingNewsContainer}>
          <View style={styles.breakingNewsHeader}>
            <Text style={styles.breakingNewsTitle}>Breaking news</Text>
            <TouchableOpacity>
              <Feather name="more-vertical" size={20} color="white" />
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.breakingNewsScroll}
          >
            {breakingNews.map((news) => (
              <TouchableOpacity key={news.id} style={styles.newsItem}>
                <View style={styles.newsThumbnailContainer}>
                  <Image
                    source={{ uri: news.thumbnail }}
                    style={styles.newsThumbnail}
                  />
                  <View style={styles.newsDurationBadge}>
                    <Text style={styles.newsDurationText}>{news.duration}</Text>
                  </View>
                  <View style={styles.newsLogo}>
                    <Text style={styles.newsLogoText}>{news.source}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
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
  notificationContainer: {
    position: "relative",
  },
  notificationBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#FF0000",
    borderRadius: 8,
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
  sponsoredContainer: {
    margin: 16,
    backgroundColor: "#181818",
    borderRadius: 12,
    overflow: "hidden",
  },
  sponsoredHeader: {
    flexDirection: "row",
    padding: 12,
    alignItems: "flex-start",
  },
  sponsoredAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  sponsoredInfo: {
    flex: 1,
  },
  sponsoredTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
  },
  sponsoredSubtitle: {
    color: "#AAAAAA",
    fontSize: 12,
    marginBottom: 8,
  },
  sponsoredMeta: {
    flexDirection: "row",
    alignItems: "center",
  },
  sponsoredLabel: {
    color: "#AAAAAA",
    fontSize: 12,
  },
  sponsoredRating: {
    color: "#AAAAAA",
    fontSize: 12,
    marginHorizontal: 4,
  },
  sponsoredPrice: {
    color: "#AAAAAA",
    fontSize: 12,
  },
  sponsoredMore: {
    padding: 4,
  },
  sponsoredContent: {
    position: "relative",
    height: 200,
  },
  sponsoredImage: {
    width: "100%",
    height: "100%",
  },
  sponsoredOverlay: {
    position: "absolute",
    bottom: 60,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  sponsoredOverlayText: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.7)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  tiktokLogo: {
    position: "absolute",
    top: 16,
    left: 16,
    width: 30,
    height: 30,
  },
  sponsoredButtons: {
    flexDirection: "row",
    padding: 12,
    gap: 12,
  },
  watchButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#AAAAAA",
    alignItems: "center",
  },
  watchButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
  installButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
  },
  installButtonText: {
    color: "black",
    fontSize: 14,
    fontWeight: "500",
  },
  videoSection: {
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  comparisonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#181818",
    borderRadius: 12,
    padding: 20,
  },
  comparisonItem: {
    alignItems: "center",
    flex: 1,
  },
  comparisonLabel: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  comparisonImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
  },
  arrowContainer: {
    paddingHorizontal: 20,
  },
  arrow: {
    color: "#FF0000",
    fontSize: 30,
    fontWeight: "bold",
  },
  videosContainer: {
    paddingHorizontal: 16,
  },
  videoWrapper: {
    marginBottom: 16,
  },
  videoItem: {
    marginBottom: 0,
  },
  thumbnailContainer: {
    position: "relative",
    marginBottom: 12,
  },
  videoThumbnail: {
    width: "100%",
    height: 200,
    borderRadius: 12,
  },
  durationBadge: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  durationText: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
  },
  videoDetails: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  channelAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
  },
  videoInfo: {
    flex: 1,
  },
  videoTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 22,
    marginBottom: 4,
  },
  channelName: {
    color: "#AAAAAA",
    fontSize: 14,
    marginBottom: 2,
  },
  videoMeta: {
    color: "#AAAAAA",
    fontSize: 14,
  },
  videoMore: {
    padding: 8,
  },
  // New Comment Styles
  commentsContainer: {
    backgroundColor: "#181818",
    marginHorizontal: 0,
    marginBottom: 16,
    borderRadius: 12,
    padding: 12,
  },
  commentsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  commentsTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  commentItem: {
    flexDirection: "row",
    marginBottom: 12,
  },
  commentAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  commentAvatarText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  commentContent: {
    flex: 1,
  },
  commentText: {
    color: "#AAAAAA",
    fontSize: 14,
    lineHeight: 20,
  },
  commentUsername: {
    color: "white",
    fontWeight: "500",
  },
  breakingNewsContainer: {
    paddingVertical: 16,
  },
  breakingNewsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  breakingNewsTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  breakingNewsScroll: {
    paddingHorizontal: 16,
  },
  newsItem: {
    marginRight: 12,
    width: 280,
  },
  newsThumbnailContainer: {
    position: "relative",
    height: 157,
    borderRadius: 12,
    overflow: "hidden",
  },
  newsThumbnail: {
    width: "100%",
    height: "100%",
  },
  newsDurationBadge: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  newsDurationText: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
  },
  newsLogo: {
    position: "absolute",
    bottom: 8,
    left: 8,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  newsLogoText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});
