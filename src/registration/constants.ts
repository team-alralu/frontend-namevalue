import type { Mbti } from '../app/types';

type MbtiCardList = {
  mbti: Mbti;
  accent: boolean;
}[];

export const MbtiList: MbtiCardList = [
  { mbti: 'ISTJ', accent: false },
  { mbti: 'ISFJ', accent: true },
  { mbti: 'INFJ', accent: false },
  { mbti: 'INTJ', accent: true },
  { mbti: 'ISTP', accent: true },
  { mbti: 'ISFP', accent: false },
  { mbti: 'INFP', accent: true },
  { mbti: 'INTP', accent: false },
  { mbti: 'ESTP', accent: false },
  { mbti: 'ESFP', accent: true },
  { mbti: 'ENFP', accent: false },
  { mbti: 'ENTP', accent: true },
  { mbti: 'ESTJ', accent: true },
  { mbti: 'ESFJ', accent: false },
  { mbti: 'ENFJ', accent: true },
  { mbti: 'ENTJ', accent: false }
];
