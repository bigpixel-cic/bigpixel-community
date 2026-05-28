'use client';

import { useRef } from 'react';
import { type CldVideoPlayerProps, CldVideoPlayer as VideoPlayer } from 'next-cloudinary';

export default function CldVideoPlayer(props: CldVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return <VideoPlayer videoRef={videoRef} {...props} />;
}
