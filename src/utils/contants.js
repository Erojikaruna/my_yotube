const GOOGLE_API_KEY = "AIzaSyBZamzM0YvTdQPjlMOge3nn175KHVjtffg";

export const YOUTUBE_VIDEOS_API =
  "  https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_CHANNEL_ID =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=&key= " +
  GOOGLE_API_KEY;

export const YOUTUBE_RELATED_ID =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=Ks-_Mh1QhMc&type=video&key=" +
  GOOGLE_API_KEY;
