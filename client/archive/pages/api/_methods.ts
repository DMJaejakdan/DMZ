export async function AC(type: string, input: string) {
  const url = `${process.env.NEXT_PUBLIC_ROOT}/dmzarchive/api/autocomplete?type=${type}&keyword=${input}`;
  const data = await fetch(url).then(res => res.json());
  return data;
}

export async function MS(queries: {}) {
  //k:v 쌍으로 있는 쿼리들을 쿼리 스트링으로 풀어줌
  const string = Object.entries(queries)
    .filter(
      ([_, value]) => value !== undefined && value !== null && value !== ''
    )
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  const url = `${process.env.NEXT_PUBLIC_ROOT}/dmzarchive/api/movieSearch?${string}`;
  const data = await fetch(url).then(res => res.json());
  return data;
}
export async function DS(queries: {}) {
  //k:v 쌍으로 있는 쿼리들을 쿼리 스트링으로 풀어줌
  const string = Object.entries(queries)
    .filter(
      ([_, value]) => value !== undefined && value !== null && value !== ''
    )
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  const url = `${process.env.NEXT_PUBLIC_ROOT}/dmzarchive/api/dramaSearch?${string}`;
  const data = await fetch(url).then(res => res.json());
  return data;
}
export async function PS(queries: {}) {
  //k:v 쌍으로 있는 쿼리들을 쿼리 스트링으로 풀어줌
  const string = Object.entries(queries)
    .filter(
      ([_, value]) => value !== undefined && value !== null && value !== ''
    )
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  console.log(string);
  const url = `${process.env.NEXT_PUBLIC_ROOT}/dmzarchive/api/personSearch?${string}`;
  const data = await fetch(url).then(res => res.json());
  return data;
}
export interface ContentResponse {
  data: {
    id: number;
    tmdbId: number;
    nameKr: string;
    nameEn: string;
    kind: 'DRAMA' | 'MOVIE';
    posterPath: string;
    releasedDate: string;
    rating: string;
    plot: string;
    person: any;
    genreResponseList: {
      tmdbId: number;
      name: string;
    }[];
    movieInfoResponse: any;
    dramaInfoResponse: any;
  }[];
  pageInfo: {
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
  };
}
export interface PersonResponse {
  data: {
    id: number;
    tmdbId: number;
    nameKr: string;
    nameEn: string;
    profilePath: string;
    birth: string;
    death: null;
    gender: number;
    area: string;
  }[];
  pageInfo: {
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
  };
}
export interface Genre {
  id: number;
  name: string;
}
export interface Person {
  id: number;
  nameKr: string;
  birth: string | null;
}
export interface Keyword {
  id: number;
  word: string;
}
export interface Company {
  id: number;
  name: string;
}
export interface Channel {
  channel: string;
}
