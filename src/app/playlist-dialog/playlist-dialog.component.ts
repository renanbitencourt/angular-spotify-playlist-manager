import { Component, OnInit, Inject } from '@angular/core';
import { SpotifyService } from '../shared/spotify-service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-playlist-dialog',
  templateUrl: './playlist-dialog.component.html',
  styleUrls: ['./playlist-dialog.component.sass'],
  providers: [SpotifyService]
})
export class PlaylistDialogComponent implements OnInit {

  playlistName: string;
  isPublic: boolean;

  constructor(private spotifyService: SpotifyService, public dialogRef: MatDialogRef<PlaylistDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
    if (this.data.playlist) {
      this.playlistName = this.data.playlist.name;
    }
  }

  save() {
    if (this.data.playlist) {
      this.spotifyService.updatePlaylist(this.data.userId, this.data.playlist.id, {
        name: this.playlistName, public: this.isPublic
      }).subscribe(() => {
        this.dialogRef.close();
      });
    } else {
      this.spotifyService.savePlaylist(this.data.userId, {
        name: this.playlistName, public: this.isPublic
      }).subscribe(() => {
        this.dialogRef.close();
      });
    }
  }

}
