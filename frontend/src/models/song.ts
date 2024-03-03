export interface Song {
    _id: string,
    title: string;
    artist: string;
    album?: string;
    genre: string;
    user?: string;
}

export interface Statistics {
    totalSongs: number;
    totalArtists: number;
    totalAlbums: number;
    totalGenres: number;
    genreCounts: { _id: string; count: number }[];
    artistSongCounts: { _id: string; count: number }[];
    albumSongCounts: { _id: string; count: number }[];
  }