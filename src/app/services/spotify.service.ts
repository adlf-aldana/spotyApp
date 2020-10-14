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
        'Bearer BQAkCVDK5f1_ddfcoXzo49H-Gy5v0ePdGLPhZYzgaf4V0Afm2GN9HkpXuOY3eAZhEo1Hy7hpOMmEpeGK_QE',
    });

    this.http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
