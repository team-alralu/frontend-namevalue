import type { Mbti } from '../app/types';

export type RegistrationStep = 'mbti' | 'name' | 'characters' | 'likeability' | 'review';

export type RegistrationFormData = {
  mbti: string;
  name: string;
  characters: number[];
  likeability: number;
  review: string;
};
