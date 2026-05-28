import React from 'react';
import useSound from 'use-sound';
import Sound from '../assets/audio/musicbox.wav';

export const SoundButton: React.FC = () => {
  // use-soundフックから再生関数 play を取得
  const [play] = useSound(Sound, {
    volume: 0.5, // 音量の調整（0.0〜1.0）
  });
  return (
    <button onClick={() => play()}>
      音を鳴らす
    </button>
  );
};

export default SoundButton;