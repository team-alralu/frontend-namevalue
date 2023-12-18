type PageParams = { slug: string[] };
type PageSearchParams = { [key: string]: string | undefined };

export interface ServerPageProps {
  params?: PageParams;
  searchParams?: PageSearchParams;
}
