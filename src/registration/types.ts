export type RegistrationStep = 'mbti' | 'name' | 'characters' | 'likeability' | 'review' | 'complete';

export type RegistrationFormData = {
  mbti: string;
  name: string;
  characters: number[];
  likeability: number;
  review: string;
};
