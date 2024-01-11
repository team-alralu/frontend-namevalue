import type { Mbti } from '../app/types';
import type { RegistrationStep, RegistrationFormData } from './types';

export type RegistrationAction =
  | { type: 'SET_STEP'; payload: RegistrationStep }
  | { type: 'SET_MBTI'; payload: Mbti | null }
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_CHARACTERS'; payload: number[] }
  | { type: 'SET_LIKEABILITY'; payload: number }
  | { type: 'SET_REVIEW'; payload: string };

export const registrationStore = (state: RegistrationFormData, action: RegistrationAction): RegistrationFormData => {
  switch (action.type) {
    case 'SET_MBTI':
      return { ...state, mbti: action.payload };
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_CHARACTERS':
      return { ...state, characters: action.payload };
    case 'SET_LIKEABILITY':
      return { ...state, likeability: action.payload };
    case 'SET_REVIEW':
      return { ...state, review: action.payload };
    default:
      return state;
  }
};
