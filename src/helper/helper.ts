export const getVideoId = (url: string): string | null => {
    try {
      const urlObj = new URL(url);
      
      // Handle common YouTube URL formats
      if (urlObj.hostname === 'www.youtube.com' || urlObj.hostname === 'youtube.com') {
        const videoId = urlObj.searchParams.get('v');
        if (videoId) return videoId;
      }
  
      if (urlObj.hostname === 'youtu.be') {
        return urlObj.pathname.substring(1); // Extract the video ID from the path
      }
  
      // Handle iframe URLs
      const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|v\/|videoseries\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      if (match) return match[1];
  
      return null; // If no valid video ID is found
    } catch (error) {
      console.error('Error extracting video ID:', error);
      return null;
    }
  };
  