import React, { useMemo } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import videojs from 'video.js'
// import 'videojs-youtube'
import 'video.js/dist/video-js.css'

interface YoutubePlayeriProps {
    url: string
  }

const YoutubePlayer = ({url}: YoutubePlayeriProps) => {
  const videoJsOptions = useMemo(() => {
    return {
      autoplay: false,
      controls: true,
      aspectRatio: '16:9',
      fluid: true,
      // preload: 'auto',
      html5: {
        vhs: {
          smoothQualityChange: true,
          overrideNative: true,
        },
      },
      techOrder: ["youtube"],
      sources: [{
          type: "video/youtube",
          src: url
      }]
    }
  }, [url])
  
  const [player, setPlayer] = useState<any>()
  const videoJSRef = useRef<any>(null)

  useEffect(() => {
    setPlayer(videojs(videoJSRef.current, videoJsOptions))

    return () => {
      if (player) {
        player.dispose()
      }
    }
  }, [player,videoJsOptions])

  return (
    <div data-vjs-player style={{ height: '100%' }}>
      <video
        ref={videoJSRef}
        // id="videojs"
        className="video-js vjs-big-play-centered vjs-default-skin"
      />
    </div>
  )
}

export default YoutubePlayer
