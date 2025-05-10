import React from 'react';

const VideoBackground = () => {
  // The video path needs to be relative to the `public` directory.
  // Special characters in filenames can be tricky. If it doesn't load,
  // renaming the video to something simple (e.g., "elden-ring-bg.mp4") might be necessary.
  const videoSrc = '/images/backgrounds/ELDEN RING™ 2024-07-20 23-09-54.mp4';

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline // Important for mobile browsers
        className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
        // style={{ filter: 'brightness(0.7) contrast(1.1)' }} // Optional: adjust brightness/contrast
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Optional: Add an overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
    </div>
  );
};

export default VideoBackground; 