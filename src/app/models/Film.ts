export default interface Film {
  adult: boolean;
  gender: number;
  id: number;
  know_for: [
    {
      adult: boolean;
      backdrop_path: string;
      genre_ids: [number, number, number];
      id: number;
      media_type: string;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: string;
      release_date: string;
      title: string;
      video: false;
      vote_average: number;
      vote_count: number;
    },
    {
      adult: boolean;
      backdrop_path: string;
      genre_ids: [number, number, number];
      id: number;
      media_type: string;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: string;
      release_date: string;
      title: string;
      video: false;
      vote_average: number;
      vote_count: number;
    },
    {
      adult: boolean;
      backdrop_path: string;
      genre_ids: [number, number, number];
      id: number;
      media_type: string;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: string;
      release_date: string;
      title: string;
      video: false;
      vote_average: number;
      vote_count: number;
    }
  ];
  know_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}
