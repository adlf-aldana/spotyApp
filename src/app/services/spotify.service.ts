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
}
