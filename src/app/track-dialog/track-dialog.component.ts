import { Component, OnInit, Inject } from '@angular/core';
import { SpotifyService } from '../shared/spotify-service';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-track-dialog',
  templateUrl: './track-dialog.component.html',
  styleUrls: ['./track-dialog.component.sass'],
  providers: [SpotifyService]
})
export class TrackDialogComponent implements OnInit {

  tracks = { tracks: { items: [] } };
  searchQuery;

  constructor(private spotifyService: SpotifyService, @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
  }

  searchTrack() {
    this.spotifyService.searchTrack(this.searchQuery).subscribe(response => {
      this.tracks = response;
    });
  }

  addTrack(trackURI) {
    this.spotifyService.addTrack(this.data.userId, this.data.playlistId, trackURI).subscribe();
  }

}
