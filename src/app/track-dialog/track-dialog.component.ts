import { Component, OnInit, Inject } from '@angular/core';
import { SpotifyService } from '../shared/spotify-service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { SnackBarService } from '../shared/snack-bar-service';

@Component({
  selector: 'app-track-dialog',
  templateUrl: './track-dialog.component.html',
  styleUrls: ['./track-dialog.component.sass'],
  providers: [SpotifyService, SnackBarService]
})
export class TrackDialogComponent implements OnInit {

  tracks = { tracks: { items: [] } };
  searchQuery;

  constructor(private spotifyService: SpotifyService, @Inject(MAT_DIALOG_DATA) private data, private snackBarService: SnackBarService) { }

  ngOnInit() {
  }

  searchTrack() {
    this.spotifyService.searchTrack(this.searchQuery).subscribe(response => {
      this.tracks = response;
    });
  }

  addTrack(trackURI) {
    this.spotifyService.addTrack(this.data.userId, this.data.playlistId, trackURI).subscribe(() => {
      this.snackBarService.success('Track added');
    }, error => {
      this.snackBarService.error(error.error.error.message);
    });
  }

}
