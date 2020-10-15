import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [],
})
export class ArtistaComponent implements OnInit {
  artista: any = {};
  loading: boolean;

  constructor(
    private activateRoute: ActivatedRoute,
    private spotify: SpotifyService
  ) {
    this.activateRoute.params.subscribe((params) => {
      this.getArtista(params['id']);
    });
  }

  ngOnInit(): void {}

  getArtista(id: string) {
    this.loading = true;
    this.spotify.getArtista(id).subscribe((artista) => {
      this.artista = artista;
      this.loading = false;
    });
  }
}
