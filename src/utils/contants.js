const GOOGLE_API_KEY = "AIzaSyBZamzM0YvTdQPjlMOge3nn175KHVjtffg";

export const YOUTUBE_VIDEOS_API =
  "  https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_LIST_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&forMine=true&maxResults=25&q=fun&type=video&key=";
