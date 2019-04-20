import { Component, OnInit, Inject } from '@angular/core';
import { SpotifyService } from '../shared/spotify-service';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { SnackBarService } from '../shared/snack-bar-service';

@Component({
  selector: 'app-playlist-dialog',
  templateUrl: './playlist-dialog.component.html',
  styleUrls: ['./playlist-dialog.component.sass'],
  providers: [SpotifyService, SnackBarService]
})
export class PlaylistDialogComponent implements OnInit {

  playlistName: string;
  isPublic: boolean;

  constructor(private spotifyService: SpotifyService, public dialogRef: MatDialogRef<PlaylistDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data, private snackBarService: SnackBarService) { }

  ngOnInit() {
    if (this.data.playlist) {
      this.playlistName = this.data.playlist.name;
      this.isPublic = this.data.playlist.public;
    }
  }

  save() {
    if (this.data.playlist) {
      this.spotifyService.updatePlaylist(this.data.userId, this.data.playlist.id, {
        name: this.playlistName, public: this.isPublic
      }).subscribe(() => {
        this.snackBarService.success('Success');
        this.dialogRef.close();
      }, error => {
        this.snackBarService.error(error.error.error.message);
      });
    } else {
      this.spotifyService.savePlaylist(this.data.userId, {
        name: this.playlistName, public: this.isPublic
      }).subscribe(() => {
        this.dialogRef.close();
      }, error => {
        this.snackBarService.error(error.error.error.message);
      });
    }
  }

}
