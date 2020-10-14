import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAlhUViQlbF96sAGWKjhUN-z2r1Fd13PamdghVoiddOPYYEJQTajBdriyE-xWIvhd8ZaqHHcco3kf59ECk',
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {
      headers,
    });
  }

  getArtista(termino: string) {
    console.log(termino);

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQA6vrmUJIkHTcSJ9SYT_GonRCiRzer_b5cE7Kwp-Lc477NoyyQxPeEipGgpRE-2achBPyq_SHoWyMA9kOs',
    });

    return this.http.get(
      `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,
      {
        headers,
      }
    );
  }
}
