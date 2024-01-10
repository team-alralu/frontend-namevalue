'use client';

import LottiePlayer from 'react-lottie-player';
import Question from '../../../public/QuestionLottie.json';

export const QuestionLottie = () => {
  return (
    <LottiePlayer
      aria-label="question image"
      loop
      animationData={Question}
      play
      style={{ width: '100%', height: '100%' }}
    />
  );
};
