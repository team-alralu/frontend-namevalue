type PageParams = { slug: string[] };
type PageSearchParams = { [key: string]: string | undefined };

export interface ServerPageProps {
  params?: PageParams;
  searchParams?: PageSearchParams;
}

export type Mbti =
  | 'ISTJ'
  | 'ISFJ'
  | 'INFJ'
  | 'INTJ'
  | 'ISTP'
  | 'ISFP'
  | 'INFP'
  | 'INTP'
  | 'ESTP'
  | 'ESFP'
  | 'ENFP'
  | 'ENTP'
  | 'ESTJ'
  | 'ESFJ'
  | 'ENFJ'
  | 'ENTJ';
